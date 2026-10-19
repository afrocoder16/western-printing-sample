// Customer reviews for the testimonials section.
//
// This list is intentionally EMPTY. Reviews of any other business must never appear here, and public
// review data for Western Printing is thin (one 2016 review on
// The Knot, a few ratings on directory sites), so nothing is invented here. While the list is empty, the
// Testimonials component renders nothing.
//
// To switch the section on, paste Western's real Google reviews below, exactly as posted:
//
//   {
//     id: 'unique-id',
//     text: 'Review text exactly as posted.',
//     stars: 5,                       // optional
//     name: 'Reviewer name',
//     detail: 'Google review · 2 months ago',
//   },
//
// Production plan: pull these live from Western's Google Business Profile.

export const reviewSummary = {
  rating: null, // e.g. 4.8, once real data is available
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Western+Print+Group+305+W+College+Dr+Marshall+MN',
}

export const reviews = []
