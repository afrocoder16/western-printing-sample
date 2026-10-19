import { ArrowUpRight, LayoutDashboard, Repeat, ShoppingBag, Store, UploadCloud } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { site } from '../site'
import './shop.css'

const portals = [
  {
    href: site.portals.promo,
    icon: ShoppingBag,
    tone: 'yellow',
    kicker: 'Promotional products',
    title: 'Shop promotional',
    text: 'Browse custom-imprinted apparel, drinkware, and giveaways. Pick a product, send your logo, and Western handles the decorating.',
    cta: 'Open the promotional shop',
  },
  {
    href: site.portals.stores,
    icon: Store,
    tone: 'magenta',
    kicker: 'Company stores',
    title: 'Shop stores',
    text: 'Your organization’s own online store, built so employees, teams, and members can order approved items without the back-and-forth.',
    cta: 'Visit the company stores',
  },
  {
    href: site.portals.visual,
    icon: LayoutDashboard,
    tone: 'blue',
    kicker: 'Visual marketing',
    title: 'Visual marketing',
    text: 'Western’s visual marketing portal, for managing and ordering your branded marketing materials online.',
    cta: 'Open the portal',
  },
]

export default function Shop() {
  return (
    <>
      <SEO title="Shop, Company Stores & Online Portals" description="Western Printing’s online shops and portals: promotional products, company stores, visual marketing, and secure file upload." path="/shop" />
      <PageHero eyebrow="Shop & portals" title="Order online. Reorder in a click." intro="Western runs its own online shops and portals, so repeat orders and promotional products are only a few clicks away." tone="yellow" />

      <section className="section portal-section">
        <div className="shell">
          <div className="portal-grid">
            {portals.map(({ href, icon: Icon, tone, kicker, title, text, cta }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer" className={`portal-card t-${tone} reveal`}>
                <span className="portal-card__tab">{kicker}</span>
                <Icon className="portal-card__icon" aria-hidden="true" />
                <h2>{title}</h2>
                <p>{text}</p>
                <b>{cta} <ArrowUpRight aria-hidden="true" /></b>
              </a>
            ))}
          </div>
          <p className="portal-note reveal">These portals are Western’s own sites and open in a new tab. Prefer a person? Call <a href={site.phoneHref}>{site.phone}</a>.</p>
        </div>
      </section>

      <section className="section portal-how dark">
        <div className="halftone" aria-hidden="true" />
        <div className="shell portal-how__grid">
          <div className="portal-how__head reveal">
            <span className="eyebrow eyebrow--light">Why order online</span>
            <h2>Less email. More done.</h2>
          </div>
          <ul className="portal-how__list">
            <li className="reveal"><Repeat aria-hidden="true" /><div><h3>Reorder fast</h3><p>Repeat jobs and approved items are ready when you are.</p></div></li>
            <li className="reveal"><Store aria-hidden="true" /><div><h3>One brand, one store</h3><p>Everyone orders the same approved logos and products.</p></div></li>
            <li className="reveal"><UploadCloud aria-hidden="true" /><div><h3>Send files securely</h3><p>Upload artwork straight to the team that prints it. <Link to="/upload">Upload files</Link></p></div></li>
          </ul>
        </div>
      </section>
    </>
  )
}
