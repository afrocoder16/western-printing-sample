import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { addressLine, mapsEmbed, mapsLink, site } from '../site'

// A starter list of what customers ask Western for. Each tag opens the quote form with that project.
const allServices = [
  'Banners', 'Binding', 'Booklets', 'Brochures', 'Business Cards', 'Calendars', 'Caps & Hats', 'Catalogs', 'Company Stores',
  'Custom Apparel', 'Door Hangers', 'Drinkware', 'Embroidery', 'Envelopes', 'Flyers', 'Folded Cards', 'Forms', 'Graphic Design',
  'Kitting', 'Labels', 'Letterhead', 'Logo Design', 'Mailing', 'Newsletters', 'Postcards', 'Posters', 'Promotional Products',
  'Screen Printing', 'Sign Installation', 'Storefront Signs', 'Vehicle Lettering', 'Window Graphics', 'Yard Signs',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <SEO title="Contact Western Printing" description="Call, email, or visit Western Printing at 305 West College Drive in Marshall, Minnesota." />
      <PageHero eyebrow="Contact" title="Come by. Call us. Bring the idea." intro="Any print job, large or small, we are here to help. Questions, unusual formats, tight timelines: we’re always glad to talk it through." tone="yellow" />
      <section className="contact-section section">
        <div className="shell contact-grid">
          <div className="contact-details reveal">
            <span className="eyebrow">Western Printing</span>
            <h2>Your local print shop.</h2>
            <div className="contact-list">
              <a href={mapsLink} target="_blank" rel="noreferrer"><MapPin /><span><strong>Visit us</strong>{site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}</span></a>
              <a href={site.phoneHref}><Phone /><span><strong>Call us</strong>{site.phone}</span></a>
              <a href={`mailto:${site.email}`}><Mail /><span><strong>Email us</strong>{site.email}</span></a>
              <div><Printer /><span><strong>Fax</strong>{site.fax}</span></div>
              <div><Clock3 /><span><strong>Store hours</strong>{site.hours.map((h) => <span key={h.days} style={{ display: 'block' }}>{h.days}: {h.time}</span>)}</span></div>
            </div>
          </div>
          {submitted ? (
            <div className="contact-form contact-sent reveal" role="status">
              <span className="eyebrow">Message sent</span>
              <h2>Thanks. We’ll be in touch.</h2>
              <p>Your message has been submitted. For anything urgent, call {site.phone}.</p>
              <button type="button" className="button" onClick={() => setSubmitted(false)}>Send another message</button>
            </div>
          ) : (
          <form className="contact-form reveal" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <span className="eyebrow">Send a note</span>
            <div className="form-row"><label>Name <span>*</span><input name="Name" autoComplete="name" required /></label><label>Email <span>*</span><input type="email" name="Email" autoComplete="email" required /></label></div>
            <label>Subject<input name="Subject" /></label>
            <label>How can we help? <span>*</span><textarea name="Message" rows="6" required /></label>
            <button className="button" type="submit">Send message <Mail /></button>
          </form>
          )}
        </div>
        <div className="shell contact-services reveal">
          <div className="contact-services__head">
            <span className="eyebrow">What we make</span>
            <h2>If it carries your name, ask us.</h2>
            <p>A few of the things customers ask for. Don’t see yours? We do a host of custom projects. Tap a tag to start a quote.</p>
          </div>
          <ul>
            {allServices.map((item) => <li key={item}><Link to={`/quote?project=${encodeURIComponent(item.toLowerCase())}`}>{item}</Link></li>)}
          </ul>
        </div>
        <div className="shell map-wrap reveal">
          <iframe title={`Map showing Western Printing at ${addressLine}`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-label"><span>Find us on College Drive</span><strong>{site.address.street}</strong><small>{site.address.city}, Minnesota {site.address.zip}</small></div>
        </div>
      </section>
    </>
  )
}
