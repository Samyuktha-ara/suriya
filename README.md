# Suriya NEXA Thanjavur — Suzuki Fronx Landing Page

A premium, SEO-optimized, single-page React marketing site for **Suriya NEXA**, an
authorized Suzuki NEXA dealer in **Thanjavur, Tamil Nadu**. Built to rank for Suzuki
Fronx / NEXA Thanjavur searches **and to convert paid ad traffic** into calls,
WhatsApp leads, test-drive bookings and walk-ins.

## Tech stack

- **React 19** + **Vite 8** (Rolldown)
- **React Router DOM** (installed for future multi-page scalability)
- **Framer Motion** — scroll & interaction animations
- **Lucide React** — icons
- Plain **CSS with design tokens** (CSS custom properties) — no CSS framework, for a
  fully custom premium look and the smallest possible payload
- **Google Fonts**: Playfair Display (display) + Poppins (body)
- Native **document metadata + JSON-LD** in `index.html` (most reliable for a SPA)
- **Code-splitting**: every below-the-fold section is lazy-loaded
- **WebP** hero + car imagery for fast LCP

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

Everything works immediately after `npm install`.

## Project structure

```
public/                 favicon.svg, robots.txt, sitemap.xml, site.webmanifest
src/
  assets/               hero + car imagery (WebP) & original PNGs
  animations/           reusable Framer Motion variants
  data/                 dealer info, cars, content, FAQs  ← single source of truth
  components/
    layout/             Navbar, Footer, FloatingButtons
    sections/           Hero, WhyChoose, FeaturedCar, OtherCars, WhyBuyFronx,
                        Finance, Testimonials, Process, FAQ, Contact
    ui/                 Button, SectionHeading, Reveal, Icon, CarArt (SVG fallback)
  App.jsx               composition + lazy loading
  index.css             design tokens + global styles
```

## Customising for the real dealership

All business details live in **`src/data/dealer.js`** — update these before going live:

- `PHONE_RAW` — phone number (country code + number, digits only). Drives the
  Call button, WhatsApp links and schema.
- Address, email, working hours, map embed, social links.

Then update the absolute URLs, phone and address inside **`index.html`** (title, meta
description, canonical, Open Graph, and all JSON-LD schema blocks) and in
`public/sitemap.xml`, `public/robots.txt`, `public/site.webmanifest`.

> The canonical domain used throughout is the placeholder
> `https://www.suriyanexathanjavur.in/` — replace it with the live domain.

## Optimised for Google / Meta ads

- Mobile-first hero with the value proposition, trust rating and **two prominent,
  animated CTAs (Book Test Drive + Call Now)** above the fold
- Persistent mobile action bar (Call / WhatsApp / Test Drive) always in thumb reach
- Lightweight WebP imagery + code-splitting for a fast LCP on mobile data
- Conversion-first copy, scarcity/trust cues and a zero-backend enquiry form
- Add your ad conversion pixel/tag in `index.html`; CTA links use `tel:` and
  `wa.me` so conversions fire on click.

## SEO features

- Single `<h1>`, correct `h2 → h3 → h4` hierarchy, semantic landmarks & skip link
- Keyword-rich title, meta description, keywords, canonical, Open Graph & Twitter cards
- **JSON-LD**: AutoDealer / LocalBusiness / Organization, WebSite + SearchAction,
  Product + AggregateOffer + Review, BreadcrumbList, and FAQPage
- Local SEO: geo meta tags + `areaServed` covering Thanjavur, Kumbakonam, Pattukkottai,
  Papanasam, Orathanadu and more
- `robots.txt`, XML `sitemap.xml`, PWA `site.webmanifest`, theme color & SVG favicon
- Performance: font preconnect/preload, non-blocking font load, lazy images with
  explicit width/height (CLS-safe), `fetchpriority="high"` LCP hero image, code-splitting
- Accessibility: ARIA labels, keyboard-focusable controls, `prefers-reduced-motion`
  support, visible focus states

## Conversion features

- Sticky Call / WhatsApp / Test Drive floating actions (desktop rail + mobile bar)
- Every section ends with a CTA; unified, subtle ink-style buttons throughout
- Enquiry form that composes a pre-filled WhatsApp message (no backend required)
- Trust signals: ratings, testimonials, process timeline, finance & exchange badges

## License

Proprietary — built for Suriya NEXA Thanjavur.
