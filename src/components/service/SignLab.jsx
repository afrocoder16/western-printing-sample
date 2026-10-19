import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const TYPES = [
  { id: 'storefront', label: 'Storefront', use: 'Dimensional letters or a flat panel above your door. The sign people find you by.' },
  { id: 'yard', label: 'Yard sign', use: 'Lightweight, weather-ready, and easy to stake. Great for events, campaigns, and real estate.' },
  { id: 'banner', label: 'Banner', use: 'Vinyl with reinforced hems and grommets. Hang it on a fence, a wall, or a building.' },
  { id: 'window', label: 'Window', use: 'Cut vinyl lettering applied right to the glass: hours, logos, and welcome messages.' },
]

const SCHEMES = [
  { id: 'sun', label: 'Black on yellow', bg: '#ffe600', fg: '#141313' },
  { id: 'mag', label: 'White on magenta', bg: '#ec008c', fg: '#ffffff' },
  { id: 'blue', label: 'White on blue', bg: '#2e3192', fg: '#ffffff' },
  { id: 'cyan', label: 'Black on cyan', bg: '#00aeef', fg: '#141313' },
  { id: 'ink', label: 'Yellow on black', bg: '#161515', fg: '#ffe600' },
]

const FONT = 'Barlow Condensed, Arial Narrow, sans-serif'
// Rough width of one uppercase Barlow Condensed character as a fraction of the font size.
const fit = (text, width, max) => Math.min(max, width / (Math.max(text.length, 1) * 0.5))

function Storefront({ l1, l2, s }) {
  return (
    <svg viewBox="0 0 520 340" role="img" aria-label={`A storefront sign reading ${l1}`}>
      <rect width="520" height="340" fill="#cfe6f5" />
      <rect y="262" width="520" height="78" fill="#b9b6b0" />
      <rect x="40" y="26" width="440" height="236" fill="#8a4a3b" />
      {Array.from({ length: 12 }, (_, i) => <path key={i} d={`M40 ${40 + i * 20}H480`} stroke="#74392c" strokeWidth="1.5" />)}
      <rect x="64" y="40" width="392" height="96" rx="4" fill={s.bg} stroke="#141313" strokeOpacity=".25" strokeWidth="3" />
      <text x="260" y={l2 ? 92 : 104} textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize={fit(l1, 350, l2 ? 62 : 74)} fill={s.fg} stroke="rgba(0,0,0,.25)" strokeWidth=".8" style={{ textTransform: 'uppercase', letterSpacing: '.02em' }}>{l1}</text>
      {l2 && <text x="260" y="122" textAnchor="middle" fontFamily={FONT} fontWeight="600" fontSize={fit(l2, 330, 22)} fill={s.fg} opacity=".92" style={{ textTransform: 'uppercase', letterSpacing: '.12em' }}>{l2}</text>}
      <path d="M64 136h392l-14 34H78Z" fill="#141313" opacity=".18" />
      <rect x="86" y="170" width="190" height="92" fill="#8bb8d6" stroke="#2a2a2a" strokeWidth="5" />
      <path d="M96 252l60-72M136 252l70-72" stroke="#fff" strokeOpacity=".4" strokeWidth="9" />
      <rect x="306" y="170" width="92" height="92" fill="#2a2a2a" />
      <rect x="314" y="178" width="76" height="84" fill="#7a9ab0" />
      <circle cx="380" cy="224" r="4" fill="#ffe600" />
      <rect x="416" y="226" width="34" height="36" fill="#4d7a45" />
      <circle cx="433" cy="218" r="22" fill="#5f9556" />
    </svg>
  )
}

function Yard({ l1, l2, s }) {
  return (
    <svg viewBox="0 0 520 340" role="img" aria-label={`A yard sign reading ${l1}`}>
      <rect width="520" height="340" fill="#cfe6f5" />
      <path d="M0 214H520V340H0Z" fill="#6aa65a" />
      <path d="M0 232Q130 214 260 226T520 218V340H0Z" fill="#5c9a4c" />
      <g transform="translate(70 -14)">
        <rect x="320" y="104" width="130" height="112" fill="#ece6da" />
        <path d="M308 106L385 52L462 106Z" fill="#7a4a3a" />
        <rect x="346" y="150" width="30" height="66" fill="#6b4a3a" />
        <rect x="394" y="130" width="38" height="34" fill="#9ec4dc" />
      </g>
      <rect x="150" y="196" width="7" height="104" fill="#8a8a8a" />
      <rect x="363" y="196" width="7" height="104" fill="#8a8a8a" />
      <g transform="translate(60 46)">
        <rect x="0" y="0" width="400" height="190" rx="6" fill={s.bg} stroke="#141313" strokeOpacity=".3" strokeWidth="3" />
        <rect x="10" y="10" width="380" height="170" rx="2" fill="none" stroke={s.fg} strokeOpacity=".35" strokeWidth="2" />
        <text x="200" y={l2 ? 98 : 112} textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize={fit(l1, 340, l2 ? 78 : 92)} fill={s.fg} style={{ textTransform: 'uppercase' }}>{l1}</text>
        {l2 && <text x="200" y="146" textAnchor="middle" fontFamily={FONT} fontWeight="600" fontSize={fit(l2, 320, 28)} fill={s.fg} style={{ textTransform: 'uppercase', letterSpacing: '.1em' }}>{l2}</text>}
      </g>
    </svg>
  )
}

function Banner({ l1, l2, s }) {
  return (
    <svg viewBox="0 0 520 340" role="img" aria-label={`A vinyl banner reading ${l1}`}>
      <rect width="520" height="340" fill="#7c4a3d" />
      {Array.from({ length: 17 }, (_, i) => <path key={i} d={`M0 ${i * 21}H520`} stroke="#693b30" strokeWidth="2" />)}
      <rect x="0" y="296" width="520" height="44" fill="#8f8a82" />
      <g>
        <rect x="26" y="60" width="468" height="190" fill={s.bg} stroke="#141313" strokeOpacity=".3" strokeWidth="3" />
        <rect x="38" y="72" width="444" height="166" fill="none" stroke={s.fg} strokeOpacity=".4" strokeWidth="2" strokeDasharray="8 6" />
        {[[34, 68], [260, 68], [486, 68], [34, 242], [260, 242], [486, 242]].map(([x, y]) => (
          <g key={`${x}-${y}`}><circle cx={x} cy={y} r="6.5" fill="#c9c9c9" stroke="#6a6a6a" strokeWidth="2" /><circle cx={x} cy={y} r="2.5" fill="#3a2a25" /></g>
        ))}
        <text x="260" y={l2 ? 154 : 168} textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize={fit(l1, 420, l2 ? 110 : 128)} fill={s.fg} style={{ textTransform: 'uppercase' }}>{l1}</text>
        {l2 && <text x="260" y="206" textAnchor="middle" fontFamily={FONT} fontWeight="600" fontSize={fit(l2, 400, 34)} fill={s.fg} style={{ textTransform: 'uppercase', letterSpacing: '.12em' }}>{l2}</text>}
      </g>
    </svg>
  )
}

function Window({ l1, l2, s }) {
  const ink = s.bg === '#161515' ? s.fg : s.bg
  const edge = ink === '#ffe600' ? '#8a7d00' : 'transparent'
  return (
    <svg viewBox="0 0 520 340" role="img" aria-label={`Window lettering reading ${l1}`}>
      <rect width="520" height="340" fill="#2d3a45" />
      <rect x="30" y="26" width="460" height="288" fill="#9cc7de" />
      <path d="M30 26H490V200Q260 170 30 250Z" fill="#fff" opacity=".18" />
      <path d="M70 314L210 26M150 314L290 26" stroke="#fff" strokeOpacity=".18" strokeWidth="26" />
      <rect x="30" y="26" width="460" height="288" fill="none" stroke="#1d252c" strokeWidth="12" />
      <path d="M260 26V314" stroke="#1d252c" strokeWidth="8" />
      <text x="260" y={l2 ? 148 : 172} textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize={fit(l1, 400, l2 ? 96 : 112)} fill={ink} stroke={edge} strokeWidth="1.5" style={{ textTransform: 'uppercase' }}>{l1}</text>
      {l2 && <text x="260" y="196" textAnchor="middle" fontFamily={FONT} fontWeight="600" fontSize={fit(l2, 380, 32)} fill={ink} stroke={edge} strokeWidth="1" style={{ textTransform: 'uppercase', letterSpacing: '.12em' }}>{l2}</text>}
    </svg>
  )
}

const SCENES = { storefront: Storefront, yard: Yard, banner: Banner, window: Window }

export default function SignLab() {
  const [type, setType] = useState('storefront')
  const [l1, setL1] = useState('Your Name Here')
  const [l2, setL2] = useState('Marshall, Minnesota')
  const [scheme, setScheme] = useState(SCHEMES[0].id)
  const Scene = SCENES[type]
  const s = SCHEMES.find((x) => x.id === scheme)
  const current = TYPES.find((t) => t.id === type)
  const shown1 = l1.trim() || 'Your Name Here'
  const shown2 = l2.trim()
  const project = encodeURIComponent(`a ${current.label.toLowerCase()} sign that reads “${shown1}${shown2 ? ` / ${shown2}` : ''}”`)

  return (
    <div className="lab sg">
      <div className="sg__stage">
        <Scene l1={shown1} l2={shown2} s={s} key={type} />
      </div>

      <div className="lab-panel sg__panel">
        <span className="lab-label">Sign Studio</span>
        <h3>Pick it. Type it. See it.</h3>

        <div className="chip-row" role="group" aria-label="Sign type">
          {TYPES.map((t) => <button type="button" key={t.id} className={type === t.id ? 'is-on' : ''} aria-pressed={type === t.id} onClick={() => setType(t.id)}>{t.label}</button>)}
        </div>
        <p className="sg__use" aria-live="polite">{current.use}</p>

        <label className="lab-field">Main message
          <input value={l1} maxLength={22} onChange={(e) => setL1(e.target.value)} />
        </label>
        <label className="lab-field">Second line <small>(optional)</small>
          <input value={l2} maxLength={34} onChange={(e) => setL2(e.target.value)} />
        </label>

        <div className="lab-field" role="group" aria-label="Color scheme">
          <span>Colors</span>
          <div className="swatches">
            {SCHEMES.map((c) => (
              <button type="button" key={c.id} className={scheme === c.id ? 'is-on' : ''} aria-pressed={scheme === c.id} aria-label={c.label} title={c.label} onClick={() => setScheme(c.id)} style={{ '--bg': c.bg, '--fg': c.fg }}>
                <b>Aa</b>
              </button>
            ))}
          </div>
        </div>

        <Link className="button button--yellow" to={`/quote?service=signs&project=${project}`}>Request this sign <ArrowRight /></Link>
        <small className="lab-fine">A preview only. Our design team confirms size, materials, and installation with you.</small>
      </div>
    </div>
  )
}
