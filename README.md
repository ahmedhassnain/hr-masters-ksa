# HR Masters KSA

Building teams that derive success.

A website for HR Masters — a recruitment and workforce consultancy helping companies across Saudi Arabia find and keep the right people. Three pages, three color worlds, one wallet-card stack that opens up as you scroll.

**Live:** [hr-masters-ksa.vercel.app](https://hr-masters-ksa.vercel.app)

---

## What's on the site

Three pages, each living in its own palette.

**Home** sits in deep navy. It opens with a wallet of cards layered on top of each other — one in front, three peeking out from behind — and from there walks through what the company does, the values that guide placements, and the trust-and-why.

**About** switches to maroon. Same wallet metaphor, but this time the cards open: click the chevron on any card in the stack and the whole layout breathes outward as the content expands.

**Contact** goes teal. A form, a phone number, an email, and nothing in the way.

Scroll inside a page and sections snap into place. Move between pages and the color behind everything changes with you.

## The look

Two typefaces do all the work.

**Rofane** is a tall-contrast serif for headings and the long paragraphs. Its unicode-range is narrowed to Latin letters and digits on purpose, so anything outside that falls back cleanly rather than rendering half in-font and half out.

**Fake Receipt** is a chunky pixel display face for buttons, labels, and the retro accents — the thing that keeps the design from reading as another corporate SaaS page.

Everything else — spacing, color, borders — is deliberately quiet so those two faces can do the talking.

## Stack

Vite + React for the shell. Framer Motion handles the entrance animations and the scroll-linked fades. CSS scroll-snap drives the section-by-section scroll. No UI library, no Tailwind, no CSS-in-JS — plain CSS files sitting next to each component. Deployed on Vercel.

## Running it locally

```bash
git clone https://github.com/ahmedhassnain/hr-masters-ksa.git
cd hr-masters-ksa
npm install
npm run dev
```

Dev server lives at `localhost:5173`.

To build and preview the production bundle:

```bash
npm run build
npm run preview
```

## Project layout

```
src/
├── App.jsx              routes between pages, holds the color-scheme state
├── Navbar.jsx           page switcher + logo
├── Footer.jsx
├── Home.jsx             wallet hero, KPI carousel, trust dropdown, CTA
├── About.jsx            expanding wallet stack, values marquee, differentiators
├── Contact.jsx          form + contact details
├── Home-Components/
│   ├── CardComponent.jsx
│   ├── KPIComponent.jsx
│   ├── CardDropdown.jsx
│   └── FactCards.jsx
├── About-Components/
│   ├── KPICardAbout.jsx
│   └── AboutComponent.jsx
└── assets/              fonts, wallet textures, bubble patterns
```

Each page keeps its Framer Motion variants defined at the top of its own file instead of in a shared config. Easier to tune per-section when the animations are sitting right next to the JSX they drive.

## A few decisions worth calling out

If you fork this or want to understand why something is the way it is:

The scroll-snap container is `<html>` itself, not a wrapper div. Fixed-navbar variants were tried and created more awkwardness than they solved — the navbar scrolls with the first section and comes back when you scroll up to it.

`100vh` was replaced with `100dvh` after real iOS testing. Mobile Safari's URL bar changes the viewport height as you scroll, and the fixed `100vh` value left content hiding behind it.

Fonts are served from local `.otf` files, not Google Fonts. File names are lowercase with no spaces to avoid the URL-encoding differences between local dev (macOS, case-insensitive) and Vercel's Linux runtime.

Card positions in the About wallet stack use `vh` units with a lookup table instead of hardcoded pixels, so the stack keeps its proportions across screen sizes without a media query per card.

## Credits

Design and build by [Ahmed Hassnain](https://github.com/ahmedhassnain).

Fonts used under their respective licenses: Rofane for serif, Fake Receipt for the pixel display face.
