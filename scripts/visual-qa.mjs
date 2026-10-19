// Visual + accessibility QA. Needs the dev server on http://127.0.0.1:5173 (npm run dev) and Edge or Chrome.
//   npm run qa:visual                 all pages, desktop and mobile, full-page screenshots in .edge-qa/
//   ONLY=home,printing npm run qa:visual   a subset by name
//   WIDTHS=1440 npm run qa:visual          a single width
import { mkdirSync } from 'node:fs'
import { existsSync } from 'node:fs'
import puppeteer from 'puppeteer-core'
import axe from 'axe-core'

const candidates = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
]
const executablePath = process.env.BROWSER || candidates.find((p) => existsSync(p))
if (!executablePath) throw new Error('No Edge or Chrome found. Set BROWSER to its path.')

const OUT = process.env.OUT || '.edge-qa'
mkdirSync(OUT, { recursive: true })

const pages = [
  ['home', '/'],
  ['services', '/services'],
  ['printing', '/printing'],
  ['signs', '/signs'],
  ['promotional', '/promotional-products'],
  ['design', '/design'],
  ['mailing', '/mailing-finishing'],
  ['work', '/work'],
  ['shop', '/shop'],
  ['upload', '/upload'],
  ['about', '/about'],
  ['contact', '/contact'],
  ['quote', '/quote'],
  ['estimator', '/estimator'],
  ['eddm', '/eddm-planner'],
  ['artwork', '/artwork-help'],
  ['notfound', '/nope'],
]
const only = process.env.ONLY?.split(',')
const widths = (process.env.WIDTHS || '1440,390').split(',').map(Number)

const browser = await puppeteer.launch({ executablePath, headless: true })
let problems = 0

for (const [name, path] of pages) {
  if (only && !only.includes(name)) continue
  for (const width of widths) {
    const page = await browser.newPage()
    await page.setViewport({ width, height: width < 600 ? 844 : 1000, deviceScaleFactor: 1 })
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
    const errors = []
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
    page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`) })
    page.on('requestfailed', (r) => errors.push(`failed: ${r.url()}`))
    await page.evaluateOnNewDocument(() => localStorage.setItem('midvora-sample-visitor', JSON.stringify({ name: 'QA', email: 'qa@example.com' })))
    await page.goto(`http://127.0.0.1:5173${path}`, { waitUntil: 'networkidle0' })
    await page.evaluate(() => document.fonts.ready)
    // Scroll through the page so lazy images load, then return to the top.
    await page.evaluate(async () => {
      const step = Math.max(300, window.innerHeight * 0.8)
      for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)) }
      window.scrollTo(0, 0)
      await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r }))))
    })
    const layout = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, broken: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src) }))
    await page.addScriptTag({ content: axe.source })
    const a11y = await page.evaluate(() => window.axe.run({ resultTypes: ['violations'] }))
    await page.screenshot({ path: `${OUT}/${name}-${width}.png`, fullPage: true })
    const overflow = layout.scrollWidth > layout.viewport + 1
    if (overflow || layout.broken.length || errors.length) problems += 1
    process.stdout.write(`${name}@${width}: ${overflow ? `OVERFLOW ${layout.scrollWidth}>${layout.viewport} ` : ''}${layout.broken.length ? `BROKEN IMAGES ${layout.broken.join(',')} ` : ''}${a11y.violations.length} a11y\n`)
    for (const e of errors) process.stdout.write(`  ${e}\n`)
    for (const v of a11y.violations) {
      process.stdout.write(`  ${v.impact}: ${v.id} (${v.nodes.length}) ${v.help}\n`)
      for (const n of v.nodes.slice(0, 3)) process.stdout.write(`    ${n.target.join(' ')}\n`)
    }
    await page.close()
  }
}

await browser.close()
process.stdout.write(problems ? `\n${problems} page(s) with layout or load problems\n` : '\nNo layout or load problems\n')
process.exitCode = problems ? 1 : 0
