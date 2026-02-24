# Development Skills

Repeatable tasks for this project. Each skill describes what to do and which files to touch.

---

## content-update

**When:** Adding, removing, or editing companies, testimonials, team members, or portfolio items.

**How:**

- **Companies** (card grid on companies.html): Edit the `companies[]` array in `main.js`. Each entry needs `name`, `url`, `image` (background photo URL), and `logo` (logo image URL). The `renderCompanies()` function handles the DOM.

- **Testimonials** (slider on index.html): Edit the `testimonials[]` array in `main.js`. Each entry needs `image`, `quote`, `name`, `title`. The `setupTestimonials()` function handles rendering and auto-advance.

- **Portfolio marquee** (scrolling banner on index.html): Edit the `portfolioItems[]` array in `main.js`. Each entry needs `name`, `tagline`, `url`. The `renderPortfolioMarquee()` function doubles the array for infinite scroll effect.

- **Team members** (grid on about.html): Edit the `.team-grid` section directly in `about.html`. Each member is an `<article class="team-card">` with `<h3>` name and `<p>` title.

- **Stats/metrics**: Edit directly in the HTML. Home stats are in `.stats-grid` in `index.html`. About metrics are in `.metrics-grid` in `about.html`.

**Verify:** Open the affected page in a browser. Check that new entries render correctly at all 3 breakpoints (1100px, 920px, 640px).

---

## style-update

**When:** Changing colors, typography, spacing, or visual treatment of components.

**How:**

- **Brand colors:** Edit `:root` custom properties at the top of `styles.css`. All components reference these variables.

- **Component styles:** Find the component class in `styles.css` and edit in place. Components are ordered top-to-bottom matching the page flow: header → hero → process → marquee → testimonials → compare → criteria → CTA → companies → about sections → footer → forms → modals.

- **Page-specific layout:** Use `.page-home`, `.page-companies`, or `.page-about` scoped selectors. Only for layout differences — not colors.

- **Responsive adjustments:** Edit the `@media` blocks at the bottom of `styles.css`. Three breakpoints: 1100px, 920px, 640px.

**Verify:** Check all 3 pages at all 3 breakpoints. Modals should remain readable (white panels with dark text).

---

## page-scaffold

**When:** Adding a new page to the site (e.g., /investments, /contact, /blog).

**How:**

1. Copy the structure from an existing page (companies.html is the simplest).
2. Update `<title>`, `<body class="page-newname">`, and the `is-active` nav link.
3. Add a nav link in the `<nav class="site-nav">` of **all three** existing HTML files plus the new one.
4. Add page-specific styles under `.page-newname` in `styles.css` if needed.
5. Keep the shared header, footer, newsletter modal, and contact modal markup identical across all pages.

**Verify:** Navigation works from every page. New page renders correctly. Modals still function.

---

## responsive-check

**When:** After any CSS or HTML change.

**What to verify at each breakpoint:**

| Breakpoint | Key checks |
|-----------|------------|
| Desktop (>1100px) | Full grid layouts (3-col companies, 4-col metrics, 3-col compare). Hero side-by-side on non-home pages. Footer 4-column. |
| 1100px | Grids collapse: compare → 2-col, metrics → 2-col, footer → 2-col. About story sections stack. |
| 920px | Mobile nav activates (hamburger). Companies → 2-col. Criteria/principles/team → 2-col. Scout section stacks. |
| 640px | Everything single column. Footer stacks. Stats stack (on home). Testimonial panel simplifies. |

Also check:
- Modals are scrollable and don't overflow viewport
- Nav hamburger opens/closes correctly
- More dropdown works on mobile (static position, not absolute)

---

## deploy

**When:** Pushing the site live.

**How:** This is a static site with no build step. Deployment is just uploading files.

**Options:**
- **GitHub Pages:** Push to `main` branch, enable Pages in repo settings
- **Netlify:** Connect repo or drag-and-drop the project folder
- **Vercel:** Connect repo, framework preset = "Other"
- **Manual:** Upload `index.html`, `about.html`, `companies.html`, `assets/` folder to any static host

**No build command needed.** No output directory to configure. The root is the site.

---

## brand-swap

**When:** Replacing Tiny branding with Niedbala Companies content.

**Checklist:**
- [ ] Replace logo SVG (currently Tiny logo from CDN) with Niedbala logo — update `src` in header and footer `<img>` across all 3 HTML files
- [ ] Update `<title>` tags in all pages
- [ ] Update hero heading and body copy in `index.html`
- [ ] Update stat numbers in `index.html` `.stats-grid`
- [ ] Replace `companies[]` array data in `main.js` with real portfolio companies
- [ ] Replace `testimonials[]` array data or remove the section
- [ ] Replace `portfolioItems[]` array data or remove the marquee
- [ ] Update team members in `about.html`
- [ ] Update about page copy (origin story, principles)
- [ ] Update comparison section content or repurpose it
- [ ] Update criteria section for Niedbala's investment criteria
- [ ] Update footer copyright: "Tiny" → "Niedbala Companies"
- [ ] Replace all `cdn.prod.website-files.com` image URLs with self-hosted assets
- [ ] Add favicon
- [ ] Update meta description and Open Graph tags
