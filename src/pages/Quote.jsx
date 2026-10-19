import { useEffect, useRef, useState } from 'react'
import { CircleCheck, FileCheck2, LockKeyhole, UploadCloud } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { services } from '../data'
import { site } from '../site'

const projectLabels = {
  'business-cards': 'business cards',
  'direct-mail': 'a direct mail campaign',
  banners: 'a banner or large-format project',
  'yard-signs': 'yard signs',
  'spirit-wear': 'spirit wear and custom apparel',
  'fall-campaign': 'a fall campaign',
}

export default function Quote() {
  const [params] = useSearchParams()
  const [submitted, setSubmitted] = useState(null)
  const successRef = useRef(null)
  const selectedService = params.get('service') || ''
  const selectedProject = params.get('project') || ''
  const neededBy = params.get('needed') || ''
  const starterDescription = selectedProject
    ? `I’m interested in ${projectLabels[selectedProject] || selectedProject}. `
    : ''

  useEffect(() => {
    if (submitted) {
      successRef.current?.focus()
      successRef.current?.scrollIntoView({ block: 'center' })
    }
  }, [submitted])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setSubmitted({ name: data.get('First name'), email: data.get('Email') })
  }

  return (
    <>
      <SEO title="Get a Quote and Upload Files" description="Describe your printing, sign, or promotional project, request a quote, and upload PDF, AI, EPS, PNG, JPG, or TIFF artwork." />
      <PageHero eyebrow="Get a quote" title="Let’s put your project in motion." intro="Share the basics below. A real member of our Marshall team will review your project and follow up with the right questions." tone="magenta" />
      <section className="quote-section section" id="upload">
        <div className="shell quote-grid">
          <aside className="quote-aside reveal">
            <span className="eyebrow">What happens next</span>
            <h2>Helpful, human, and no pressure.</h2>
            <p className="quote-aside__tool">Want a ballpark first? <Link to="/estimator">Try the project estimator</Link>: price, paper, and artwork in one place.</p>
            <ol>
              <li><span>1</span><div><strong>We review the details</strong><p>A specialist looks at your specs and any files.</p></div></li>
              <li><span>2</span><div><strong>We fill in the gaps</strong><p>We may call to confirm materials, finish, or timing.</p></div></li>
              <li><span>3</span><div><strong>You get a clear quote</strong><p>Pricing and recommendations, explained, plus a proof before anything runs.</p></div></li>
            </ol>
            <div className="quote-contact"><small>Prefer to talk?</small><a href={site.phoneHref}>{site.phone}</a><span>Mon–Fri 8–5</span></div>
          </aside>

          {submitted ? (
            <div className="quote-success reveal" ref={successRef} tabIndex="-1" role="status">
              <CircleCheck aria-hidden="true" />
              <h2>Your quote request has been submitted.</h2>
              <p>Thank you, {submitted.name}. A member of the Western team will review your project and follow up at {submitted.email}.</p>
              <p>Need it sooner? Call us at <a href={site.phoneHref}>{site.phone}</a>.</p>
              <button className="button" type="button" onClick={() => setSubmitted(null)}>Submit another request</button>
            </div>
          ) : (
          <form className="project-form reveal" onSubmit={handleSubmit}>
            <fieldset>
              <legend>About you</legend>
              <div className="form-row">
                <label>First name <span>*</span><input name="First name" autoComplete="given-name" required /></label>
                <label>Last name <span>*</span><input name="Last name" autoComplete="family-name" required /></label>
              </div>
              <div className="form-row">
                <label>Email <span>*</span><input type="email" name="Email" autoComplete="email" required /></label>
                <label>Phone<input type="tel" name="Phone" autoComplete="tel" /></label>
              </div>
              <label>Company<input name="Company" autoComplete="organization" /></label>
            </fieldset>
            <fieldset>
              <legend>About the project</legend>
              <div className="form-row">
                <label>Service<select name="Service" defaultValue={selectedService}>
                  <option value="">Not sure yet</option>
                  {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
                </select></label>
                <label>Quantity<input type="number" name="Quantity" min="1" placeholder="e.g. 500" /></label>
              </div>
              <div className="form-row">
                <label>Finished size<input name="Finished size" placeholder="e.g. 8.5 × 11 in, 3 × 6 ft" /></label>
                <label>Needed by<input type="date" name="Needed by" defaultValue={neededBy} /></label>
              </div>
              <div className="form-row">
                <label>Color / decoration<select name="Color / decoration" defaultValue="">
                  <option value="">Not sure yet</option>
                  <option>Full color (CMYK)</option>
                  <option>Black &amp; white</option>
                  <option>One or two spot colors</option>
                  <option>Screen print</option>
                  <option>Embroidery</option>
                </select></label>
                <label>Material / stock<input name="Material" placeholder="e.g. 100 lb gloss, 13 oz vinyl, cotton tee" /></label>
              </div>
              <label>Finishing / installation<input name="Finishing" placeholder="e.g. folding, grommets, kitting, mailing, install on site" /></label>
              <label>Tell us about the project <span>*</span><textarea name="Project description" rows="5" defaultValue={starterDescription} placeholder="What it is, where it will be used, who it is for, anything else you know…" required /></label>
              <label className="file-drop">
                <UploadCloud />
                <strong>Upload a print-ready file <span>(optional)</span></strong>
                <small>PDF, AI, EPS, PNG, JPG, or TIFF · Maximum 10 MB</small>
                <input type="file" name="attachment" accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.tif,.tiff,application/pdf,image/png,image/jpeg,image/tiff,application/postscript" />
              </label>
              <label className="checkbox-label"><input type="checkbox" name="Design help requested" value="Yes" defaultChecked={params.get('design') === '1'} /> <span>I would like help with design or file preparation.</span></label>
            </fieldset>
            <button className="button button--submit" type="submit">Send my project <FileCheck2 /></button>
            <p className="privacy-note"><LockKeyhole size={14} /> Your information and files are used only to prepare your quote.</p>
          </form>
          )}
        </div>
      </section>
    </>
  )
}
