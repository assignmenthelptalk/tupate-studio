# Tupate Studio — CLAUDE.md

This is the agency website and client site template for **Tupate Studio**
(tupate.studio) — a Nairobi-based web design, SEO, and digital marketing agency.
Legal entity: Tupate Limited. Trading as: Tupate Studio.

---

## What this project is

There are two ways this codebase is used:

1. **The Tupate Studio agency website** — the site at tupate.studio that sells
   our services to potential clients.
2. **The client site template** — a reusable Astro template we clone and
   customise for each paying client. Every new client gets their own repo.

---

## Tech stack

| Layer       | Tool                  | Notes                                      |
|-------------|-----------------------|--------------------------------------------|
| Framework   | Astro                 | Static site generation, `.astro` components |
| Styling     | Plain CSS             | CSS variables in `Base.astro`, no Tailwind  |
| Deployment  | Vercel                | Auto-deploys on push to `main`              |
| Code host   | GitHub                | One repo per client                         |
| Domain      | Namecheap / KENIC     | .studio from Namecheap, .co.ke from KENIC   |
| Email       | Zoho Mail             | hello@tupate.studio                         |
| Fonts       | Google Fonts          | Syne (display) + DM Sans (body)             |

---

## Project structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── config.ts          ← EDIT THIS for each client. All content lives here.
│   ├── layouts/
│   │   └── Base.astro     ← HTML shell, global CSS variables, font imports
│   ├── components/
│   │   ├── Navbar.astro   ← Sticky nav, scrolled state, mobile toggle
│   │   ├── Hero.astro     ← Full-screen dark hero, CTA buttons
│   │   ├── Services.astro ← Services grid, pulled from config
│   │   ├── Stats.astro    ← Dark section: stats + brand pills
│   │   ├── Testimonials.astro ← Client quotes with avatar initials
│   │   ├── Contact.astro  ← Contact info + form → opens WhatsApp
│   │   └── Footer.astro   ← Links, social, "Website by Tupate Studio" credit
│   └── pages/
│       └── index.astro    ← Assembles all components + floating WhatsApp button
├── astro.config.mjs
├── package.json
└── CLAUDE.md              ← You are here
```

---

## The one file you edit per client: `src/config.ts`

Every piece of client-specific content lives in `src/config.ts`. When starting
a new client site, this is the **only file you need to change** to get a working
site. Everything else pulls from this config automatically.

```ts
export const SITE = {
  name: "Business Name",
  tagline: "Short tagline",
  description: "Meta description for SEO",
  phone: "+254 7XX XXX XXX",
  whatsapp: "2547XXXXXXXX",   // No + sign, no spaces
  email: "info@client.co.ke",
  address: "Area, City, Kenya",
  // ...services, testimonials, brands, etc.
}
```

**Never hardcode client content inside components.** If something is
client-specific, it belongs in `config.ts`.

---

## CSS design system

All design tokens are CSS variables defined in `src/layouts/Base.astro`.

```css
:root {
  --accent:       #E8521A;   /* Tupate orange — primary CTA colour */
  --accent-dark:  #C4401A;   /* Hover state for accent */
  --dark:         #0F0E0D;   /* Hero backgrounds, navbar */
  --dark2:        #1C1A18;   /* Footer, secondary dark surfaces */
  --mid:          #3A3733;   /* Body text */
  --muted:        #8A8680;   /* Secondary text, labels */
  --light:        #F5F3F0;   /* Light section backgrounds */
  --white:        #FFFFFF;
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --radius:       4px;
  --radius-lg:    10px;
  --transition:   0.2s ease;
}
```

**Rules:**
- Never use hardcoded hex values in components. Always use CSS variables.
- `--accent` is Tupate orange. Use it for CTAs, links, and highlights only.
- Dark sections use `--dark` as background. Light sections use `--light`.
- Two fonts only: Syne for headings/display, DM Sans for body text.
- No Tailwind. No CSS frameworks. Plain CSS only.

---

## Component conventions

- Every component imports `SITE` from `../config` (or `../../config` from pages).
- Styles are scoped with `<style>` inside each `.astro` file.
- No inline styles except for one-off overrides (`style="background: var(--dark)"`).
- Mobile breakpoint: `768px`. Every component must work at 320px width.
- All sections use the `.section` class (`padding: 80px 0`) or `.section-sm`.
- All content is wrapped in `.container` (`max-width: 1100px; margin: 0 auto`).

---

## Reusable CSS classes (defined in Base.astro)

```
.container       — max-width wrapper, 24px horizontal padding
.section         — 80px top/bottom padding
.section-sm      — 48px top/bottom padding
.btn             — base button styles
.btn-primary     — orange filled button
.btn-outline     — white outline button (for dark backgrounds)
.section-label   — orange uppercase eyebrow text (11px, tracked)
.section-title   — main section heading (clamp 28px–40px)
.section-sub     — section subtitle (17px, muted, max 560px)
```

---

## Contact form → WhatsApp pattern

We don't use a backend for contact forms. The form submits by opening WhatsApp
with a pre-filled message. This means:

- Zero server costs
- Instant response channel for Kenyan clients
- No spam
- Works even if client doesn't check email

The WhatsApp number comes from `SITE.whatsapp` in config. Format: `2547XXXXXXXX`
(country code + number, no plus, no spaces).

The floating WhatsApp button in `index.astro` is always visible on mobile and
links to the same number.

---

## Deploying a new client site

1. Duplicate this repo on GitHub — name it `tupate-[clientname]`
2. Edit `src/config.ts` with the client's details
3. Update `astro.config.mjs` — change `site` to the client's domain
4. Push to GitHub
5. Go to vercel.com → New Project → Import from GitHub
6. Add the client's custom domain in Vercel settings
7. Point the client's domain DNS to Vercel (Vercel gives you the records)
8. Done — live in under 10 minutes

---

## Adding a new page

Create `src/pages/about.astro` (or any name):

```astro
---
import Base from '../layouts/Base.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
---

<Base title="About Us">
  <Navbar />

  <section class="section" style="padding-top: 120px;">
    <div class="container">
      <p class="section-label">About</p>
      <h1 class="section-title">Your heading here</h1>
    </div>
  </section>

  <Footer />
</Base>
```

Always include `padding-top: 120px` on the first section of any page — this
clears the fixed navbar.

---

## SEO checklist per client site

Every site we deliver must have:

- [ ] Unique `<title>` tag — `Business Name | City | Service`
- [ ] Meta description under 160 characters in `config.ts`
- [ ] `astro.config.mjs` `site` set to the live domain
- [ ] Google Analytics script added to `Base.astro` head
- [ ] Google Search Console verified
- [ ] Google Business Profile created or claimed for the client
- [ ] `sitemap.xml` — add `@astrojs/sitemap` integration
- [ ] All images have `alt` text
- [ ] `favicon.svg` replaced with client's logo/initial

---

## Sitemap setup

Add to `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://client-domain.co.ke',
  integrations: [sitemap()],
});
```

Install: `npm install @astrojs/sitemap`

---

## Performance rules

- No heavy JS libraries. Vanilla JS only for interactions.
- Images: use `.webp` format. Compress before adding to `public/`.
- Google Fonts are loaded with `preconnect` — do not change the font loading strategy.
- Astro ships zero JS by default — keep it that way unless interactivity is needed.
- Target Lighthouse score: 90+ on all four metrics for every client site.

---

## Naming conventions

| Thing              | Convention              | Example                    |
|--------------------|-------------------------|----------------------------|
| Component files    | PascalCase              | `HeroSection.astro`        |
| Page files         | lowercase               | `about.astro`              |
| CSS class names    | kebab-case              | `.service-card`            |
| Config keys        | camelCase               | `whatsapp`, `ctaText`      |
| Client repos       | `tupate-[clientname]`   | `tupate-gosstech`          |
| Client domains     | client's own domain     | `gosstech.co.ke`           |

---

## The footer credit rule

Every client site footer contains:

```
Website by Tupate Studio
```

This is a permanent backlink and referral source. **Never remove it.**
If a client asks to remove it, the price to do so is Ksh 15,000 added to
the invoice. This is non-negotiable — it is in the client contract.

---

## Business context (for Claude)

- **Agency name:** Tupate Studio
- **Legal entity:** Tupate Limited
- **Location:** Nairobi, Kenya
- **Primary domain:** tupate.studio
- **Redirect domain:** tupate.co.ke
- **Email:** hello@tupate.studio
- **Services:** Website builds (Ksh 25,000), monthly maintenance (Ksh 5,000/mo),
  SEO packages (Ksh 8,000/mo), Google Ads management (15% of spend)
- **Target clients:** Kenyan SMEs — industrial, medical, legal, real estate,
  hospitality, education
- **Stack philosophy:** Free tools only. Astro + GitHub + Vercel. No WordPress.
  No page builders. Clean hand-built code.
- **Pricing philosophy:** Build at Ksh 25,000. Always upsell the retainer.
  Recurring revenue is the goal.
