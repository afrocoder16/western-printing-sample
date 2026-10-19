import { useState } from 'react'
import { BadgeCheck, Check, RotateCcw } from 'lucide-react'

// A mock proof with three issues the proof team might catch. Fix them, then approve the proof.
const ISSUES = [
  {
    id: 'typo',
    title: 'Spelling',
    found: 'Headline reads “Grand Openning.”',
    fixed: 'Corrected to “Grand Opening.”',
    note: 'A typo on 500 flyers is a costly surprise. The proof team reads every word, twice.',
  },
  {
    id: 'safe',
    title: 'Safe zone',
    found: 'The logo sits too close to the trim edge and could be cut off.',
    fixed: 'Logo moved inside the safe zone.',
    note: 'Paper is trimmed after printing, and no cut is perfect. Key content stays clear of the edge.',
  },
  {
    id: 'phone',
    title: 'Contact info',
    found: 'The phone number is missing its last digit.',
    fixed: 'Phone number completed and confirmed.',
    note: 'The one detail a customer needs to act on. We check it against your information.',
  },
]

const STAGES = ['Idea', 'Draft', 'Proof', 'Approved']

export default function ProofLab() {
  const [fixed, setFixed] = useState({})
  const [active, setActive] = useState('typo')
  const [approved, setApproved] = useState(false)
  const done = ISSUES.filter((i) => fixed[i.id]).length
  const all = done === ISSUES.length
  const stage = approved ? 3 : 2
  const issue = ISSUES.find((i) => i.id === active)

  const fix = (id) => { setFixed((f) => ({ ...f, [id]: true })); setApproved(false) }
  const reset = () => { setFixed({}); setApproved(false); setActive('typo') }

  return (
    <div className="lab pf">
      <div className="pf__sheet-wrap">
        <ol className="pf__stages" aria-label="Proof progress">
          {STAGES.map((s, i) => <li key={s} className={i <= stage ? 'is-done' : ''}><span>{i + 1}</span>{s}</li>)}
        </ol>

        <div className={`pf__sheet ${approved ? 'is-approved' : ''}`}>
          <div className="pf__logo" data-fixed={fixed.safe ? 'true' : 'false'}>
            <i /><i /><i /><i />
          </div>
          <small>Proof · Round 1</small>
          <strong className="pf__title">{fixed.typo ? 'Grand Opening' : 'Grand Openning'}</strong>
          <p>Saturday, 10 am. Free coffee, door prizes, and 20% off every order.</p>
          <div className="pf__cta">Call {fixed.phone ? '(507) 555-0142' : '(507) 555-014'}</div>

          {ISSUES.map((i, n) => (
            <button type="button" key={i.id} className={`pf__pin pf__pin--${i.id} ${active === i.id ? 'is-active' : ''} ${fixed[i.id] ? 'is-fixed' : ''}`} onClick={() => setActive(i.id)} aria-label={`${i.title}: ${fixed[i.id] ? 'fixed' : 'needs attention'}`}>
              {fixed[i.id] ? <Check size={14} /> : n + 1}
            </button>
          ))}

          {approved && <div className="pf__stamp" aria-hidden="true"><BadgeCheck /> Approved</div>}
        </div>
      </div>

      <div className="lab-panel pf__panel">
        <span className="lab-label">The proof team</span>
        <h3>Spot it. Fix it. Approve it.</h3>
        <p>Every job gets a proof before it prints. Tap each numbered pin to see what our proof team flagged on this sample, then fix it.</p>

        <div className="pf__issue" aria-live="polite">
          <b>{`${ISSUES.indexOf(issue) + 1}. ${issue.title}`}</b>
          <p className="pf__found">{fixed[issue.id] ? issue.fixed : issue.found}</p>
          <p>{issue.note}</p>
          {fixed[issue.id]
            ? <span className="pf__ok"><Check size={15} /> Fixed</span>
            : <button type="button" className="button button--small" onClick={() => fix(issue.id)}>Fix this</button>}
        </div>

        <div className="pf__progress">
          <span>{done} of {ISSUES.length} fixed</span>
          <i style={{ '--p': `${(done / ISSUES.length) * 100}%` }} />
        </div>

        <div className="pf__actions">
          <button type="button" className="button button--yellow" disabled={!all || approved} onClick={() => setApproved(true)}>{approved ? 'Approved' : 'Approve proof'} <BadgeCheck /></button>
          <button type="button" className="lab-reset" onClick={reset}><RotateCcw size={14} /> Start over</button>
        </div>
        <p className="pf__done" role="status">{approved ? 'Approved. Nothing prints until you say so, and now it can run.' : all ? 'Everything is fixed. Ready for your approval.' : 'Fix all three to unlock approval.'}</p>
      </div>
    </div>
  )
}
