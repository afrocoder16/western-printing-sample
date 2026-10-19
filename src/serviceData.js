// Content for the five service pages. Facts come from western-printing.com; the supporting copy is
// written for this sample and kept general on purpose (no equipment lists, prices, or founding dates
// that Western has not published). PHOTOS live in public/img; swap them for Western's own project photos.

import { img } from './site'

export const serviceOrder = ['printing', 'signs', 'promotional', 'design', 'mailing']

export const servicePages = {
  printing: {
    slug: 'printing',
    path: '/printing',
    title: 'Printing',
    seoTitle: 'Commercial Printing in Marshall, MN',
    seoDescription: 'Small to large run printing for clients big and small: business cards, brochures, forms, catalogs, and more from Western Printing in Marshall, Minnesota.',
    tone: 'cyan',
    eyebrow: 'Printing',
    headline: 'Printing, from small runs to large.',
    subhead: 'Quality. Efficiency. On time.',
    lede: 'Western prints for clients big and small, and for clients across the nation.',
    words: [
      'Printing is more than paper and ink. Every project is a chance to play a part in your success, so each one is held to three standards: quality, efficiency, and on-time delivery.',
      'Our veteran team helps you define the goal for the piece and recommends the smartest way to produce it, whether that is a few hundred business cards or a long run of brochures, forms, and catalogs.',
      'No project is too big or too small.',
    ],
    facts: [
      { text: 'Small to large', label: 'Run lengths we handle' },
      { text: 'Nationwide', label: 'Clients we print for' },
      { text: '3 standards', label: 'Quality, efficiency, on-time' },
    ],
    prints: ['Business cards', 'Brochures', 'Flyers', 'Postcards', 'Booklets', 'Catalogs', 'Letterhead', 'Envelopes', 'Forms', 'Posters', 'Calendars', 'Newsletters'],
    photos: [
      { key: 'hero', file: img('printing/sheets.webp'), caption: 'Fresh sheets, checked by hand.' },
      { key: 'offset', file: img('printing/offset.webp'), caption: 'Ink, rollers, and a steady hand.' },
      { key: 'wide', file: img('printing/wide-format.webp'), caption: 'Wide-format output for banners and posters.' },
      { key: 'books', file: img('printing/booklets.webp'), caption: 'Stacks of finished booklets.' },
    ],
    related: [
      { slug: 'design', pitch: 'Our design team and proof team make sure the file is right before the press runs.' },
      { slug: 'mailing', pitch: 'Fold, bind, kit, and mail in-house, so one team owns the whole job.' },
    ],
    tools: ['estimator', 'artwork'],
  },

  signs: {
    slug: 'signs',
    path: '/signs',
    title: 'Signs',
    seoTitle: 'Custom Signs & Banners in Marshall, MN',
    seoDescription: 'Sign design, production, and installation in Marshall, Minnesota: storefront signs, banners, yard signs, and window graphics from Western Printing.',
    tone: 'magenta',
    eyebrow: 'Signs',
    headline: 'Signs that get you noticed.',
    subhead: 'Designed. Produced. Installed.',
    lede: 'Western designs, produces, and installs signs for businesses, events, and organizations.',
    words: [
      'A good sign does one job: it gets you noticed. We handle it from the first sketch to the final install, so the people who design your sign are the same people who build and hang it.',
      'Tell us where it will live and who needs to see it. We will recommend the size, material, and message that fit the spot and the budget.',
    ],
    facts: [
      { text: 'Design', label: 'Layout and artwork in-house' },
      { text: 'Production', label: 'Made to last, inside or out' },
      { text: 'Installation', label: 'Put up by the people who made it' },
    ],
    prints: ['Storefront signs', 'Building signs', 'Banners', 'Yard signs', 'Window graphics', 'Sidewalk A-frames', 'Wayfinding', 'Vehicle lettering', 'Event displays', 'Magnetic signs'],
    photos: [
      { key: 'hero', file: img('signs/storefront.webp'), caption: 'Dimensional letters for a storefront.' },
      { key: 'pole', file: img('signs/pole-banner.webp'), caption: 'Street-pole banners for events and seasons.' },
      { key: 'hand', file: img('signs/handpainted.webp'), caption: 'Classic shop lettering.' },
      { key: 'window', file: img('signs/window-graphic.webp'), caption: 'Window graphics that stop foot traffic.' },
    ],
    related: [
      { slug: 'design', pitch: 'Every sign starts as a layout. Our designers get it right on screen first.' },
      { slug: 'promotional', pitch: 'Match the sign out front with the shirts and caps your crew wears.' },
    ],
    tools: ['estimator', 'artwork'],
  },

  promotional: {
    slug: 'promotional',
    path: '/promotional-products',
    title: 'Promotional Solutions',
    seoTitle: 'Promotional Products, Screen Printing & Embroidery in Marshall, MN',
    seoDescription: 'Custom imprinting, screen printing, and embroidery for apparel, drinkware, and giveaways from Western Printing in Marshall, Minnesota.',
    tone: 'yellow',
    eyebrow: 'Promotional solutions',
    headline: 'Your name, on things people keep.',
    subhead: 'Imprinting. Screen printing. Embroidery.',
    lede: 'Custom imprinting, screen printing, and embroidery for apparel, drinkware, giveaways, and team gear.',
    words: [
      'The best promotional product is the one people actually use. We decorate shirts, caps, totes, mugs, and more with the method that suits the item: screen printing for bold color, embroidery for a stitched finish, or imprinting for smaller goods.',
      'Not sure what to give away? Tell us the audience and the budget. We will suggest products that fit, and our online shops make reordering simple.',
    ],
    facts: [
      { text: 'Screen printing', label: 'Bold color on apparel' },
      { text: 'Embroidery', label: 'Stitched logos that last' },
      { text: 'Imprinting', label: 'Custom products of all kinds' },
    ],
    prints: ['T-shirts', 'Hoodies', 'Caps & hats', 'Polos & jackets', 'Tote bags', 'Drinkware', 'Pens & office', 'Giveaways', 'Spirit wear', 'Uniforms', 'Company stores'],
    photos: [
      { key: 'hero', file: img('promo/caps.webp'), caption: 'Embroidered caps in every color.' },
      { key: 'screen', file: img('promo/screenprint.webp'), caption: 'Shirts pressed and printed by hand.' },
      { key: 'stitch', file: img('promo/stitching.webp'), caption: 'Embroidery, stitch by stitch.' },
      { key: 'tote', file: img('promo/tote.webp'), caption: 'Totes that carry your brand around town.' },
    ],
    related: [
      { slug: 'design', pitch: 'We turn your logo into artwork that works on fabric, mugs, and caps.' },
      { slug: 'mailing', pitch: 'Kitting and shipping: we pack branded kits and send them where they need to go.' },
    ],
    tools: ['estimator', 'artwork'],
  },

  design: {
    slug: 'design',
    path: '/design',
    title: 'Design',
    seoTitle: 'Graphic Design & Proofing in Marshall, MN',
    seoDescription: 'A full-service design team and a proof team focused on quality and accuracy. Graphic design and print-ready proofs from Western Printing in Marshall, Minnesota.',
    tone: 'ink',
    eyebrow: 'Design',
    headline: 'Design with a proof process built in.',
    subhead: 'From idea to approved proof.',
    lede: 'A full-service design team and a proof team focused on quality and accuracy.',
    words: [
      'Bring a finished file, a rough sketch, or only a goal. The design team shapes the idea into something press-ready, and the proof team checks every detail before anything prints.',
      'Proofs keep you in control. You see it, mark it up, and approve it. Nothing runs until you say so.',
    ],
    facts: [
      { text: 'Full service', label: 'Design from concept to file' },
      { text: 'Proof team', label: 'Focused on quality and accuracy' },
      { text: 'You approve', label: 'Nothing prints without your OK' },
    ],
    prints: ['Logos & branding', 'Brochures', 'Flyers & posters', 'Postcards', 'Sign artwork', 'Apparel art', 'Layout & typesetting', 'Prepress & file prep', 'Retouching', 'Ads'],
    photos: [
      { key: 'hero', file: img('design/studio.webp'), caption: 'From idea to a press-ready file.' },
      { key: 'sketch', file: img('design/sketch.webp'), caption: 'All you need is a rough idea.' },
      { key: 'swatches', file: img('design/swatches.webp'), caption: 'Color checked before the press rolls.' },
      { key: 'type', file: img('printing/type-test.webp'), caption: 'Type and color checked on a test sheet.' },
    ],
    related: [
      { slug: 'printing', pitch: 'Designed with the press in mind, so what you approve is what you get.' },
      { slug: 'signs', pitch: 'Sign artwork built to scale, so it reads from across the street.' },
    ],
    tools: ['artwork', 'estimator'],
  },

  mailing: {
    slug: 'mailing',
    path: '/mailing-finishing',
    title: 'Mailing & Finishing',
    seoTitle: 'Bindery, Finishing, Kitting & Mailing in Marshall, MN',
    seoDescription: 'A full-service bindery for customer finishing, mailing, and kitting, all in-house at Western Printing in Marshall, Minnesota.',
    tone: 'blue',
    eyebrow: 'Mailing & finishing',
    headline: 'Finished, kitted, and mailed.',
    subhead: 'A full-service bindery, under one roof.',
    lede: 'Customer finishing, mailing, and kitting, done in-house so your job goes from press to mailbox without a hand-off.',
    words: [
      'The last steps decide how a job looks and when it lands. Western runs its own bindery, so folding, binding, finishing, kitting, and mailing happen in the same building as the printing.',
      'That means one team and one schedule. We plan the finish and the mailing when we plan the print, so nothing waits on someone else.',
    ],
    facts: [
      { text: 'Finishing', label: 'Fold, cut, bind, and more' },
      { text: 'Kitting', label: 'Assembled and packed for you' },
      { text: 'Mailing', label: 'Prepared and sent from Marshall' },
    ],
    prints: ['Folding', 'Cutting & trimming', 'Collating', 'Stapling & booklets', 'Binding', 'Die cutting', 'Laminating', 'Kitting', 'Assembly', 'Bulk mailing', 'Addressing', 'Shipping'],
    photos: [
      { key: 'hero', file: img('finishing/packing.webp'), caption: 'Kitting: every piece, packed with care.' },
      { key: 'diecut', file: img('finishing/diecut.webp'), caption: 'Die cuts that make a piece stand out.' },
      { key: 'emboss', file: img('finishing/emboss.webp'), caption: 'Details you can feel.' },
      { key: 'mail', file: img('finishing/envelope.webp'), caption: 'Direct mail, ready to go.' },
    ],
    related: [
      { slug: 'printing', pitch: 'Print it here, finish it here, mail it from here.' },
      { slug: 'promotional', pitch: 'Branded kits start with great products. Let us source and pack them.' },
    ],
    tools: ['eddm', 'estimator'],
  },
}

export const getService = (slug) => servicePages[slug]
