// One place for Western Printing's business details. Everything below was taken from
// western-printing.com (contact page, footer, and nav) and public directory listings in October 2026.
// If a number or link changes, change it here and every page follows.

export const site = {
  name: 'Western Printing',
  legalName: 'Western Print Group',
  tagline: 'High quality. Cost effective. On time.',
  url: 'https://www.western-printing.com',
  phone: '(507) 537-1577',
  phoneHref: 'tel:+15075371577',
  fax: '(507) 532-6973',
  email: 'westernprinting@western-printing.com',
  address: {
    street: '305 West College Drive',
    city: 'Marshall',
    state: 'MN',
    zip: '56258',
  },
  geo: { lat: 44.44306, lng: -95.79309 },
  hours: [
    { days: 'Monday – Friday', time: '8:00 am – 5:00 pm' },
    { days: 'Saturday & Sunday', time: 'Closed' },
  ],
  social: {
    facebook: 'https://www.facebook.com/WesternPrintingofMarshall/',
    instagram: 'https://www.instagram.com/westernprintgroup',
  },
  // Western's own online portals (all external).
  portals: {
    upload: 'https://upload.western-printing.com',
    visual: 'https://westernprintgroup2026.displaycity.com',
    promo: 'https://westernprinting.espwebsite.com',
    stores: 'https://store.western-printing.com',
  },
}

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`
export const mapsQuery = encodeURIComponent(addressLine)
export const mapsLink = `https://maps.google.com/?q=${mapsQuery}`
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

// Public path helper for files in /public/img.
export const img = (path) => `${import.meta.env.BASE_URL}img/${path}`
