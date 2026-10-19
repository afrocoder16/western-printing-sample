# Western Printing website

A responsive sample marketing site for Western Printing (Western Print Group) at 305 West College Drive, Marshall, Minnesota. Built with React and Vite. See [DESIGN.md](DESIGN.md) for the design system.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run qa:visual
```

The visual QA command expects the Vite development server to be running at `http://127.0.0.1:5173`. It needs Chrome or Edge (set `BROWSER` to override the path), takes full-page screenshots of every page at desktop and mobile widths into `.edge-qa/`, and runs an accessibility audit. `ONLY=home,printing` and `WIDTHS=1440` narrow the run.

## What is real and what is sample

| Real, from western-printing.com | Sample / placeholder |
| --- | --- |
| Name, address, phone, fax, email, hours, social links | All photos are stock images (see [public/img/CREDITS.md](public/img/CREDITS.md)); swap in Western’s own |
| The five services and the four-step process | Estimator and EDDM Planner prices and routes are **demo data** |
| The tagline, mission, and “veteran team” language | The monthly promotion offer |
| Links to Western’s upload, promotional-shop, company-store, and visual-marketing portals | Forms are front-end only: they show a success message and send nothing |

There are no customer reviews yet: the section stays hidden until real ones are added to `src/reviews.js`. No staff names or founding date are shown because Western does not publish them.

## Where things live

| To change… | Edit |
| --- | --- |
| Phone, address, hours, portal links, social links | [`src/site.js`](src/site.js) |
| Service cards, the four steps, the three standards | [`src/data.js`](src/data.js) |
| Service page words, facts, photos, “what we make” chips | [`src/serviceData.js`](src/serviceData.js) |
| The interactive demos | `src/components/service/*Lab.jsx`, styled in [`src/labs.css`](src/labs.css) |
| The monthly promotion on the home page | [`src/monthlyPromo.js`](src/monthlyPromo.js) |
| Our work gallery | [`src/workData.js`](src/workData.js) |
| Customer reviews (hidden while empty) | [`src/reviews.js`](src/reviews.js) |
| Estimator / EDDM Planner demo rates | [`src/pages/tools/pricingData.js`](src/pages/tools/pricingData.js) (**demo data, not Western’s real prices**) |
| Production days and holidays used for “files due” dates | [`src/pages/tools/deadlineData.js`](src/pages/tools/deadlineData.js), `TURN_DAYS` in `flow/flowLogic.js` |
| Downloadable artwork templates | `python scripts/make-templates.py` (needs PyMuPDF) |
| Google Analytics | Build with `VITE_GA_ID=G-XXXXXXXXXX` (nothing loads without it) |
| Sample-visitor gate | [`src/components/SampleGate.jsx`](src/components/SampleGate.jsx) asks for a name and email, then emails Midvora through [Web3Forms](https://web3forms.com). Set the repo variable `VITE_GATE_KEY` (Settings → Secrets and variables → Actions → Variables) to the Web3Forms access key. With no key the gate lets everyone in and sends nothing. It is a soft gate: it records who looked but does not hide the files. |

## Deployment

Every push to `main` builds and deploys the site through GitHub Pages. The workflow uses the repository name as the base path, so it works from any repository.
