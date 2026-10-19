import { Link } from 'react-router-dom'
import { ArrowUpRight, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'
import { servicePages, serviceOrder } from '../serviceData'
import { tools } from '../toolsData'
import NewsletterSignup from './NewsletterSignup'
import { site, mapsLink } from '../site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta shell">
        <div>
          <span className="eyebrow eyebrow--light">Let’s get to work</span>
          <h2>Have something worth printing?</h2>
        </div>
        <Link to="/quote" className="button button--yellow">
          Start a project <ArrowUpRight />
        </Link>
      </div>
      <div className="footer-grid shell">
        <div className="footer-brand">
          <Logo footer />
          <p>Printing, signs, promotional products, and design in Marshall, Minnesota. {site.tagline}</p>
          <NewsletterSignup variant="footer" id="footer-news" />
          <div className="footer-social">
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Western Printing on Facebook"><Facebook /></a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Western Printing on Instagram"><Instagram /></a>
          </div>
        </div>
        <div>
          <h3>Visit</h3>
          <a href={mapsLink} target="_blank" rel="noreferrer">
            {site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}
          </a>
          <div className="footer-hours">
            {site.hours.map((h) => <span key={h.days}>{h.days}: {h.time}</span>)}
          </div>
        </div>
        <div>
          <h3>Talk to us</h3>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Fax {site.fax}</p>
        </div>
        <div>
          <h3>Services</h3>
          <Link to="/services">All services</Link>
          {serviceOrder.map((slug) => <Link key={slug} to={servicePages[slug].path}>{servicePages[slug].title}</Link>)}
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/about">About us</Link>
          <Link to="/work">Our work</Link>
          <Link to="/shop">Shop &amp; portals</Link>
          <Link to="/upload">Upload files</Link>
          {tools.map((tool) => <Link key={tool.id} to={tool.path}>{tool.title}</Link>)}
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} {site.legalName}. Marshall, Minnesota.</span>
        <span>Sample website. Photos from <a href="https://www.pexels.com" target="_blank" rel="noreferrer">Pexels</a> and <a href="https://commons.wikimedia.org" target="_blank" rel="noreferrer">Wikimedia Commons</a>. <a href={`${import.meta.env.BASE_URL}img/CREDITS.md`}>Photo credits</a>.</span>
      </div>
      <div className="cmyk-bar cmyk-bar--lg" aria-hidden="true"><i /><i /><i /><i /></div>
    </footer>
  )
}
