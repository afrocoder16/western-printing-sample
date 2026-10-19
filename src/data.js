import { PackageCheck, PenTool, Printer, Shirt, Signpost } from 'lucide-react'
import { img } from './site'

// The five services Western lists on its own site: Printing, Signs, Promotional Solutions,
// Design (with a proof process), and Mailing & Finishing (the bindery).
// tone picks the process color: cyan, magenta, yellow, ink (black), blue (cyan + magenta overprint).
export const services = [
  {
    slug: 'printing',
    number: '01',
    title: 'Printing',
    short: 'Printing',
    tagline: 'Small runs. Large runs. Done right.',
    description: 'Business cards to brochures, forms to catalogs. Printed for clients big and small, and for clients across the nation.',
    detail:
      'Printing is more than paper and ink. Each job is a chance to play a part in your success, so every one is held to the same three standards: quality, efficiency, and on-time delivery.',
    icon: Printer,
    tone: 'cyan',
    image: img('printing/sheets.webp'),
    applications: ['Business cards', 'Brochures & flyers', 'Forms & stationery', 'Catalogs & booklets'],
  },
  {
    slug: 'signs',
    number: '02',
    title: 'Signs',
    short: 'Signs',
    tagline: 'Designed, produced, and installed.',
    description: 'Storefront signs, banners, yard signs, and window graphics, handled by one team from sketch to install.',
    detail:
      'A sign has one job: get noticed. We design it, produce it, and install it, so there are no hand-offs between the idea and the street.',
    icon: Signpost,
    tone: 'magenta',
    image: img('signs/storefront.webp'),
    applications: ['Storefront signs', 'Banners', 'Yard signs', 'Window graphics'],
  },
  {
    slug: 'promotional',
    number: '03',
    title: 'Promotional Solutions',
    short: 'Promotional',
    tagline: 'Your name, on things people keep.',
    description: 'Custom imprinting, screen printing, and embroidery for apparel, drinkware, giveaways, and team gear.',
    detail:
      'Shirts, caps, totes, mugs, and more, decorated in-house with the method that suits the item: screen printing, embroidery, or imprinting.',
    icon: Shirt,
    tone: 'yellow',
    image: img('promo/caps.webp'),
    applications: ['Screen printing', 'Embroidery', 'Custom imprinting', 'Company stores'],
  },
  {
    slug: 'design',
    number: '04',
    title: 'Design',
    short: 'Design',
    tagline: 'A design team, and a proof team.',
    description: 'A full-service design team plus a dedicated proof team focused on quality and accuracy, before anything prints.',
    detail:
      'Bring a finished file, a rough sketch, or only a goal. The design team shapes the idea, and the proof team checks every detail until you approve it.',
    icon: PenTool,
    tone: 'ink',
    image: img('design/studio.webp'),
    applications: ['Logos & branding', 'Layout & typesetting', 'Proofing', 'File preparation'],
  },
  {
    slug: 'mailing',
    number: '05',
    title: 'Mailing & Finishing',
    short: 'Mailing & Finishing',
    tagline: 'A full-service bindery, under one roof.',
    description: 'Folding, binding, kitting, and mailing handled in-house, so your job goes from press to mailbox without a hand-off.',
    detail:
      'Western runs its own bindery for customer finishing, mailing, and kitting. That means one team and one schedule from the last press sheet to the final delivery.',
    icon: PackageCheck,
    tone: 'blue',
    image: img('finishing/packing.webp'),
    applications: ['Folding & binding', 'Kitting', 'Mailing', 'Shipping'],
  },
]

// The four steps Western describes on its own site, paired with the four process colors.
export const steps = [
  { n: '01', tone: 'cyan', ink: 'C', title: 'The Process', text: 'Tell us what you need. A quick call, a note, or a file is all it takes to get started.' },
  { n: '02', tone: 'magenta', ink: 'M', title: 'The Idea', text: 'Send in your printing or promotional idea, finished or not. We help shape it.' },
  { n: '03', tone: 'yellow', ink: 'Y', title: 'The Proof', text: 'Our design and proof teams bring it to life, and you approve every detail before it runs.' },
  { n: '04', tone: 'ink', ink: 'K', title: 'Finalize', text: 'Printed, finished, and delivered: high quality, cost effective, and on time.' },
]

// The three standards from Western's tagline.
export const standards = [
  { tone: 'cyan', title: 'High quality', text: 'Every job is checked before it leaves, because your name is on it.' },
  { tone: 'magenta', title: 'Cost effective', text: 'The right process for the quantity, so you never pay for more than you need.' },
  { tone: 'yellow', title: 'On time', text: 'Schedules are promises. We plan backwards from your date and keep it.' },
]
