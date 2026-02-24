# Coding Rules

Hard standards for this project. No exceptions unless the user explicitly overrides.

## HTML

- Use semantic elements: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<blockquote>`
- No inline styles. No inline scripts. All styling via classes in styles.css, all behavior via main.js.
- Every page shares the same header, footer, newsletter modal, and contact modal markup. Keep them in sync — if you change the nav in one file, change it in all three.
- Every `<img>` must have an `alt` attribute. Decorative images get `alt=""`.
- Use `loading="lazy"` on images below the fold.
- Forms use `required` attribute for validation. No JavaScript validation unless unavoidable.

## CSS

- **Use custom properties.** All colors, fonts, and spacing tokens come from `:root`. Never hardcode a one-off hex value in a component rule. The only exceptions are scoped overrides inside `.page-home`, `.modal-panel`, or similarly isolated contexts.
- **No CSS frameworks.** No Tailwind, Bootstrap, or utility-class libraries.
- **No `!important`.** The one existing use in `.checkbox-row` is grandfathered. Don't add more.
- **No CSS nesting.** Keep selectors flat for maximum browser compatibility. Use class specificity instead.
- **Responsive design uses max-width media queries** at three breakpoints:
  - `@media (max-width: 1100px)` — tablet landscape
  - `@media (max-width: 920px)` — tablet portrait / mobile nav
  - `@media (max-width: 640px)` — phone
- **Use `clamp()` for fluid sizing.** Headings and section padding already use this pattern. Follow it.
- **Class naming:** Lowercase hyphenated (`.company-card`, `.hero-section`). Component-based, not utility-based. Use `is-` prefix for state classes (`.is-open`, `.is-active`, `.is-success`).
- **Page-specific overrides** go under the page body class (`.page-home .component`). Keep these to layout-only changes — colors belong in the base styles.
- **Respect `prefers-reduced-motion`.** The existing `@media (prefers-reduced-motion: reduce)` block disables all animations. Don't bypass it.

## JavaScript

- **Vanilla only.** No frameworks (React, Vue, Svelte). No npm packages. No build step.
- **Use the existing helpers:** `query(selector, root)` and `queryAll(selector, root)` in main.js. Don't use `document.querySelector` directly.
- **Data arrays live at the top of main.js.** Company data, testimonials, portfolio items — all as plain arrays of objects.
- **All scripts load with `defer`.** Don't add `async` or inline `<script>` blocks.
- **Event delegation preferred** over attaching listeners to many individual elements.
- **No global variables** beyond the data arrays and setup functions already in main.js.
- **Template literals for markup generation.** Use backtick strings, not string concatenation or innerHTML with variables (XSS risk). The existing `renderCompanies()` pattern using `document.createElement` is preferred for complex DOM — follow that pattern.

## Performance

- Preconnect to Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) — already done in `<head>`.
- Lazy-load images that aren't visible on initial viewport.
- Don't add external dependencies (CDN scripts, analytics, etc.) without user approval.
- Keep the CSS in one file. Keep the JS in one file. No code splitting needed for a 3-page static site.

## Accessibility

- All interactive elements must be keyboard-accessible (focusable, operable with Enter/Space).
- Use `aria-label` on icon-only buttons and links.
- Use `aria-expanded` on toggle buttons (nav, dropdown). Already implemented — maintain the pattern.
- Use `aria-hidden` and `role="dialog"` on modals. Already implemented — maintain the pattern.
- Use `focus-visible` outline (cyan tint) for keyboard navigation. Don't remove it.
- Color contrast: white text on blue (#1a21ff) passes WCAG AA. Maintain this or better.

## Git

- Never commit `.env`, `credentials.json`, `token.json`, or `.tmp/`.
- Commit messages in imperative mood: "Add company grid" not "Added company grid".
- Don't create branches unless asked. Work on the current branch.

## File Hygiene

- Don't create new files unless the task absolutely requires it.
- Don't create README, CONTRIBUTING, LICENSE, or other documentation files unless explicitly asked.
- Don't add comments to code you didn't change.
- Don't add TypeScript, linting configs, or tooling configs. This is a zero-config project.
