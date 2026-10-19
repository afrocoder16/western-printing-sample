import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { categories, projects, toneOf } from '../workData'
import '../work.css'

export default function Work() {
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState(null)
  const closeRef = useRef(null)
  const lastFocus = useRef(null)
  const shown = cat === 'all' ? projects : projects.filter((p) => p.cat === cat)

  const close = useCallback(() => {
    setOpen(null)
    lastFocus.current?.focus?.()
  }, [])
  const step = useCallback((dir) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length)), [shown.length])

  useEffect(() => {
    if (open === null) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, close, step])

  const current = open === null ? null : shown[open]

  return (
    <>
      <SEO title="Our Work: Printing, Signs & Promotional Projects" description="A look at the printing, signs, promotional products, design, and finishing projects Western Printing produces in Marshall, Minnesota." path="/work" />
      <PageHero eyebrow="Our work" title="Work that gets noticed." intro="Printing, signs, promotional products, and design, produced in Marshall for neighbors and clients across the country." tone="cyan" />

      <section className="section work-section">
        <div className="shell">
          <div className="filter-row" role="group" aria-label="Filter projects">
            {categories.map((c) => (
              <button key={c.id} type="button" className={`${cat === c.id ? 'active' : ''} ${c.tone ? `t-${c.tone}` : ''}`} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.label}</button>
            ))}
          </div>
          <p className="work-note"><b>Sample imagery.</b> These stock photos stand in for Western’s own project photos in this preview.</p>

          <ul className="work-grid">
            {shown.map((p, i) => (
              <li key={p.id} className={`work-card t-${toneOf[p.cat]}`}>
                <button type="button" onClick={(e) => { lastFocus.current = e.currentTarget; setOpen(i) }} aria-label={`View ${p.title}`}>
                  <img src={p.src} alt="" loading="lazy" width={p.w} height={p.h} />
                  <span className="work-card__tag">{categories.find((c) => c.id === p.cat)?.label}</span>
                  <span className="work-card__title">{p.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stock-callout">
        <div className="halftone" aria-hidden="true" />
        <div className="shell stock-callout__inner reveal">
          <span className="eyebrow">Your project is next</span>
          <h2>Let’s make something.</h2>
          <p>Tell us what you have in mind and we’ll recommend the smartest way to produce it.</p>
          <Link to="/quote" className="button">Start a project <ArrowRight /></Link>
        </div>
      </section>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={(e) => { if (e.target === e.currentTarget) close() }}>
          <button type="button" className="lightbox__close" ref={closeRef} onClick={close} aria-label="Close"><X /></button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous project"><ChevronLeft /></button>
          <figure className={`lightbox__fig t-${toneOf[current.cat]}`}>
            <img src={current.src} alt={current.title} />
            <figcaption><b>{current.title}</b><span>{current.note}</span><Link to={`/quote?service=${current.cat === 'finishing' ? 'mailing' : current.cat}`} onClick={close}>Quote something like this <ArrowRight /></Link></figcaption>
          </figure>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next project"><ChevronRight /></button>
        </div>
      )}
    </>
  )
}
