import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ITEMS = [
  { id: 'tee', label: 'T-shirt', methods: ['screen', 'embroidery'], best: 'screen', note: { screen: 'Screen printing lays down bold, durable color. It is the go-to for tees and spirit wear in any quantity.', embroidery: 'Embroidery on a tee is a premium, left-chest look. Great for staff and uniform shirts.' } },
  { id: 'cap', label: 'Cap', methods: ['embroidery', 'screen'], best: 'embroidery', note: { embroidery: 'Embroidery is the classic cap finish. Stitched logos keep their shape and stand up to wear.', screen: 'Screen printing works for simple one- or two-color caps and bold shapes.' } },
  { id: 'tote', label: 'Tote bag', methods: ['screen', 'embroidery'], best: 'screen', note: { screen: 'A big, flat canvas surface is made for screen printing: simple art, bold color.', embroidery: 'Embroidered totes feel upscale. Keep the design compact.' } },
  { id: 'mug', label: 'Mug', methods: ['imprint'], best: 'imprint', note: { imprint: 'Custom imprinting puts your logo on mugs, pens, and drinkware: the giveaways people actually keep.' } },
]

const METHODS = {
  screen: 'Screen print',
  embroidery: 'Embroidery',
  imprint: 'Imprint',
}

const COLORS = [
  { id: 'black', label: 'Black', hex: '#1c1b1b', ink: '#ffffff' },
  { id: 'white', label: 'White', hex: '#f4f4f1', ink: '#141313' },
  { id: 'cyan', label: 'Cyan', hex: '#00aeef', ink: '#141313' },
  { id: 'magenta', label: 'Magenta', hex: '#ec008c', ink: '#ffffff' },
  { id: 'yellow', label: 'Yellow', hex: '#ffe600', ink: '#141313' },
  { id: 'blue', label: 'Navy', hex: '#262a6e', ink: '#ffe600' },
]

const FONT = 'Barlow Condensed, Arial Narrow, sans-serif'

function Item({ id, hex, ink, text, method }) {
  const emb = method === 'embroidery'
  const shade = 'rgba(0,0,0,.14)'
  const txt = (x, y, size, extra = {}) => (
    <g {...extra}>
      <text x={x} y={y} textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize={size} fill={ink} stroke={emb ? ink : 'none'} strokeWidth={emb ? 0.9 : 0} strokeDasharray={emb ? '2.4 1.2' : undefined} style={{ textTransform: 'uppercase', letterSpacing: emb ? '.05em' : '.02em' }} filter={emb ? 'url(#stitch)' : 'url(#ink)'}>{text}</text>
    </g>
  )
  const sz = (w, base) => Math.min(base, w / (Math.max(text.length, 1) * 0.5))
  return (
    <svg viewBox="0 0 400 360" role="img" aria-label={`A ${id} with “${text}” in ${METHODS[method].toLowerCase()}`}>
      <defs>
        <filter id="stitch" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="2" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="1.4" /></filter>
        <filter id="ink" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale=".8" /></filter>
      </defs>
      <ellipse cx="200" cy="334" rx="140" ry="12" fill="rgba(0,0,0,.12)" />
      {id === 'tee' && (
        <g>
          <path d="M130 36 L56 74 L22 148 L84 172 L100 140 L100 322 H300 V140 L316 172 L378 148 L344 74 L270 36 Q200 82 130 36Z" fill={hex} />
          <path d="M130 36 Q200 82 270 36 Q200 120 130 36Z" fill={shade} />
          <path d="M100 140V322M300 140V322" stroke={shade} strokeWidth="3" />
          {emb ? txt(150, 130, sz(80, 30)) : txt(200, 190, sz(150, 56))}
        </g>
      )}
      {id === 'cap' && (
        <g>
          <path d="M70 230 Q70 90 200 80 Q330 90 330 230 Z" fill={hex} />
          <path d="M70 230 Q40 244 36 268 Q200 296 344 262 Q340 240 330 230Z" fill={hex} />
          <path d="M36 268 Q200 296 344 262 Q200 270 70 232Z" fill={shade} />
          <path d="M200 80V230M140 90Q150 170 160 230M260 90Q250 170 240 230" stroke={shade} strokeWidth="2.5" fill="none" />
          <circle cx="200" cy="82" r="8" fill={shade} />
          {txt(200, 176, sz(120, 40))}
        </g>
      )}
      {id === 'tote' && (
        <g>
          <path d="M130 118 Q130 30 200 30 Q270 30 270 118" fill="none" stroke={hex} strokeWidth="14" strokeLinecap="round" />
          <path d="M130 118 Q130 30 200 30 Q270 30 270 118" fill="none" stroke={shade} strokeWidth="14" strokeLinecap="round" opacity=".3" />
          <rect x="70" y="110" width="260" height="226" rx="6" fill={hex} />
          <path d="M70 110H330" stroke={shade} strokeWidth="6" />
          {txt(200, 238, sz(200, 66))}
        </g>
      )}
      {id === 'mug' && (
        <g>
          <path d="M296 120 H336 Q372 120 372 168 Q372 222 330 222 H296" fill="none" stroke={hex} strokeWidth="20" strokeLinecap="round" />
          <rect x="70" y="84" width="236" height="246" rx="14" fill={hex} />
          <rect x="70" y="84" width="236" height="22" rx="10" fill={shade} />
          <rect x="84" y="100" width="22" height="222" fill="rgba(255,255,255,.16)" />
          {txt(188, 222, sz(190, 62))}
        </g>
      )}
    </svg>
  )
}

export default function MerchLab() {
  const [item, setItem] = useState('tee')
  const [color, setColor] = useState('cyan')
  const [text, setText] = useState('Marshall Tigers')
  const [method, setMethod] = useState('screen')
  const current = ITEMS.find((i) => i.id === item)
  const c = COLORS.find((x) => x.id === color)
  const active = current.methods.includes(method) ? method : current.best
  const shown = text.trim() || 'Your Name'

  const pick = (id) => {
    const next = ITEMS.find((i) => i.id === id)
    setItem(id)
    if (!next.methods.includes(method)) setMethod(next.best)
  }

  return (
    <div className="lab mg">
      <div className="mg__stage" style={{ '--tint': c.hex }}>
        <Item id={item} hex={c.hex} ink={c.ink} text={shown} method={active} />
        <span className="mg__tag">{METHODS[active]}</span>
      </div>

      <div className="lab-panel mg__panel">
        <span className="lab-label">Merch Studio</span>
        <h3>Choose it. Name it. Decorate it.</h3>

        <div className="chip-row" role="group" aria-label="Item">
          {ITEMS.map((i) => <button type="button" key={i.id} className={item === i.id ? 'is-on' : ''} aria-pressed={item === i.id} onClick={() => pick(i.id)}>{i.label}</button>)}
        </div>

        <label className="lab-field">Your text
          <input value={text} maxLength={18} onChange={(e) => setText(e.target.value)} />
        </label>

        <div className="lab-field" role="group" aria-label="Item color">
          <span>Item color</span>
          <div className="swatches">
            {COLORS.map((x) => (
              <button type="button" key={x.id} className={color === x.id ? 'is-on' : ''} aria-pressed={color === x.id} aria-label={x.label} title={x.label} onClick={() => setColor(x.id)} style={{ '--bg': x.hex, '--fg': x.ink }}><b>Aa</b></button>
            ))}
          </div>
        </div>

        <div className="lab-field" role="group" aria-label="Decoration method">
          <span>Decoration</span>
          <div className="chip-row">
            {current.methods.map((m) => <button type="button" key={m} className={active === m ? 'is-on' : ''} aria-pressed={active === m} onClick={() => setMethod(m)}>{METHODS[m]}</button>)}
          </div>
        </div>
        <p className="mg__note" aria-live="polite">{current.note[active]}</p>

        <Link className="button button--yellow" to={`/quote?service=promotional&project=${encodeURIComponent(`${current.label.toLowerCase()}s with “${shown}” in ${METHODS[active].toLowerCase()}`)}`}>Quote this item <ArrowRight /></Link>
        <small className="lab-fine">A preview only. We confirm products, colors, and minimums with you. Prefer to browse? <a href="https://westernprinting.espwebsite.com" target="_blank" rel="noreferrer">Open the promotional shop</a>.</small>
      </div>
    </div>
  )
}
