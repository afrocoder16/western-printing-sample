import { ArrowRight, ArrowUpRight, Check, LayoutDashboard, ShoppingBag, Store, UploadCloud } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { WesternMark } from '../components/Logo'
import MonthlyPromo from '../components/MonthlyPromo'
import Testimonials from '../components/Testimonials'
import { services, standards, steps } from '../data'
import { servicePages } from '../serviceData'
import { addressLine, img, site } from '../site'

const quickLinks = [
  { to: '/upload', icon: UploadCloud, tone: 'cyan', title: 'Upload files', text: 'Send artwork straight to our team, any time.', cta: 'Send files' },
  { href: site.portals.promo, icon: ShoppingBag, tone: 'yellow', title: 'Shop promotional', text: 'Browse custom-imprinted apparel and giveaways online.', cta: 'Open the shop' },
  { href: site.portals.stores, icon: Store, tone: 'magenta', title: 'Company stores', text: 'Order from your organization’s online store.', cta: 'Visit the stores' },
  { href: site.portals.visual, icon: LayoutDashboard, tone: 'blue', title: 'Visual marketing', text: 'Western’s visual marketing portal.', cta: 'Open the portal' },
]

const workTiles = [
  { src: img('promo/screenprint.webp'), label: 'Promotional', tone: 'yellow', alt: 'A screen printer pressing a custom T-shirt in a workshop' },
  { src: img('signs/storefront.webp'), label: 'Signs', tone: 'magenta', alt: 'Dimensional storefront lettering on a coffee shop' },
  { src: img('printing/brochures.webp'), label: 'Printing', tone: 'cyan', alt: 'A rack of printed brochures and travel guides' },
  { src: img('promo/caps.webp'), label: 'Promotional', tone: 'yellow', alt: 'Embroidered caps in assorted colors' },
  { src: img('design/swatches.webp'), label: 'Design', tone: 'ink', alt: 'Hands arranging color swatch fans' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Printing, Signs & Promotional Products in Marshall, MN"
        description="High quality, cost effective, on-time printing, signs, promotional products, design, and mailing for businesses across Marshall, southwest Minnesota, and the nation."
      />

      <section className="hero dark">
        <div className="hero__bg" style={{ backgroundImage: `url(${img('hero/press-banner.jpg')})` }} aria-hidden="true" />
        <div className="halftone" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__copy reveal">
            <p className="hero__kicker"><WesternMark /> Marshall, Minnesota</p>
            <h1>
              <span className="hl t-cyan">High quality.</span>
              <span className="hl t-magenta">Cost effective.</span>
              <span className="hl hl--y t-yellow">On time.</span>
            </h1>
            <p className="hero__lede">Printing, signs, promotional products, and design under one roof. Western creates and produces marketing solutions so you can meet and exceed your business needs.</p>
            <div className="hero__actions">
              <Link className="button button--yellow" to="/quote">Get a quote <ArrowUpRight /></Link>
              <Link className="text-link" to="/upload">Upload your files <ArrowRight /></Link>
            </div>
            <div className="hero__starters" aria-label="Popular project shortcuts">
              <span>Popular starts</span>
              <Link to="/quote?project=business-cards">Business cards</Link>
              <Link to="/quote?project=banners">Banners</Link>
              <Link to="/quote?project=yard-signs">Yard signs</Link>
              <Link to="/quote?project=spirit-wear">Spirit wear</Link>
              <Link to="/quote?project=direct-mail">Direct mail</Link>
            </div>
          </div>
          <div className="hero__visual reveal reveal--delay">
            <figure className="plate plate--signs">
              <img src={img('signs/sign-painting.webp')} alt="A shop window with classic gold sign-painting lettering" width="1000" height="1500" />
              <figcaption>Signs</figcaption>
            </figure>
            <figure className="plate plate--print">
              <img src={img('printing/sheets.webp')} alt="Hands checking a fresh stack of printed sheets" width="1400" height="933" />
              <figcaption>Print</figcaption>
            </figure>
            <figure className="plate plate--promo">
              <img src={img('promo/caps.webp')} alt="Embroidered caps in assorted colors" width="1400" height="934" />
              <figcaption>Promotional</figcaption>
            </figure>
          </div>
        </div>
        <div className="cmyk-bar" aria-hidden="true"><i /><i /><i /><i /></div>
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

      <section className="section services-preview" id="services">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="eyebrow">What we do</span><h2>Five services. One team.</h2></div>
            <p>From the first idea to the finished delivery, Western keeps the whole job in one building and on one schedule.</p>
          </div>
          <div className="svc-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article className={`svc-card t-${service.tone} reveal`} key={service.slug}>
                  <Link className="svc-card__media" to={servicePages[service.slug].path} tabIndex={-1} aria-hidden="true">
                    <img src={service.image} alt="" loading="lazy" width="1400" height="933" />
                    <span className="svc-card__num">{service.number}</span>
                  </Link>
                  <div className="svc-card__body">
                    <div className="svc-card__top"><h3>{service.title}</h3><Icon aria-hidden="true" /></div>
                    <p>{service.description}</p>
                    <ul className="svc-card__tags">
                      {service.applications.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                    <Link className="svc-card__link" to={servicePages[service.slug].path}>Explore {service.title.toLowerCase()} <ArrowRight /></Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="process section dark" id="process">
        <div className="halftone" aria-hidden="true" />
        <div className="shell">
          <div className="process-head reveal">
            <span className="eyebrow eyebrow--light">How it works</span>
            <h2>Four steps. Four colors. One finished job.</h2>
            <p>Every project, big or small, moves through the same four steps: from the first conversation to the final delivery.</p>
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

      <MonthlyPromo />

      <section className="section quick">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="eyebrow">Online, any time</span><h2>Upload. Shop. Reorder.</h2></div>
            <p>Western’s own portals keep your files, stores, and promotional orders a click away.</p>
          </div>
          <div className="quick__grid">
            {quickLinks.map(({ to, href, icon: Icon, tone, title, text, cta }) => {
              const inner = (
                <>
                  <Icon className="quick-card__icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <b>{cta} <ArrowUpRight aria-hidden="true" /></b>
                </>
              )
              return to ? (
                <Link key={title} to={to} className={`quick-card t-${tone} reveal`}>{inner}</Link>
              ) : (
                <a key={title} href={href} target="_blank" rel="noreferrer" className={`quick-card t-${tone} reveal`}>{inner}</a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section work-preview">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="eyebrow">Made in Marshall</span><h2>Work that gets noticed.</h2></div>
            <Link to="/work" className="text-link">See all our work <ArrowRight /></Link>
          </div>
          <div className="work-teaser">
            {workTiles.map((tile) => (
              <Link key={tile.src} to="/work" className={`work-tile t-${tile.tone} reveal`}>
                <img src={tile.src} alt={tile.alt} loading="lazy" />
                <span>{tile.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="local dark" id="about">
        <div className="local__photo">
          <img src={img('marshall/downtown.webp')} alt="Autumn on Main Street in downtown Marshall, Minnesota" loading="lazy" width="1800" height="1202" />
          <span className="local__tag">Marshall, MN</span>
        </div>
        <div className="local__copy">
          <span className="eyebrow eyebrow--light">About Western</span>
          <h2>Local roots. Veteran hands. Nationwide reach.</h2>
          <p>Printing is more than paper and ink. Each project is a chance to play a part in your success, and our team of skilled, veteran professionals treats it that way, whether you are a neighbor on Main Street or a client across the country.</p>
          <ul className="local__facts">
            <li><b>Visit</b><span>{addressLine}</span></li>
            <li><b>Hours</b><span>Monday – Friday, 8:00 am – 5:00 pm</span></li>
            <li><b>Call</b><span><a href={site.phoneHref}>{site.phone}</a></span></li>
          </ul>
          <div className="local__actions">
            <Link className="button button--yellow" to="/about">Meet Western <ArrowRight /></Link>
            <Link className="text-link" to="/contact">Find us <Check /></Link>
          </div>
        </div>
      </section>
      <p className="photo-credit">Photo: “Downtown Marshall, Minnesota” via <a href="https://commons.wikimedia.org/wiki/File:Downtown_Marshall,_Minnesota_(37860713351).jpg" target="_blank" rel="noreferrer">Wikimedia Commons</a>, CC BY-SA 2.0.</p>
    </>
  )
}
