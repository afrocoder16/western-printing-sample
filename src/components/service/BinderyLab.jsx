import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

// Two bench demos for the bindery: a finishing picker and a kit builder.
const FINISHES = [
  { id: 'fold', label: 'Folding', line: 'Crisp, even folds, from simple letter folds to tri-fold brochures.', tip: 'Watch the panels fold in.' },
  { id: 'staple', label: 'Booklets', line: 'Pages gather, fold, and get stapled on the spine.', tip: 'Pages fold, the staples go in.' },
  { id: 'diecut', label: 'Die cutting', line: 'A custom shape cut clean, so the piece stands out before it is even read.', tip: 'Watch the shape lift out.' },
  { id: 'laminate', label: 'Laminating', line: 'A protective layer for menus, cards, and anything that gets handled.', tip: 'Left: bare. Right: coated.' },
]

function Scene({ id }) {
  switch (id) {
    case 'fold':
      return (
        <svg viewBox="0 0 320 220" role="img" aria-label="A sheet folding into thirds">
          <rect x="40" y="150" width="240" height="8" fill="rgba(0,0,0,.18)" />
          <g className="bl-fold">
            <rect className="bl-fold__a" x="40" y="40" width="80" height="110" fill="#00aeef" />
            <rect className="bl-fold__b" x="120" y="40" width="80" height="110" fill="#ffffff" stroke="#141313" strokeOpacity=".15" />
            <rect className="bl-fold__c" x="200" y="40" width="80" height="110" fill="#ec008c" />
            <path d="M120 40V150M200 40V150" stroke="#141313" strokeOpacity=".3" strokeDasharray="4 4" />
          </g>
        </svg>
      )
    case 'staple':
      return (
        <svg viewBox="0 0 320 220" role="img" aria-label="A booklet being stapled">
          <rect x="94" y="48" width="140" height="150" fill="#e6e1d3" />
          <rect x="100" y="40" width="140" height="150" fill="#f5f5f1" />
          <rect className="bl-page" x="170" y="34" width="76" height="150" fill="#ffffff" />
          <rect x="104" y="36" width="66" height="150" fill="#2e3192" />
          <rect x="116" y="70" width="42" height="8" fill="#ffe600" />
          <rect x="116" y="86" width="30" height="6" fill="#fff" opacity=".7" />
          <rect className="bl-staple" x="167" y="62" width="6" height="22" fill="#9aa5ae" />
          <rect className="bl-staple" x="167" y="134" width="6" height="22" fill="#9aa5ae" />
        </svg>
      )
    case 'diecut':
      return (
        <svg viewBox="0 0 320 220" role="img" aria-label="A die-cut star lifting out of a card">
          <rect x="50" y="26" width="220" height="168" fill="#f5f5f1" stroke="#141313" strokeOpacity=".15" />
          <path className="bl-trace" d="M160 54l16 38 40 4-31 27 10 40-35-22-35 22 10-40-31-27 40-4Z" fill="none" stroke="#ec008c" strokeWidth="3" strokeDasharray="6 6" />
          <path className="bl-lift" d="M160 54l16 38 40 4-31 27 10 40-35-22-35 22 10-40-31-27 40-4Z" fill="#ffe600" stroke="#141313" strokeOpacity=".3" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 320 220" role="img" aria-label="A card, bare on the left and laminated on the right">
          <rect x="50" y="26" width="220" height="168" fill="#f5f5f1" stroke="#141313" strokeOpacity=".15" />
          <rect x="70" y="46" width="180" height="22" fill="#2e3192" />
          <rect x="70" y="84" width="130" height="8" fill="#141313" opacity=".5" />
          <rect x="70" y="102" width="150" height="8" fill="#141313" opacity=".3" />
          <rect x="70" y="132" width="70" height="40" fill="#00aeef" />
          <rect x="150" y="132" width="70" height="40" fill="#ec008c" />
          <clipPath id="bl-coat"><rect x="160" y="26" width="110" height="168" /></clipPath>
          <g clipPath="url(#bl-coat)">
            <rect x="160" y="26" width="110" height="168" fill="#fff" opacity=".22" />
            <rect className="bl-shine" x="-40" y="10" width="38" height="200" fill="#fff" opacity=".75" transform="skewX(-18)" />
          </g>
          <line x1="160" y1="22" x2="160" y2="198" stroke="#00aeef" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      )
  }
}

const KIT_ITEMS = [
  { id: 'letter', label: 'Welcome letter', tone: 'cyan' },
  { id: 'brochure', label: 'Brochure', tone: 'magenta' },
  { id: 'tee', label: 'T-shirt', tone: 'yellow' },
  { id: 'mug', label: 'Mug', tone: 'ink' },
  { id: 'pen', label: 'Pen', tone: 'blue' },
  { id: 'sticker', label: 'Sticker sheet', tone: 'cyan' },
]

const SEND = [
  { id: 'pickup', label: 'Pick up in Marshall', line: 'Boxed and ready at the shop on College Drive.' },
  { id: 'ship', label: 'Ship it', line: 'Packed and shipped to one address, or dozens.' },
  { id: 'mail', label: 'Mail it', line: 'Prepared and sent through the mail from our bindery.' },
]

export default function BinderyLab() {
  const [finish, setFinish] = useState('fold')
  const [picked, setPicked] = useState(['letter', 'tee', 'mug'])
  const [send, setSend] = useState('ship')
  const current = FINISHES.find((f) => f.id === finish)
  const toggle = (id) => setPicked((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]))
  const sending = SEND.find((s) => s.id === send)
  const kitLabel = picked.length ? KIT_ITEMS.filter((k) => picked.includes(k.id)).map((k) => k.label.toLowerCase()).join(', ') : 'a custom kit'

  return (
    <div className="lab bl">
      <div className="bl-bench">
        <div className="bl-stage" key={finish}>
          <Scene id={finish} />
          <span className="bl-tip">{current.tip}</span>
        </div>
        <div className="lab-panel bl-copy">
          <span className="lab-label">Finishing bench</span>
          <h3>{current.label}</h3>
          <p aria-live="polite">{current.line}</p>
          <div className="bl-tabs" role="group" aria-label="Finishing options">
            {FINISHES.map((f, i) => (
              <button type="button" key={f.id} className={finish === f.id ? 'is-on' : ''} aria-pressed={finish === f.id} onClick={() => setFinish(f.id)}>
                <b>{String(i + 1).padStart(2, '0')}</b><span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bl-kit">
        <div className="bl-kit__box" aria-hidden="true">
          <div className="kitbox">
            <div className="kitbox__flap kitbox__flap--l" />
            <div className="kitbox__flap kitbox__flap--r" />
            <div className="kitbox__back" />
            <div className="kitbox__items">
              {KIT_ITEMS.filter((k) => picked.includes(k.id)).map((k, i) => <i key={k.id} className={`t-${k.tone}`} style={{ '--i': i }}><span>{k.label}</span></i>)}
            </div>
            <div className="kitbox__front"><b>WESTERN</b><small>{picked.length ? `${picked.length} item${picked.length === 1 ? '' : 's'} packed` : 'Empty box'}</small></div>
          </div>
        </div>
        <div className="lab-panel bl-kit__panel">
          <span className="lab-label">Kitting & mailing</span>
          <h3>Build a kit. We pack it.</h3>
          <p>Welcome kits, event packets, and onboarding boxes: tell us what goes in and where it goes.</p>
          <div className="chip-row" role="group" aria-label="Kit contents">
            {KIT_ITEMS.map((k) => (
              <button type="button" key={k.id} className={picked.includes(k.id) ? 'is-on' : ''} aria-pressed={picked.includes(k.id)} onClick={() => toggle(k.id)}>
                {picked.includes(k.id) && <Check size={14} />} {k.label}
              </button>
            ))}
          </div>
          <div className="lab-field" role="group" aria-label="How it gets to you">
            <span>Then…</span>
            <div className="chip-row">
              {SEND.map((s) => <button type="button" key={s.id} className={send === s.id ? 'is-on' : ''} aria-pressed={send === s.id} onClick={() => setSend(s.id)}>{s.label}</button>)}
            </div>
          </div>
          <p className="bl-kit__result" aria-live="polite"><b>{picked.length} item{picked.length === 1 ? '' : 's'}.</b> {sending.line}</p>
          <Link className="button button--yellow" to={`/quote?service=mailing&project=${encodeURIComponent(`a kitting project: ${kitLabel}, then ${sending.label.toLowerCase()}`)}`}>Plan this kit <ArrowRight /></Link>
        </div>
      </div>
    </div>
  )
}
