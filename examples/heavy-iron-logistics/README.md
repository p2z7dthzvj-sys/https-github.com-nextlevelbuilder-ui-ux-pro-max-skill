# Heavy Iron Logistics — Website (Next.js + Tailwind)

A stunning, dark-industrial marketing site for **Heavy Iron Logistics** — a specialized
heavy-haul and freight brokerage based in Mission, TX (operating under Trelzo LLC).

Design decisions were generated with the
[Antigravity Kit / ui-ux-pro-max](../../README.md) design intelligence toolkit.

## Design spec (sourced from ui-ux-pro-max)

| Decision | Value | Domain query |
|----------|-------|--------------|
| Stack | Next.js App Router + Tailwind | `--stack nextjs` |
| Palette | Construction/Architecture — steel slate + safety orange `#EA580C` (dark theme) | `--domain color` |
| Fonts | Bebas Neue + Source Sans 3 ("Bold Statement") | `--domain typography` |
| Sections | Hero → Services → Fleet → Coverage → Process → FAQ → CTA | `--domain landing` |

## Real company content baked in

- HQ: 2005 E Griffin Pkwy, Ste A, Mission, TX 78572 · +1 956-522-0382
- FMCSA authorized: USDOT 2541334 · MC-884820
- Cross-border holding yard: Hidalgo, TX
- Services: construction equipment, mining & oilfield gear, industrial cranes
- Fleet: RGN trailers, lowboys & drop decks, standard flatbeds

All copy lives in `app/content.ts` — edit it in one place.

## Getting started

```bash
cd examples/heavy-iron-logistics
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Structure

```
app/
  layout.tsx         # Fonts (Bebas Neue + Source Sans 3), navbar + footer
  page.tsx           # Home (Hero + Services + Fleet + Coverage + Process + FAQ + CTA)
  services/page.tsx  # Services & equipment detail
  contact/page.tsx   # Quote request form (client component, simulated submit)
  content.ts         # All copy/data
components/           # Navbar, Footer, Logo, Hero, Services, Fleet, Coverage, Process, FAQ, CTA
```

> The quote form simulates submission client-side. Wire `handleSubmit` in
> `app/contact/page.tsx` to a real API route, dispatch inbox, or form service before launch.
