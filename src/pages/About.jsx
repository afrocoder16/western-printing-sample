import { ArrowRight, ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { services, standards, steps } from '../data'
import { servicePages } from '../serviceData'
import { addressLine, img, mapsLink, site } from '../site'
import '../about.css'

export default function About() {
  return (
    <>
      <SEO title="About Western Printing" description="Western Printing is a Marshall, Minnesota team of veteran printers, designers, and sign makers delivering high quality, cost effective, on-time work." path="/about" />
      <PageHero eyebrow="About Western" title="Printing is more than paper and ink." intro="Every project is a chance to play a part in your success. That is how we treat it, from the smallest run to the biggest job." tone="magenta" />

      <section className="section about-story">
        <div className="shell about-story__grid">
          <div className="about-story__copy reveal">
            <span className="eyebrow">Our story</span>
            <h2>Local shop. National reach.</h2>
            <p className="about-lead">Western creates and produces high-quality, cost-effective, on-time marketing solutions, so our clients can meet and exceed their printing and business needs.</p>
            <p>We are a team of highly skilled, veteran professionals. We help you define your goals and recommend solutions that help you stand out from the competition.</p>
            <p>We are proud to work with clients big and small right here in Marshall and across southwest Minnesota, and we print for clients across the nation. No project is too big or too small.</p>
            <Link to="/quote" className="button">Start a project <ArrowRight /></Link>
          </div>
          <figure className="about-story__photo reveal reveal--delay">
            <img src={img('marshall/mainstreet.webp')} alt="Main Street in downtown Marshall, Minnesota on a clear summer day" loading="lazy" width="1800" height="938" />
            <figcaption>Main Street, Marshall, MN. Photo via <a href="https://commons.wikimedia.org/wiki/File:Marshall_MN_1.jpg" target="_blank" rel="noreferrer">Wikimedia Commons</a>, CC BY-SA 3.0.</figcaption>
            <span className="about-story__bar" aria-hidden="true"><i /><i /><i /><i /></span>
          </figure>
        </div>
      </section>

      <section className="standards" aria-label="Our three standards">
        <div className="standards__grid">
          {standards.map((s, i) => (
            <article className="standard" key={s.title}>
              <span>0{i + 1}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-stack">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="eyebrow">Under one roof</span><h2>Everything your brand needs.</h2></div>
            <p>Printing, signs, promotional products, design, and a full-service bindery all live in one Marshall building, which keeps jobs moving and costs clear.</p>
          </div>
          <ul className="about-stack__list">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <li key={s.slug} className={`t-${s.tone} reveal`}>
                  <Link to={servicePages[s.slug].path}>
                    <Icon aria-hidden="true" />
                    <span>{s.number}</span>
                    <h3>{s.title}</h3>
                    <p>{s.tagline}</p>
                    <b>Explore <ArrowUpRight aria-hidden="true" /></b>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="about-values dark">
        <div className="halftone" aria-hidden="true" />
        <div className="shell about-values__inner reveal">
          <span className="eyebrow eyebrow--light">What we stand on</span>
          <blockquote>Integrity and value in every job.</blockquote>
          <p>We build relationships on honest advice and fair pricing, and we want you to feel confident every time you hand us a project.</p>
        </div>
      </section>

      <section className="process section dark">
        <div className="halftone" aria-hidden="true" />
        <div className="shell">
          <div className="process-head reveal">
            <span className="eyebrow eyebrow--light">How we work</span>
            <h2>Four steps, every time.</h2>
          </div>
          <ol className="steps">
            {steps.map((step) => (
              <li className={`step t-${step.tone} reveal`} key={step.n}>
                <div className="step__top"><span className="step__n">STEP {step.n}</span><span className="step__ink" aria-hidden="true">{step.ink}</span></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section about-visit">
        <div className="shell about-visit__grid">
          <div className="reveal">
            <span className="eyebrow">Come see us</span>
            <h2>Stop by the shop.</h2>
            <ul className="about-visit__list">
              <li><MapPin aria-hidden="true" /><a href={mapsLink} target="_blank" rel="noreferrer">{addressLine}</a></li>
              <li><Phone aria-hidden="true" /><a href={site.phoneHref}>{site.phone}</a></li>
              <li><Clock3 aria-hidden="true" /><span>Monday – Friday, 8:00 am – 5:00 pm</span></li>
            </ul>
            <div className="about-visit__actions">
              <Link className="button" to="/contact">Contact us <ArrowRight /></Link>
              <Link className="text-link" to="/work">See our work</Link>
            </div>
          </div>
          <div className="about-visit__badge reveal reveal--delay" aria-hidden="true">
            <b>Print</b><b>Signs</b><b>Promotional</b><b>Design</b>
          </div>
        </div>
      </section>
    </>
  )
}
