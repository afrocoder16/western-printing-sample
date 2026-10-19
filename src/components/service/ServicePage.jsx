import { useMemo } from 'react'
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import SEO from '../SEO'
import Testimonials from '../Testimonials'
import { toolById } from '../../toolsData'
import { getService, serviceOrder, servicePages } from '../../serviceData'
import { addressLine, site } from '../../site'
import { Photo } from './media'
import PlatesLab from './PlatesLab'
import SignLab from './SignLab'
import MerchLab from './MerchLab'
import ProofLab from './ProofLab'
import BinderyLab from './BinderyLab'
import '../../servicePages.css'
import '../../labs.css'

const labs = {
  printing: () => <PlatesLab />,
  signs: () => <SignLab />,
  promotional: () => <MerchLab />,
  design: () => <ProofLab />,
  mailing: () => <BinderyLab />,
}

const labIntro = {
  printing: { eyebrow: 'See it for yourself', title: 'Four inks. Every color you’ve ever seen.' },
  signs: { eyebrow: 'Try the Sign Studio', title: 'Design a sign in your browser.' },
  promotional: { eyebrow: 'Try the Merch Studio', title: 'Put your name on it.' },
  design: { eyebrow: 'The proof room', title: 'Nothing prints until you approve it.' },
  mailing: { eyebrow: 'The bindery bench', title: 'Finish it. Kit it. Send it.' },
}

export default function ServicePage({ slug }) {
  const service = getService(slug)
  const [heroPhoto, ...otherPhotos] = service.photos
  const quoteTo = `/quote?service=${service.slug}`
  const featuredTools = service.tools.map((id) => toolById[id])

  const schema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.title,
        description: service.seoDescription,
        url: `${site.url}${service.path}`,
        areaServed: 'United States',
        provider: { '@type': 'LocalBusiness', '@id': `${site.url}/#business`, name: site.name, address: addressLine },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Services', item: `${site.url}/services` },
          { '@type': 'ListItem', position: 2, name: service.title, item: `${site.url}${service.path}` },
        ],
      },
    ],
  }), [service])

  return (
    <div className={`sp t-${service.tone}`}>
      <SEO title={service.seoTitle} description={service.seoDescription} path={service.path} schema={schema} />

      <section className="sp-hero">
        <div className="halftone" aria-hidden="true" />
        <div className="shell sp-hero__grid">
          <div className="sp-hero__copy reveal">
            <nav className="sp-crumbs" aria-label="Breadcrumb">
              <Link to="/services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span>
            </nav>
            <span className="eyebrow">{service.eyebrow}</span>
            <h1>{service.headline}</h1>
            <p className="sp-hero__sub">{service.subhead}</p>
            <p className="sp-hero__lede">{service.lede}</p>
            <div className="sp-hero__actions">
              <Link className="button" to={quoteTo}>Get a quote <ArrowUpRight /></Link>
              <a className="sp-hero__call" href={site.phoneHref}><Phone size={16} /> {site.phone}</a>
            </div>
          </div>
          <Photo slot={heroPhoto} className="sp-hero__photo reveal reveal--delay" eager />
        </div>
        <div className="cmyk-bar cmyk-bar--abs" aria-hidden="true"><i /><i /><i /><i /></div>
      </section>

      <nav className="sp-switcher" aria-label="Western services">
        <div className="shell sp-switcher__inner">
          {serviceOrder.map((id) => {
            const item = servicePages[id]
            return <NavLink key={id} to={item.path} className={({ isActive }) => `t-${item.tone} ${isActive ? 'active' : ''}`}>{item.title.replace('Promotional Solutions', 'Promotional')}</NavLink>
          })}
        </div>
      </nav>

      <section className="sp-facts dark" aria-label={`${service.title} at a glance`}>
        <div className="shell sp-facts__grid">
          {service.facts.map((fact) => (
            <div key={fact.label}>
              <strong>{fact.text}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sp-words section">
        <div className="shell sp-words__grid">
          <div className="sp-words__label reveal">
            <span className="eyebrow">The short version</span>
            <h2>{service.subhead}</h2>
          </div>
          <div className="sp-words__copy reveal">
            {service.words.map((paragraph, i) => <p key={paragraph} className={i === 0 ? 'is-lead' : ''}>{paragraph}</p>)}
            <Link className="text-link" to={quoteTo}>Talk to us about your project <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="sp-lab section dark">
        <div className="shell">
          <div className="sp-lab__head reveal">
            <span className="eyebrow eyebrow--light">{labIntro[slug].eyebrow}</span>
            <h2>{labIntro[slug].title}</h2>
          </div>
          <div className="sp-lab__body reveal">{labs[slug]()}</div>
        </div>
      </section>

      <section className="sp-media section">
        <div className="shell sp-media__grid">
          {otherPhotos.map((photo, i) => <Photo key={photo.key} slot={photo} className={`sp-media__photo sp-media__photo--${i + 1}`} />)}
        </div>
      </section>

      <section className="sp-prints section">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="eyebrow">What we make</span><h2>Bring us the project.</h2></div>
            <p>A few of the things customers ask for. Don’t see yours? Ask. We do a host of custom projects.</p>
          </div>
          <ul className="sp-chips">
            {service.prints.map((item) => <li key={item}><Link to={`${quoteTo}&project=${encodeURIComponent(item.toLowerCase())}`}>{item}</Link></li>)}
          </ul>
        </div>
      </section>

      <section className="sp-tools section">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="eyebrow">Plan it</span><h2>Get ready before you call.</h2></div>
            <p>Free tools that answer the questions we hear most about {service.title.toLowerCase()}.</p>
          </div>
          <ul className="sp-tools__grid">
            {featuredTools.map((tool) => {
              const Icon = tool.icon
              return (
                <li key={tool.id}>
                  <Link to={tool.path} className={`sp-tools__card t-${tool.tone}`}>
                    <Icon aria-hidden="true" />
                    <h3>{tool.title}</h3>
                    <p>{tool.pitch}</p>
                    <b>{tool.cta} <ArrowRight /></b>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <Testimonials compact />

      <section className="sp-related section">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="eyebrow">Better together</span><h2>Add the next step.</h2></div>
            <p>One team keeps your project moving, so you don’t have to hand it off.</p>
          </div>
          <div className="sp-related__grid">
            {service.related.map(({ slug: relatedSlug, pitch }) => {
              const related = servicePages[relatedSlug]
              return (
                <Link key={relatedSlug} to={related.path} className={`sp-related__card t-${related.tone}`}>
                  <span>{related.eyebrow}</span>
                  <h3>{related.title}</h3>
                  <p>{pitch}</p>
                  <b>See {related.title.toLowerCase()} <ArrowRight /></b>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sp-cta dark">
        <div className="shell sp-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">Working together</span>
            <h2>We can get your project done.</h2>
          </div>
          <div className="sp-cta__actions">
            <Link className="button button--yellow" to={quoteTo}>Request a quote <ArrowUpRight /></Link>
            <Link className="button button--ghost" to="/upload">Upload files</Link>
            <a className="sp-cta__phone" href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
