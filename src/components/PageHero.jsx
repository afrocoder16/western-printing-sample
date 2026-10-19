export default function PageHero({ eyebrow, title, intro, tone = 'cyan' }) {
  return (
    <section className={`page-hero dark t-${tone}`}>
      <div className="halftone" aria-hidden="true" />
      <div className="shell page-hero__inner reveal">
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="cmyk-bar cmyk-bar--abs" aria-hidden="true"><i /><i /><i /><i /></div>
    </section>
  )
}
