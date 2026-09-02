# Glass and Windoors Limited — Website

Next.js 16 site for **glassandwindoors.co.uk**: a windows, doors and glazing
company. Dark glass-tech branding, a Three.js 3D hero (a rotating glass
window with floating shards), 8 service pages, a filterable gallery with
lightbox, and a client-side contact form.

## Stack

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS v4** (config lives in `src/app/globals.css` via `@theme`, not a separate config file)
- **Framer Motion** for scroll reveals and tilt-on-hover cards
- **React Three Fiber / drei / three** for the 3D hero
- **EmailJS** for the contact form (no backend/server needed — see below)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before this goes live — placeholders to replace

Everything below lives in one file, **`src/data/company.js`**, except where noted:

- **Phone number** — currently a placeholder (`01000 000000`)
- **Business address** — currently a placeholder
- **Business hours** — check these match reality
- **Social links** — Facebook/Instagram currently point nowhere

Also:

- **Contact form email delivery** — the form uses [EmailJS](https://www.emailjs.com) so the site can stay fully static (no server/database required). Create a free EmailJS account, connect `info@glassandwindoors.co.uk` as an email service, create a template with fields `from_name`, `from_email`, `phone`, `service`, `message`, `to_email`, then copy `.env.local.example` to `.env.local` and fill in the three IDs it asks for.
- **Legal pages** (`/privacy-policy`, `/terms-conditions`, `/cookie-policy`) are drafted as realistic UK-oriented templates but are **not legal advice** — the bracketed placeholders (deposit %, retention periods, etc.) need filling in, and a solicitor should review them before launch, especially if you take deposits or use analytics/marketing cookies.
- **Accreditation badges** — the site intentionally does not claim FENSA/CERTASS/Which? Trusted Trader membership or "years in business" stats since this is a new company. Add real accreditation badges to the trust bar (`src/components/sections/TrustBar.jsx`) once you're registered with a competent person scheme, and only add trading-history claims once they're true.
- **Testimonials** — deliberately omitted rather than invented, since there's no trading history yet. Once you have real Google/Trustpilot reviews, add a testimonials section and link out to your review profile.
- **Favicon/logo** — currently a plain "GW" monogram in the header/footer and the default Next.js favicon. Swap in a real logo file when you have one.

## Content structure

- `src/data/services.js` — all 8 service categories (name, description, features, images). Edit copy or add/remove services here; pages under `/services/[slug]` are generated from this file automatically.
- `src/data/company.js` — single source of truth for contact details (see above).
- `public/images/` — sourced from Pexels (free commercial-use license, no attribution required); see `public/images/CREDITS.md` for the source URL of every photo. Swap in real project photography as it becomes available — real photos of your own installations will do more for credibility and local SEO than stock images.

## Do I need a backend or database?

**No, not for this site as built.** It's a fully static marketing site:

- Page content is static (Next.js pre-renders it at build time)
- The contact form sends directly to EmailJS's servers from the browser — no server code of yours is involved
- It can be hosted anywhere that serves static/Next.js sites (Vercel, Netlify, Cloudflare Pages, etc.) with no server or database to provision or pay for

You'd only need a backend + database if you later want things like: an admin-editable content system (CMS) instead of editing `services.js` directly, a quote-request/CRM pipeline with saved customer records, online payments or deposits, customer accounts/order tracking, or a blog with comments. None of that is needed to launch.

## Deployment

Push to a Git repo and deploy on [Vercel](https://vercel.com/new) (zero-config for Next.js) — add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings, then point `glassandwindoors.co.uk`'s DNS at it.
