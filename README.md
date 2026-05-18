# Winnacle Wealth — Marketing Site

A static, multi-page marketing site built from the Winnacle Wealth design
system (v2 handoff). The stacked six-page review prototype
(`winnacle-site/Winnacle Site v2.html`) has been split into six real,
cross-linked pages with the review scaffolding (side rail, page markers)
removed.

## Pages

| File | Route | Page |
|------|-------|------|
| `index.html` | `/` | Home |
| `justher.html` | `/justher` | JustHer® — for women in financial transition (dark / white-studio vocabulary) |
| `partners.html` | `/partners` | Partners — the team around the plan |
| `events.html` | `/events` | Events, MCC classes & the podcast |
| `resources.html` | `/resources` | Guides, tools, articles |
| `right-fit.html` | `/right-fit` | Schedule a Right Fit Call |

The top nav and footer are consistent across every page. The current page is
marked in the nav; the JustHer page carries `class="page--dark"` on `<body>`
so the nav inverts to the dark treatment. The tagline is integrated into the
top of the footer (no standalone banner).

## What v2 changed (from the design iterations)

- Full-color brick/couch hero with both founders + crest watermark (the
  "earned full-color moment")
- Section eyebrows cut; headlines lead
- Services shown as an editorial Plan / Invest / Protect ledger (no card grid)
- Pull quote uses the 4px navy heavy rule; tagline folded into the footer
- New brand photography set (brick portraits, white-studio Jessica, B&W
  editorial, caramel-couch, pampas); est. 2021; copy tightened

## Shared files

- `colors_and_type.css` — design-system token file (single source of truth).
- `site.css` — composition / component styles from v2, plus appended
  multi-page additions (mobile nav, `scroll-margin`, filter-defs helper).
- `site.js` — progressive enhancement only: Lucide icon init, the mobile nav
  toggle, and the Events category filter. Every page works without JS.
- `duotone-filter.svg` — reference copy of the brand duotone filter; its
  `<defs>` are also inlined into each page so the navy-duotone treatment
  works offline and when served.
- `assets/` — logos, crests, marks, team headshots, and the full brand
  photography set.
- `fonts/` — DM Serif Display (display) and Karla (subheads/body).

## Local preview

```
cd winnacle-site && python3 -m http.server 8000
# then visit http://localhost:8000
```

## Known placeholders (by design)

`photo-ph` blocks (GHL scheduler/map embeds, guide & podcast covers, partner
logos, persona images) and `href="#"` links (Register, downloads, podcast
platforms, disclosures) are intentional briefs from the prototype — wire them
to real embeds/assets at build/CMS time.
