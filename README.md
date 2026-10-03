# Figma UI Implementation

A pixel-aligned, responsive recreation of a provided Figma design, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Pages

- **`/`** — Hero section with a horizontally draggable image gallery and a partners row
- **`/course`** — Course highlights section: an animated accordion-style card layout. Clicking a collapsed card expands it (width, color, and content transition) while the previously expanded card collapses into a side tab with rotated label text

## Tech stack

- Next.js (App Router), TypeScript
- Tailwind CSS
- Framer Motion (card expand/collapse, staggered icon animations)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- `/` — hero and image drag strip
- `/course` — course highlights accordion

## Notes

- Built as a take-home UI/UX assignment based on a provided Figma design.
- Exact colors, fonts, and spacing are approximated from design screenshots where Figma Dev Mode values weren't available; some values may be refined further.