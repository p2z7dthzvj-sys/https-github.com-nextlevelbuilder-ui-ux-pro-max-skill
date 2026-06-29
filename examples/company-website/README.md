# Northwind — Company Website (Next.js + Tailwind)

A functional, responsive B2B company website scaffold generated with the
[Antigravity Kit / ui-ux-pro-max](../../README.md) design intelligence toolkit.

## Design spec (sourced from ui-ux-pro-max)

| Decision | Value | Domain query |
|----------|-------|--------------|
| Stack | Next.js App Router + Tailwind | `--stack nextjs` |
| Palette | B2B Service (`#0F172A` / accent `#0369A1`) | `--domain color` |
| Fonts | Poppins + Open Sans (Modern Professional) | `--domain typography` |
| Page pattern | Hero → Features → Pricing → FAQ → CTA | `--domain landing` |

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3** with design tokens in `tailwind.config.ts`
- **next/font** for self-hosted Google Fonts (Poppins + Open Sans)

## Getting started

```bash
cd examples/company-website
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Structure

```
app/
  layout.tsx        # Root layout, fonts, navbar + footer
  page.tsx          # Home (Hero + Features + Pricing + FAQ + CTA)
  about/page.tsx    # About page
  contact/page.tsx  # Contact form (client component, simulated submit)
  content.ts        # All copy/data in one place
components/          # Navbar, Footer, Hero, Features, Pricing, FAQ, CTA
```

## Customising

- **Copy & pricing:** edit `app/content.ts`
- **Colors & fonts:** edit `tailwind.config.ts`
- **Contact form:** wire `handleSubmit` in `app/contact/page.tsx` to an API route or form service

> This is a static-friendly marketing site. The contact form simulates submission
> client-side — connect it to a real backend before going live.
