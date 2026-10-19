import { img } from './site'

// Sample imagery for the "Our work" gallery. These are stock photographs standing in for Western's own
// project photos (credits in public/img/CREDITS.md). To use real work, drop photos in public/img/work/
// and edit this list: nothing else needs to change.

export const categories = [
  { id: 'all', label: 'All work' },
  { id: 'printing', label: 'Printing', tone: 'cyan' },
  { id: 'signs', label: 'Signs', tone: 'magenta' },
  { id: 'promotional', label: 'Promotional', tone: 'yellow' },
  { id: 'design', label: 'Design', tone: 'ink' },
  { id: 'finishing', label: 'Mailing & finishing', tone: 'blue' },
]

export const toneOf = Object.fromEntries(categories.filter((c) => c.tone).map((c) => [c.id, c.tone]))

export const projects = [
  { id: 'storefront', cat: 'signs', title: 'Dimensional storefront letters', src: img('signs/storefront.webp'), w: 1400, h: 933, note: 'Raised letters on a painted panel. Designed, produced, and installed.' },
  { id: 'screenprint', cat: 'promotional', title: 'Hand-pressed custom tees', src: img('promo/screenprint.webp'), w: 1000, h: 1500, note: 'Screen printing for bold color on apparel.' },
  { id: 'sheets', cat: 'printing', title: 'Fresh sheets, checked by hand', src: img('printing/sheets.webp'), w: 1400, h: 933, note: 'Every run is checked before it moves to the bindery.' },
  { id: 'pole-banner', cat: 'signs', title: 'Street-pole banners', src: img('signs/pole-banner.webp'), w: 1400, h: 933, note: 'Seasonal and event banners for downtown poles.' },
  { id: 'caps', cat: 'promotional', title: 'Embroidered caps', src: img('promo/caps.webp'), w: 1400, h: 934, note: 'Stitched logos on caps in team and brand colors.' },
  { id: 'brochures', cat: 'printing', title: 'Brochures and guides', src: img('printing/brochures.webp'), w: 1400, h: 933, note: 'Folded, trimmed, and ready for the rack.' },
  { id: 'handpainted', cat: 'signs', title: 'Classic shop lettering', src: img('signs/handpainted.webp'), w: 1400, h: 933, note: 'Hand-lettered looks for main-street storefronts.' },
  { id: 'studio', cat: 'design', title: 'Layout and proofing', src: img('design/studio.webp'), w: 1400, h: 933, note: 'Our design team builds the file; the proof team checks it.' },
  { id: 'stitching', cat: 'promotional', title: 'Embroidery, stitch by stitch', src: img('promo/stitching.webp'), w: 1400, h: 934, note: 'Machine embroidery for polos, jackets, and bags.' },
  { id: 'window', cat: 'signs', title: 'Window graphics', src: img('signs/window-graphic.webp'), w: 1000, h: 1500, note: 'Cut and printed graphics for glass.' },
  { id: 'wide-format', cat: 'printing', title: 'Wide-format banner output', src: img('printing/wide-format.webp'), w: 1400, h: 933, note: 'Banners and posters printed to size.' },
  { id: 'packing', cat: 'finishing', title: 'Kitting and fulfillment', src: img('finishing/packing.webp'), w: 1400, h: 933, note: 'Packed with care, with a note in every box.' },
  { id: 'sketch', cat: 'design', title: 'From sketch to final art', src: img('design/sketch.webp'), w: 1200, h: 1800, note: 'All you need is a rough idea.' },
  { id: 'yard', cat: 'signs', title: 'Yard and real-estate signs', src: img('signs/yard.webp'), w: 1000, h: 1776, note: 'Durable signs, installed on the spot.' },
  { id: 'squeegee', cat: 'promotional', title: 'The screen-printing press', src: img('promo/squeegee.webp'), w: 1400, h: 933, note: 'The squeegee that lays down every color.' },
  { id: 'programs', cat: 'printing', title: 'Event programs', src: img('printing/programs.webp'), w: 1400, h: 933, note: 'Programs and handouts, printed and folded.' },
  { id: 'diecut', cat: 'finishing', title: 'Die-cut specialty pieces', src: img('finishing/diecut.webp'), w: 1400, h: 933, note: 'Custom shapes that make a piece stand out.' },
  { id: 'embroidery', cat: 'promotional', title: 'Multi-needle embroidery', src: img('promo/embroidery.webp'), w: 1000, h: 1500, note: 'Production embroidery for teams and businesses.' },
  { id: 'swatches', cat: 'design', title: 'Color you can trust', src: img('design/swatches.webp'), w: 1400, h: 933, note: 'Color is matched and proofed before the press rolls.' },
  { id: 'offset', cat: 'printing', title: 'Ink, rollers, and a steady hand', src: img('printing/offset.webp'), w: 1200, h: 900, note: 'Where color meets paper.' },
  { id: 'tote', cat: 'promotional', title: 'Custom tote bags', src: img('promo/tote.webp'), w: 1000, h: 1497, note: 'Totes that carry your brand around town.' },
  { id: 'envelope', cat: 'finishing', title: 'Direct mail, ready to go', src: img('finishing/envelope.webp'), w: 1400, h: 933, note: 'Printed, addressed, and mailed from Marshall.' },
]
