// A captioned photo used on the service pages. `slot.file` is a full public URL (see serviceData.js).
export function Photo({ slot, className = '', eager = false }) {
  return (
    <figure className={`sp-photo ${className}`}>
      <img src={slot.file} alt={slot.caption} loading={eager ? 'eager' : 'lazy'} width="1400" height="933" />
      <figcaption>{slot.caption}</figcaption>
    </figure>
  )
}
