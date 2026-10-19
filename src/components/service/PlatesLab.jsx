import { useEffect, useRef, useState } from 'react'
import { Play, RotateCcw } from 'lucide-react'

// A harvest-poster scene split into the four printing plates. Each plate is a separate layer that
// multiplies onto the paper, exactly like ink on a press. Turn them on one at a time to build the color.

const SUN = 'M345 100 a45 45 0 1 0 -90 0 a45 45 0 1 0 90 0Z'
const BARN_BODY = 'M70 244V174L130 142L190 174V244Z'
const BARN = `${BARN_BODY} M112 244V206H148V244Z`
const FAR_HILLS = 'M0 196 Q70 170 150 188 T300 184 T480 190 V250 H0Z'
const FIELD = 'M0 248 Q120 226 250 242 T480 236 V292 H0Z'

const PLATES = [
  { id: 'c', name: 'Cyan', blurb: 'Sky, shadows, and cool tones', color: '#00aeef' },
  { id: 'm', name: 'Magenta', blurb: 'Sunset glow and warm tones', color: '#ec008c' },
  { id: 'y', name: 'Yellow', blurb: 'Sunlight and the fields', color: '#ffe600' },
  { id: 'k', name: 'Black', blurb: 'Detail, edges, and type', color: '#231f20' },
]

const HINTS = {
  0: 'Blank paper. Nothing has been printed yet.',
  c: 'Cyan carries the sky and cool shadows.',
  m: 'Magenta adds warmth: the sunset glow.',
  y: 'Yellow brings light: the sun and the fields.',
  k: 'Black adds the line work and type that make an image sharp.',
  cy: 'Cyan + yellow overprint to make green: hills and fields.',
  my: 'Magenta + yellow overprint to make red: the barn.',
  cm: 'Cyan + magenta overprint to make blue-violet: the evening sky.',
  all: 'All four plates. Every color in the poster comes from just these inks.',
}

function hint(on) {
  const list = PLATES.filter((p) => on[p.id]).map((p) => p.id)
  if (list.length === 0) return HINTS[0]
  if (list.length === 1) return HINTS[list[0]]
  if (list.length === 4) return HINTS.all
  const key = list.filter((i) => i !== 'k').join('')
  return HINTS[key] || `${list.map((i) => PLATES.find((p) => p.id === i).name).join(' + ')}: ${list.length} inks overprinting.`
}

function Scene({ on, offset }) {
  const style = (id, extra) => ({ mixBlendMode: 'multiply', opacity: on[id] ? 1 : 0, transition: 'opacity .45s ease', ...extra })
  return (
    <svg className="pl-scene" viewBox="-30 -30 540 400" role="img" aria-label="A harvest poster built up from cyan, magenta, yellow, and black printing plates">
      <defs>
        <mask id="pl-barn" maskUnits="userSpaceOnUse" x="-30" y="-30" width="540" height="400">
          <rect x="-30" y="-30" width="540" height="400" fill="#fff" />
          <path d={BARN_BODY} fill="#000" />
        </mask>
        <radialGradient id="pl-glow">
          <stop offset="0" stopColor="#ec008c" stopOpacity=".55" />
          <stop offset="1" stopColor="#ec008c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="-30" y="-30" width="540" height="400" fill="#f6f6f2" />
      <rect x="0" y="0" width="480" height="330" fill="#fff" />

      {/* Cyan plate */}
      <g style={style('c')}>
        <path d={`M0 0H480V212H0Z ${SUN}`} fill="#00aeef" fillOpacity=".5" fillRule="evenodd" mask="url(#pl-barn)" />
        <path d={FAR_HILLS} fill="#00aeef" fillOpacity=".75" mask="url(#pl-barn)" />
        <path d={FIELD} fill="#00aeef" fillOpacity=".55" />
        <rect x="0" y="-26" width="22" height="14" fill="#00aeef" />
      </g>

      {/* Magenta plate (the one that slides when you misregister) */}
      <g style={style('m', { transform: `translateX(${offset}px)` })}>
        <circle cx="300" cy="100" r="120" fill="url(#pl-glow)" />
        <path d={BARN} fill="#ec008c" fillRule="evenodd" />
        <rect x="30" y="-26" width="22" height="14" fill="#ec008c" />
      </g>

      {/* Yellow plate */}
      <g style={style('y')}>
        <path d={SUN} fill="#ffe600" />
        <path d={FAR_HILLS} fill="#ffe600" fillOpacity=".5" mask="url(#pl-barn)" />
        <path d={FIELD} fill="#ffe600" />
        <path d={BARN} fill="#ffe600" fillRule="evenodd" />
        <rect x="60" y="-26" width="22" height="14" fill="#ffe600" />
      </g>

      {/* Black plate */}
      <g style={style('k')} fill="none" stroke="#231f20" strokeLinecap="round" strokeLinejoin="round">
        <path d="M62 176L130 136L198 176" strokeWidth="7" />
        <path d="M112 244V206H148V244M112 206L148 244M148 206L112 244" strokeWidth="3" />
        <path d="M122 168h16v14h-16Z" strokeWidth="3" />
        <path d="M0 262H480M22 250V274M96 250V274M170 250V274M244 250V274M318 250V274M392 250V274M466 250V274" strokeWidth="2.5" />
        <path d="M70 72q8-9 16 0M92 56q7-8 14 0M180 40q8-9 16 0" strokeWidth="2.4" />
        <text x="24" y="318" fill="#231f20" stroke="none" fontFamily="Barlow Condensed, Arial Narrow, sans-serif" fontWeight="800" fontSize="25" letterSpacing="3">HARVEST FESTIVAL · MARSHALL, MN</text>
        <rect x="90" y="-26" width="22" height="14" fill="#231f20" stroke="none" />
        {/* crop marks */}
        <path d="M-6 0H-26M0 -6V-26M486 0H506M480 -6V-26M-6 330H-26M0 336V356M486 330H506M480 336V356" strokeWidth="1.2" />
      </g>
    </svg>
  )
}

export default function PlatesLab() {
  const [on, setOn] = useState({ c: false, m: false, y: false, k: true })
  const [offset, setOffset] = useState(0)
  const [running, setRunning] = useState(false)
  const timers = useRef([])
  const root = useRef(null)

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  // The first time the lab scrolls into view, build the poster up plate by plate.
  useEffect(() => {
    const node = root.current
    if (!node) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn({ c: true, m: true, y: true, k: true })
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setOn({ c: false, m: false, y: false, k: false })
      ;['k', 'c', 'm', 'y'].forEach((id, i) => {
        timers.current.push(setTimeout(() => setOn((s) => ({ ...s, [id]: true })), 600 + i * 1000))
      })
    }, { threshold: 0.45 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const toggle = (id) => setOn((s) => ({ ...s, [id]: !s[id] }))
  const clear = () => { timers.current.forEach(clearTimeout); setRunning(false); setOn({ c: false, m: false, y: false, k: false }); setOffset(0) }
  const run = () => {
    clear()
    setRunning(true)
    ;['k', 'c', 'm', 'y'].forEach((id, i) => {
      timers.current.push(setTimeout(() => setOn((s) => ({ ...s, [id]: true })), 500 + i * 900))
    })
    timers.current.push(setTimeout(() => setRunning(false), 500 + 4 * 900))
  }

  const count = PLATES.filter((p) => on[p.id]).length

  return (
    <div className="lab pl" ref={root}>
      <div className="pl__stage">
        <Scene on={on} offset={offset} />
        <p className="pl__hint" role="status" aria-live="polite">{hint(on)}</p>
      </div>

      <div className="lab-panel pl__panel">
        <span className="lab-label">Process color</span>
        <h3>Build the poster, one ink at a time.</h3>
        <p>Every color photo you have ever seen in print is made from just four inks. Switch the plates on and watch the color appear.</p>

        <div className="pl__plates" role="group" aria-label="Printing plates">
          {PLATES.map((p) => (
            <button type="button" key={p.id} className={on[p.id] ? 'is-on' : ''} aria-pressed={on[p.id]} onClick={() => toggle(p.id)} style={{ '--ink': p.color }}>
              <i aria-hidden="true">{p.id.toUpperCase()}</i>
              <span><b>{p.name}</b><small>{p.blurb}</small></span>
            </button>
          ))}
        </div>

        <div className="pl__actions">
          <button type="button" className="button button--yellow" onClick={run} disabled={running}>{running ? 'Printing…' : <>Run all four <Play size={16} fill="currentColor" /></>}</button>
          <button type="button" className="lab-reset" onClick={clear}><RotateCcw size={14} /> Clear plates</button>
        </div>

        <label className="pl__slider">
          <span>Misregister the magenta plate <b>{offset} px</b></span>
          <input type="range" min="0" max="12" step="1" value={offset} onChange={(e) => setOffset(Number(e.target.value))} disabled={!on.m} aria-label="Magenta plate offset in pixels" />
          <small>{on.m ? 'Edges get fuzzy and colors fringe when a plate slips. Registration marks keep every ink lined up.' : 'Turn the magenta plate on to try it.'}</small>
        </label>
        <p className="pl__count" aria-hidden="true">{count} of 4 inks on the sheet</p>
      </div>
    </div>
  )
}
