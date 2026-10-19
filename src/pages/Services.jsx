import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { services } from '../data'
import { servicePages } from '../serviceData'

export default function Services() {
  return (
    <>
      <SEO title="Printing, Signs, Promotional & Design Services" description="Explore Western's five services: printing, signs, promotional solutions, design with a proof process, and mailing and finishing." />
      <PageHero eyebrow="Services" title="Five services. One accountable team." intro="The best job is the one that feels easy. Western manages the decisions, details, and deadlines from the first idea to the final delivery." />
      <section className="section service-detail-section">
        <div className="shell service-detail-list">
          {services.map((service, index) => (
            <article id={service.slug} className={`service-detail t-${service.tone} ${index % 2 ? 'service-detail--reverse' : ''}`} key={service.slug}>
              <div className="service-detail__visual reveal">
                <img src={servicePages[service.slug].photos[0].file} alt={servicePages[service.slug].photos[0].caption} loading={index ? 'lazy' : 'eager'} width="1400" height="933" />
                <span className="service-detail__number">{service.number}</span>
              </div>
              <div className="service-detail__copy reveal">
                <span className="eyebrow">{service.title}</span>
                <h2>{service.tagline}</h2>
                <p>{service.detail}</p>
                <ul>
                  {service.applications.map((item) => <li key={item}><Check /> {item}</li>)}
                </ul>
                <div className="service-detail__actions">
                  <Link to={servicePages[service.slug].path} className="button">
                    Explore {service.title.toLowerCase()} <ArrowRight />
                  </Link>
                  <Link to={`/quote?service=${service.slug}`} className="text-link">Quote it</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="stock-callout">
        <div className="halftone" aria-hidden="true" />
        <div className="shell stock-callout__inner reveal">
          <span className="eyebrow">Not sure where to start?</span>
          <h2>That’s our job.</h2>
          <p>Tell us what the piece needs to do, how many you need, and when. We’ll recommend the smartest way to produce it.</p>
          <Link to="/quote" className="button">Talk through a project <ArrowRight /></Link>
        </div>
      </section>
    </>
  )
}
