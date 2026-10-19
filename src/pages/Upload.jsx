import { useRef, useState } from 'react'
import { ArrowUpRight, CircleCheck, FileCheck2, UploadCloud } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { site } from '../site'
import './shop.css'

const MAX = 10 * 1024 * 1024
const size = (bytes) => (bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`)

export default function Upload() {
  const [files, setFiles] = useState([])
  const [over, setOver] = useState(false)
  const [done, setDone] = useState(null)
  const [error, setError] = useState('')
  const doneRef = useRef(null)

  const add = (list) => {
    const picked = Array.from(list)
    const tooBig = picked.filter((f) => f.size > MAX)
    setError(tooBig.length ? `${tooBig.map((f) => f.name).join(', ')} is over 10 MB. Use the secure upload portal for large files.` : '')
    setFiles((current) => [...current, ...picked.filter((f) => f.size <= MAX)])
  }

  const submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setDone({ name: data.get('name'), count: files.length })
    window.setTimeout(() => doneRef.current?.focus(), 0)
  }

  return (
    <>
      <SEO title="Upload Your Files" description="Send artwork to Western Printing: drop in PDF, AI, EPS, PNG, JPG, or TIFF files, or use the secure upload portal for large files." path="/upload" />
      <PageHero eyebrow="Upload files" title="Send us your files." intro="Drop in your artwork and a few notes. Our proof team checks every file before anything prints." tone="cyan" />

      <section className="section">
        <div className="shell upload-grid">
          <div className="upload-card reveal">
            {done ? (
              <div ref={doneRef} tabIndex="-1" role="status" className="quote-success" style={{ border: 0, padding: 0, textAlign: 'left' }}>
                <CircleCheck aria-hidden="true" />
                <h2>Files received.</h2>
                <p>Thank you, {done.name}. {done.count ? `${done.count} file${done.count > 1 ? 's are' : ' is'} on the way to our proof team.` : 'We have your note.'} We will follow up to confirm the details.</p>
                <button type="button" className="button" onClick={() => { setDone(null); setFiles([]) }}>Send more files</button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Quick upload</span>
                <h2>Drop your artwork here.</h2>
                <p>Files up to 10 MB. Need to send something bigger? Use the secure portal on the right.</p>
                <form className="upload-form" onSubmit={submit}>
                  <label className={`drop ${over ? 'is-over' : ''}`} onDragOver={(e) => { e.preventDefault(); setOver(true) }} onDragLeave={() => setOver(false)} onDrop={(e) => { e.preventDefault(); setOver(false); add(e.dataTransfer.files) }}>
                    <UploadCloud aria-hidden="true" />
                    <strong>Drag files here, or click to choose</strong>
                    <small>PDF, AI, EPS, PNG, JPG, or TIFF · up to 10 MB each</small>
                    <input type="file" multiple accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => { add(e.target.files); e.target.value = '' }} aria-label="Choose files to upload" />
                  </label>
                  {error && <p role="alert" style={{ color: 'var(--m-ink)', fontWeight: 700, margin: '0 0 12px' }}>{error}</p>}
                  {files.length > 0 && (
                    <ul className="file-list" aria-label="Files ready to send">
                      {files.map((f, i) => (
                        <li key={`${f.name}-${i}`}>{f.name}<span>{size(f.size)} <button type="button" onClick={() => setFiles(files.filter((_, n) => n !== i))} aria-label={`Remove ${f.name}`}>Remove</button></span></li>
                      ))}
                    </ul>
                  )}
                  <div className="form-row">
                    <label>Your name <span>*</span><input name="name" autoComplete="name" required /></label>
                    <label>Email <span>*</span><input type="email" name="email" autoComplete="email" required /></label>
                  </div>
                  <label>Project or job name<input name="project" placeholder="e.g. Fall brochure, storefront sign" /></label>
                  <label>Notes for our team<textarea name="notes" rows="4" placeholder="Quantity, size, due date, anything we should know…" /></label>
                  <button className="button button--submit" type="submit">Send to Western <FileCheck2 /></button>
                </form>
              </>
            )}
          </div>

          <aside className="upload-side">
            <div className="upload-portal reveal">
              <span className="eyebrow eyebrow--light">Big files</span>
              <h3>Secure upload portal</h3>
              <p>For large or many files, use Western’s own upload portal. It opens in a new tab.</p>
              <a className="button button--yellow" href={site.portals.upload} target="_blank" rel="noreferrer">Open the portal <ArrowUpRight /></a>
            </div>
            <div className="upload-tips reveal">
              <h3>Before you send</h3>
              <ul>
                <li><FileCheck2 aria-hidden="true" /> Press-ready PDF is best. We also accept AI, EPS, PNG, JPG, and TIFF.</li>
                <li><FileCheck2 aria-hidden="true" /> Add 1/8 in bleed and keep key text inside the safe zone.</li>
                <li><FileCheck2 aria-hidden="true" /> Not sure it is ready? Our design team can fix it.</li>
              </ul>
              <Link className="text-link" to="/artwork-help">Artwork help center</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
