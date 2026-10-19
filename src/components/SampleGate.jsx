import { useState } from 'react'

// Lead-capture gate shown before the sample site. Each submission is emailed to Midvora through Web3Forms.
// Set VITE_GATE_KEY at build time (free access key from web3forms.com). Without it the form lets visitors
// straight in and sends nothing, which keeps local development friction-free.
// This is a soft gate: it records who looked, it does not stop a determined visitor from reading the files.

const KEY = import.meta.env.VITE_GATE_KEY
const STORE = 'midvora-sample-visitor'

function readVisitor() {
  try { return JSON.parse(localStorage.getItem(STORE)) } catch { return null }
}

async function notifyMidvora({ name, email }) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 15000)
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: KEY,
        subject: `Sample opened: ${name} (Western Printing)`,
        from_name: 'Midvora sample gate',
        name,
        email,
        sample: 'Western Printing website',
        opened_at: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        browser: navigator.userAgent,
      }),
    })
    const result = await response.json()
    if (!result.success) throw new Error(result.message || `Web3Forms returned ${response.status}`)
  } finally {
    clearTimeout(timer)
  }
}

export default function SampleGate({ children }) {
  const [visitor, setVisitor] = useState(readVisitor)
  const [sent, setSent] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)

  if (visitor) return children

  async function submit(event) {
    event.preventDefault()
    if (new FormData(event.currentTarget).get('botcheck')) return
    const record = { name: name.trim(), email: email.trim() }
    setBusy(true)
    setFailed(false)
    try {
      if (KEY) await notifyMidvora(record)
      try { localStorage.setItem(STORE, JSON.stringify(record)) } catch { /* private mode: they just see the gate again next visit */ }
      setSent(record)
    } catch (error) {
      console.error('Sample gate could not send the request:', error)
      setFailed(true)
    }
    setBusy(false)
  }

  return (
    <div className="gate">
      <div className="gate__glow gate__glow--one" aria-hidden="true" />
      <div className="gate__glow gate__glow--two" aria-hidden="true" />
      <main className="gate__card" aria-live="polite">
        <img className="gate__logo" src={`${import.meta.env.BASE_URL}midvora-logo.png`} alt="Midvora. From the Midwest. For the World." width="237" height="146" />

        {sent ? (
          <div className="gate__done">
            <span className="gate__check" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
            </span>
            <h1>We got your request{sent.name ? `, ${sent.name.split(' ')[0]}` : ''}.</h1>
            <p className="gate__lede">Thank you for your interest. Your Western Printing sample is ready.</p>
            <button type="button" className="gate__button" onClick={() => setVisitor(sent)}>Open the sample</button>
          </div>
        ) : (
          <>
            <p className="gate__eyebrow">Private preview</p>
            <h1>Welcome to your sample.</h1>
            <p className="gate__lede">We built a sample website for Western Printing. Tell us who you are and we will open it for you.</p>
            <form onSubmit={submit}>
              <label>
                <span>Your name</span>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Jane Smith" required />
              </label>
              <label>
                <span>Your email</span>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="jane@company.com" required />
              </label>
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="gate__trap" />
              {failed && (
                <p className="gate__error" role="alert">
                  We could not send your request just now. Please try again in 5 minutes.
                </p>
              )}
              <button type="submit" className="gate__button" disabled={busy}>{busy ? 'Sending…' : failed ? 'Try again' : 'View the sample'}</button>
            </form>
            <p className="gate__fine">Your details go only to the Midvora team.</p>
          </>
        )}
      </main>
    </div>
  )
}
