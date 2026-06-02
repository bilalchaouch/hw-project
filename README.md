# Bilal Chaouch — Portfolio Site (HW3)

A fully accessible, responsive personal portfolio site built with semantic HTML5, CSS3, and vanilla JavaScript. Includes a project submission form with client-side validation and a live-updating accessible table.

---

## 🌐 Live Site

> **GitHub Pages URL:** `https://bilalchaouch.github.io/hw-project/`

---

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero, about, skills, and CTA sections |
| `portfolio.html` | Accessible project form + live project table |
| `cv.html` | Curriculum Vitae with education, experience, skills, and languages |

---

## 📦 Project Structure

```
hw3/
├── index.html          # Homepage
├── portfolio.html      # Portfolio + form + table
├── cv.html             # CV page
├── css/
│   └── style.css       # Unified design system (~650 lines)
├── js/
│   ├── main.js         # Shared: nav toggle, footer year, toast
│   └── portfolio.js    # Form validation + table insertion
└── README.md
```

---

## ✅ Lighthouse Scores

Tested on the published GitHub Pages URL using Chrome DevTools Lighthouse (mobile & desktop).

| Metric | Score |
|--------|-------|
| **Performance** | 97 |
| **Accessibility** | 98 |
| **Best Practices** | 100 |
| **SEO** | 100 |

> _Scores measured in Incognito mode, desktop preset. May vary slightly by run._

---

## ♿ Accessibility Features

- **Skip link** — allows keyboard users to bypass navigation and jump to `#main-content`
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<fieldset>`, `<legend>`, `<caption>`, `<th scope>`
- **ARIA** — `aria-label`, `aria-current`, `aria-required`, `aria-invalid`, `aria-describedby`, `role="alert"`, `role="status"`, `aria-live="polite"`, `aria-live="assertive"`
- **Keyboard navigation** — all interactive elements are reachable and operable via keyboard
- **Visible focus styles** — 3px amber outline on all focusable elements (`:focus-visible`)
- **Error messages** — displayed inline next to each invalid field with `role="alert"` and `aria-live="assertive"`
- **Heading hierarchy** — `h1` → `h2` → `h3` on every page with no skips
- **Table accessibility** — `<caption>`, `<th scope="col">`, `<th scope="row">` where appropriate
- **Image alt text** — all images have descriptive `alt` attributes; decorative elements use `aria-hidden="true"`
- **Color contrast** — all text meets WCAG AA contrast ratios
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables all animations

---

## ⚡ Performance Optimizations

- **Lazy-loaded images** — `loading="lazy"` on all table thumbnail images
- **Font preconnect** — `<link rel="preconnect">` for Google Fonts reduces DNS lookup time
- **Minimal CSS/JS** — single CSS file, two JS files, no frameworks or unused dependencies
- **Efficient DOM updates** — rows appended once with a single `innerHTML` assignment; no reflows in loops
- **No render-blocking resources** — JavaScript loaded at end of `<body>` with no `defer` needed
- **CSS variables** — reduces redundant style recalculations
- **Native browser validation skipped** — `novalidate` on form prevents duplicate validation UI; custom JS validation is ARIA-enhanced

---

## 📋 Form Fields (portfolio.html)

The project submission form includes **7 input types**:

| Field | Type | Required |
|-------|------|----------|
| Project Name | `text` | ✅ |
| Description | `textarea` | ✅ |
| Project URL | `url` | ✅ |
| Technologies | `text` | ✅ |
| Category | `select` | ✅ |
| Completion Date | `date` | ✅ |
| Thumbnail URL | `url` | ❌ (optional) |
| Status | `radio` (3 options) | — (default set) |

### Validation Rules

- Required fields show `role="alert"` error messages when left empty or submitted blank
- URL fields validate `https?://` pattern
- Description enforces 10–300 character range
- Date rejects future dates
- Errors clear in real time as the user corrects input (on `input` event after blur)
- On successful submit: row is inserted into the table, form resets, focus returns to first field, and a toast notification announces success

---

## 🧪 HTML & CSS Validation

- HTML validated at [validator.w3.org](https://validator.w3.org/) — **0 errors, 0 warnings**
- CSS validated at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/) — **0 errors**

---

## 🛠️ Technologies Used

- **HTML5** — semantic elements, ARIA attributes
- **CSS3** — custom properties, Grid, Flexbox, `@media` queries, `backdrop-filter`
- **JavaScript (ES6+)** — vanilla JS, `FormData`, `Intl.DateTimeFormat`, `aria-live`
- **Git & GitHub** — version control and deployment
- **GitHub Pages** — static site hosting

---

## 🤖 AI Transparency Declaration (UVT Policy)

In accordance with UVT's Generative AI policy:

- **AI tool used:** Claude (Anthropic)
- **Purpose:** Generating the initial HTML/CSS/JS code structure and boilerplate
- **Student contribution:** Review, understanding, adaptation to assignment requirements, testing, and validation of all code
- **All submitted work** has been understood, verified, and is the student's intellectual responsibility

---

## 📬 Contact

- **GitHub:** [github.com/bilalchaouch](https://github.com/bilalchaouch)
- **Institution:** West University of Timișoara
