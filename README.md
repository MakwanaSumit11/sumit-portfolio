# Sumit Makwana — Portfolio

A premium, animated developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Project structure

```
src/
  components/   Reusable UI: Navbar, buttons, cards, cursor glow, loading screen...
  sections/     One file per page section (Hero, About, Skills, Projects, ...)
  context/      ThemeContext (dark/light mode, persisted to localStorage)
  hooks/        useScrollProgress, useActiveSection, usePointer
  data/         Editable content: skills.js, projects.js, experience.js, ...
  index.css     Design tokens (colors, fonts) via Tailwind v4 @theme + globals
public/
  favicon.svg   "SM" monogram favicon
  resume.pdf    Placeholder resume — replace with your real one
```

## Things to personalize before deploying

- **`public/resume.pdf`** — replace with your real resume (keep the filename, or update the
  download links in `src/components/Navbar.jsx` and `src/sections/Hero.jsx`).
- **Contact links & social handles** — `src/sections/Contact.jsx` and
  `src/components/Footer.jsx` (email, GitHub, LinkedIn are currently placeholders).
- **Project screenshots** — `src/components/ProjectCard.jsx` currently renders a gradient
  placeholder where a screenshot would go. Add real images to `src/assets/` and swap in an
  `<img>` there.
- **Contact form submission** — `src/sections/Contact.jsx` currently simulates a send with a
  timeout. Wire the `handleSubmit` function to a real service (Formspree, EmailJS, or your own
  API route) before relying on it.
- **Content** — everything else (bio, skill list, project descriptions, experience,
  certificates, achievements) lives in `src/data/*.js` and is safe to edit directly.
- **SEO** — update the Open Graph image URL and canonical domain in `index.html` once deployed.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-first config via `@theme`, see `src/index.css`)
- Framer Motion for animation
- react-icons for iconography

## Deploying

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Build command
`npm run build`, output directory `dist`.
