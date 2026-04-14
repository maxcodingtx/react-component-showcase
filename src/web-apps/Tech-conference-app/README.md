## Tech-conference-app

A mock tech conference landing page built with React, TypeScript, and Tailwind CSS v4 inside a Vite environment. This project is **design and CSS focused** — the primary goal was to create a polished, dark/techy aesthetic using modern Tailwind utility patterns.

### Stack

- **React 19** + TypeScript
- **Tailwind CSS v4** (Vite-native, no config file)
- **Motion** (Framer Motion v12) — scroll-triggered animations, stagger effects, hover/tap interactions
- **Lucide React** — iconography
- **Vite** — bundler & dev server

### Design highlights

- Dark theme with a cyan accent palette throughout
- Frosted glass cards (`backdrop-blur`, `bg-white/5`, `border-white/10`)
- Ambient glow blobs and gradient text on key headings
- Consistent `max-w-5xl` centred layout across all sections
- Motion stagger animations on all grid sections (viewport-triggered, runs once)
- Grayscale-to-colour sponsor logo strip on hover
- Fully responsive — mobile-first, adapts at `md` breakpoint

### Sections

| Component     | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `Hero`        | Full-viewport, animated entrance with gradient heading and glowing CTA    |
| `Sponsors`    | Horizontal logo strip with grayscale + opacity hover reveal               |
| `Information` | Two-column card grid (Venue & Tickets / Event Features) with lucide icons |
| `Speakers`    | Speaker cards with avatar glow, topic badge, and social links             |
| `Footer`      | Three-column layout — brand, nav links, social icons                      |
