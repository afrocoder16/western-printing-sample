import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import './newsletter.css'

// Monthly note signup. Sample only: nothing is sent anywhere.
export default function NewsletterSignup({ variant = 'band', id = 'press-note' }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    if (email.trim()) setDone(true)
  }

  return (
    <form className={`nl nl--${variant}`} onSubmit={submit} aria-label={variant === 'footer' ? 'Footer: get Western’s monthly note' : 'Get Western’s monthly note by email'}>
      {done ? (
        <p className="nl__done" role="status"><Check /> <span><b>You’re on the list.</b> Watch your inbox for the next monthly note.</span></p>
      ) : (
        <>
          <label htmlFor={`${id}-email`}>
            <b>Get Western’s monthly note</b>
            <small>Seasonal ideas and production reminders. No spam, one email a month.</small>
          </label>
          <div className="nl__row">
            <input id={`${id}-email`} type="email" required autoComplete="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            <button type="submit" className="button button--small">Sign up <ArrowRight size={15} /></button>
          </div>
        </>
      )}
    </form>
  )
}
