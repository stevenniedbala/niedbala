# Niedbala Companies

Personal holding company website. Built as a static site with no frameworks, no build tools, no dependencies.

## Stack

- HTML5, CSS3 (custom properties), vanilla JavaScript
- Google Fonts: Manrope (sans-serif)
- No package.json, no npm, no bundler — just files served directly

## Architecture

Three pages, one stylesheet, one script:

```
index.html          Home — hero, stats, process, testimonials, comparison, criteria, CTA
companies.html      Companies — grid of portfolio company cards, scout section
about.html          About — origin story, principles, metrics, team grid
assets/css/styles.css   All styles (design tokens in :root, components, page overrides, responsive)
assets/js/main.js       All behavior (data arrays, nav, modals, forms, marquee, testimonial slider, company grid renderer)
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F3EFE6` | Page background (Bone) |
| `--ink` | `#4A1E22` | Primary text (Oxblood) |
| `--muted` | `#7A5A5D` | Secondary text |
| `--line` | `rgba(74, 30, 34, 0.12)` | Borders, dividers |
| `--accent` | `#B08D57` | CTA buttons, highlights (Muted Brass) |
| `--surface` | `#ffffff` | White panels (cards, testimonial panel) |
| `--oxblood` | `#4A1E22` | Primary authority color |
| `--bone` | `#F3EFE6` | Warm off-white background |
| `--brass` | `#B08D57` | Muted brass accent |

Font: Manrope at weights 400-800. Headings use weight 800, letter-spacing -0.02em.

Responsive breakpoints: 1100px, 920px, 640px (desktop-first, using max-width queries).

## Data Model

All dynamic content lives as JavaScript arrays at the top of `main.js`:

- `portfolioItems[]` — name, tagline, url — feeds the marquee on Home
- `testimonials[]` — image, quote, name, title — feeds the testimonial slider on Home
- `companies[]` — name, url, image, logo — feeds the company card grid on Companies page

Team members and principles are hardcoded in `about.html` as static markup.

## Key Patterns

**Page-specific overrides:** Each page has a body class (`page-home`, `page-companies`, `page-about`). The Home page uses `.page-home` scoped rules for layout-only overrides (centered hero, testimonial grid with side images, hidden family section). Color/theme is global.

**Modals:** Newsletter and Contact modals are in every HTML file. Opened via `.newsletter-trigger` / `.contact-trigger` click handlers. Closed via `[data-modal-close]` or Escape key.

**Forms:** All forms use `.js-fake-submit` class — they prevent default submission and show a success message from `data-success` attribute. No backend.

**Images:** Portfolio logos and backgrounds come from Tiny's CDN (`cdn.prod.website-files.com`). These will need to be replaced with Niedbala Companies assets.

## Workflow

1. **Read before editing.** Always read a file before modifying it.
2. **Test all pages.** Changes to styles.css or main.js affect all 3 pages — verify each one.
3. **Test all breakpoints.** Check at 1100px, 920px, and 640px widths.
4. **Prefer editing over creating.** Don't add files unless absolutely necessary.
5. **No overengineering.** This is a static site. Keep it simple.

## What Needs to Change (Tiny → Niedbala Companies)

This site is currently a Tiny.com replica. The transformation roadmap:

- [ ] Replace all Tiny branding (logo SVG, page titles, copyright text)
- [ ] Replace company data in `main.js` with Niedbala portfolio companies
- [ ] Replace testimonial data with Niedbala testimonials (or remove section)
- [ ] Update hero copy, stats, process section, comparison section, criteria
- [ ] Replace CDN image URLs with self-hosted assets
- [ ] Update meta tags (title, description, Open Graph)
- [ ] Add favicon
- [ ] Update footer links and contact information
- [ ] Consider adding/removing pages as needed for the holding company structure
