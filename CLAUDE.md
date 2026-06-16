# Winnacle Wealth — Site Guide

A 7-page static marketing site (plus a few link-in-bio vcard pages). Plain HTML/CSS, no build step. Deploys via **GitHub Pages** from `main` → **winnaclewealth.com**. To publish: commit + push to `main` (live in ~1–2 min; hard-refresh to dodge cache).

The design system already exists — **use it, don't reinvent it.** Tokens live in `colors_and_type.css`; components live in `site.css`. Most "new" work should be assembling existing classes.

---

## Design rules (do NOT break these)

1. **No all-caps / uppercase treatment.** No `text-transform: uppercase` and no SHOUTING copy. Acronyms (RSU, ESPP, AMT) and the CFP® mark / legal trademark text are fine. (Two grandfathered exceptions already in `site.css`: the footer `.foot h5` labels and `.photo-stamp` — leave them, don't add new uppercase.)
2. **No eyebrows.** Never put a small kicker label above a heading. `.kicker` exists in the CSS but is unused — do not use it. Sections open with `<h2>` → `<hr class="rule-gold">` → `<p class="lede">`.
3. **No em dashes (—).** Use commas, colons, or periods. One or two on a whole page max.
4. **Plain, accessible language.** Audience skews blue-collar. Keep body copy jargon-free (push detail into guides/PDFs). Don't "try too hard" (no clever rhetorical flourishes), and no fear-mongering.
5. **Stay brand-tight.** Use existing classes and tokens. Don't invent new font sizes, one-off classes, or arbitrary spacing. Before finishing a section, grep it for: em dashes, `text-transform`, `.kicker`, and any class not defined in `site.css`/`colors_and_type.css`.

---

## Page skeleton

```html
<!doctype html><html lang="en"><head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>…</title><meta name="description" content="…">
  <link rel="icon" type="image/png" href="assets/favicon.png">
  <link rel="preload" href="fonts/Karla-VariableFont_wght.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="preload" href="fonts/DMSerifDisplay-Regular.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="colors_and_type.css"><link rel="stylesheet" href="site.css">
  <script src="site.js" defer></script>
</head><body>
  <svg class="ww-filter-defs" …>…duotone filter defs…</svg>   <!-- required for .photo--duotone -->
  <a class="util-bar" href="…">…</a>                          <!-- optional promo banner, above nav -->
  <nav class="topnav">…</nav>
  <section class="sec">…</section>                            <!-- alternating bands -->
  <footer class="foot">…</footer>
</body></html>
```

- **Links are extensionless + relative:** `href="events"`, `href="right-fit"`, `href="spacex"` (not `.html`, not absolute).
- **Fonts** are self-hosted: Karla (body), DM Serif Display (headings). Not Google Fonts.

---

## Type

- `h1`–`h3` render in **DM Serif Display** (headings). `h4` is **Karla SemiBold** (a subhead). Don't override sizes — use the elements.
- `.lede` — the intro paragraph under a section heading.
- `.body-sm` — small text. `.muted` — dimmed. `.attrib` — quote attribution.
- Headings are sentence/title case **with a period** (e.g. "What to Decide Before December."). No eyebrows above them.

## Sections & bands

`<section class="sec">` = 96px vertical padding. Background bands (pick to alternate; **never two of the same touching**):

| class | look |
|---|---|
| `.sec` (none) | cream page bg |
| `.sec.band-tint` | pale navy wash |
| `.sec.band-gold` | pale gold wash |
| `.sec.band-dark` | navy, light text |
| `.sec.band-deep` | deep navy, light text |

Inside: `<div class="wrap">` (or `.wrap-narrow`) holds content. Centered CTA bands use `<div class="wrap center" style="padding: 24px 0;">`.

```html
<section class="sec band-tint">
  <div class="wrap">
    <h2>Heading.</h2>
    <hr class="rule-gold" />
    <p class="lede">Intro sentence.</p>
    <div class="cols-3 mt-32"> …tiles… </div>
  </div>
</section>
```

## Grids

`.cols-2`, `.cols-3`, `.cols-4` (auto-stack to 1 col on mobile), `.cols-2-flip` (1fr/1.4fr), `.cols-hero` (1.3fr/1fr). Gap is built in.

## Tiles & cards

- `.tile` — lightweight cell: `<h4>` + `<p>`. Use inside `.cols-*`.
- `.card` — raised surface (variants: `.card--cream`, `.card--inset`, `.card--link`). Featured-item pattern (homepage/events):

```html
<div class="card" style="padding: 36px;">
  <h3>Title</h3><hr class="rule-gold rule-gold--sm" /><p>…</p>
  <hr class="rule-soft" />
  <div class="flex-between">
    <p class="body-sm" style="margin:0;"><strong>Free</strong> &nbsp;·&nbsp; In-person</p>
    <span class="btn btn--soon" title="…"><svg …clock…/> Registration opens soon</span>
  </div>
</div>
```

## Buttons

`.btn` + a variant. Put the arrow as `<span class="arrow">→</span>`.

| variant | when |
|---|---|
| `.btn--navy` | primary on **light** backgrounds |
| `.btn--gold` | primary on **dark** backgrounds |
| `.btn--ghost` | secondary on light |
| `.btn--ghost-light` | secondary on dark |
| `.btn--cream` | on dark, filled cream |
| `.btn--full` | full-width (forms/cards) |
| `.btn--soon` | disabled "coming soon" pill (clock icon, not a link) |

```html
<a href="right-fit" class="btn btn--navy">Schedule a Right Fit Call <span class="arrow">→</span></a>
```

## Heroes

Two patterns — mirror them, don't customize.

**Full-bleed image hero** (`partners`, `resources`, `right-fit`, `spacex`): plain `photo-band`, no extra CSS, no inline max-widths.
```html
<header class="sec photo-band photo-band--tall">
  <img fetchpriority="high" class="photo-band-bg" src="assets/…" alt="…" />
  <div class="photo-band-scrim"></div>
  <div class="wrap">
    <h1>Headline.</h1>
    <hr class="rule-gold" />
    <p class="lede">…</p>
    <!-- optional: <div class="hero-actions">…buttons…</div> -->
  </div>
</header>
```

**Split hero** (`index`): `.hero-split` → `.hero-split-inner` → `.hero-split-copy` (h1/rule/lede/`.hero-actions`) + `.hero-split-photo` (img + `.photo-stamp`).

## Quotes

- `<h2 class="pull">…</h2>` — big serif pull-quote, designed for **dark** bands.
- `.brand-quote-block` — quote with attribution on a light section (`.brand-quote` + `.brand-quote-attrib`).

## Other components

- **Stats:** `.stats` → `.stat` → `.n` (number) + `.l` (label).
- **Event row:** `.event-row` → date block (`.date`/`.month`) / title+`.meta-line` / `.btn--soon`. (Note `.month` renders uppercase — prefer the `.card` featured pattern above if avoiding caps.)
- **Photos:** `.photo` (+ `.photo--full`, `.photo--fill`, `.photo--duotone`); set ratio inline e.g. `style="aspect-ratio: 4/3;"`. Portraits crop better at `4/5` + `object-position: center top`. Duotone needs the SVG filter defs in `<body>`.
- **Rules:** `<hr class="rule-gold">` (+ `.rule-gold--sm`), `<hr class="rule-soft">`.
- **Spacing utilities:** `.mt-8/16/24/32/48`, `.mb-8/16/24`. Use these, not arbitrary margins.
- **Lists:** plain `<ul>`. No custom checklist/eyebrow components.

## Dark nav + banner

- **Dark nav:** add `class="page--dark"` to `<body>` (dark navy nav, gold CTA, cream links) and use the white logo `assets/logo-horz-white-gold.png`. Light nav uses `assets/logo-horz-navy-gold.png`.
- **Banner (`.util-bar`):** a slim gold promo strip; place `<a class="util-bar" href="…">…</a>` immediately before `<nav class="topnav">`. On mobile, wrap an inline separator in `<span class="util-bar-sep">` so a bold phrase can drop to its own line. Currently sitewide, linking to `/spacex`.

## Footer

`<footer class="foot">` → `.foot-tagline` + `.wrap` (logo/address, Explore links, Disclosures) + `.foot-bottom` (RIA/CFP legal text). Copy it from any existing page.

---

## Tokens (in `colors_and_type.css`)

Reference via `var(--…)`; never hard-code hex/px that a token covers.

- **Color:** `--ww-navy`, `--ww-navy-deep`, `--ww-gold`, `--ww-teal`, `--ww-cream`, tints (`--ww-navy-50/100`, `--ww-gold-50/100`), neutrals (`--ww-graphite/stone/fog/white`), gradients (`--ww-gradient-gold/navy`). Semantic: `--fg1/2/3`, `--bg-page/surface`, `--border-soft/strong`, `--focus-ring`.
- **Type:** families `--ff-display/body/mono`; sizes `--fs-12 … --fs-96`; weights `--fw-body/subhead/strong`; line-heights `--lh-tight/snug/base/loose`.
- **Space/radius/shadow/motion:** `--space-1…10`, `--radius-sm/md/lg/xl/pill`, `--shadow-1…4`, `--dur-fast/base/slow`, `--ease-standard/emphasized`.

---

## SpaceX page note

`spacex.html` is a campaign landing page on the `page--dark` nav + gold banner. Its only page-scoped CSS is the guide popup (`.guide-pop`) and two small mobile spacing tweaks. The guide PDF + hero + cover live in `assets/` (`spacex*.jpg/.pdf`). "Book a Call" → `right-fit` (swap for a dedicated link if one is provided).
