# Heavy Iron Logistics — Landing Page

Single-file, bilingual (EN/ES) landing page for Heavy Iron Logistics (Trelzo LLC),
Mission, TX. Built with Tailwind CSS, pre-compiled and inlined — no build step,
no CDN dependency. Deploy `index.html` to any static host (GitHub Pages, Netlify,
Cloudflare Pages, S3, shared hosting).

## Sections

Hero · trust band · services (construction / mining & oilfield / cranes) ·
fleet showcase (RGN, lowboy, drop deck, flatbed) · cross-border coverage map ·
FMCSA credentials (USDOT 2541334 · MC-884820) · quote request form ·
contact/support · footer.

## Customizing

### Swap in real equipment photos
Each fleet card has a marked photo slot. Find the `data-photo-slot` divs and
replace their contents with an image:

```html
<div class="relative aspect-[16/9] ..." data-photo-slot="rgn">
  <img src="photos/rgn.jpg" alt="RGN trailer loading an excavator" class="w-full h-full object-cover">
</div>
```

Also remove the `border-b-2 border-dashed border-ink-300` classes once a real
photo is in place (the dashed border marks the slot as a placeholder).

### Receive quote form submissions
The form currently shows an on-page confirmation only. To receive submissions,
point it at a form backend (Formspree, Basin, Netlify Forms, or your own
endpoint) and remove the demo submit handler at the bottom of `index.html`
(marked with a comment).

### Language toggle
English text lives in the markup; Spanish lives in `data-es` attributes
(`data-es-placeholder` for inputs). Edit both when changing copy. The chosen
language persists in `localStorage`.

### Restyling (regenerating the Tailwind CSS)
The compiled CSS is inlined in the first `<style>` block. If you add new
Tailwind classes, regenerate with the Tailwind v3 CLI:

```bash
npx tailwindcss@3 -c tailwind.config.js -i input.css -o compiled.css --minify --content index.html
```

using a config with the custom `ink`/`iron` color scales and `heading`/`body`
font families defined in this page (see the color values in the inlined CSS),
then replace the contents of the first `<style>` block with the output.
