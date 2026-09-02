# Portfolio — Tristan Bonardo Silalahi

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

A single-page personal portfolio that presents Tristan Bonardo Silalahi's
background, technical skills, projects, and leadership experience in one place,
with a public GitHub presence linked throughout.

The purpose of the portfolio is to serve as a professional, self-hosted
introduction — a stable link that can be shared with recruiters, collaborators,
and organizations, and that is kept accurate rather than exhaustive.

### Preview

_Screenshots will be added once the interface sections are implemented._

## About

Tristan Bonardo Silalahi is a third-year Informatics Engineering student at
**Universitas Padjadjaran**, concentrating in computer networks with artificial
intelligence as his minor, and currently **Head of the Cadre Department at
HIMATIF** (February 2026 – present). He is based in Sumedang, West Java,
Indonesia.

His hands-on work sits in machine learning and software development: building
small tools end to end, and leading student teams that ship real programs on a
deadline.

Section content is sourced from his CV and his own description of his work. No
biographical details are invented.

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router)  |
| Language   | [TypeScript 5](https://www.typescriptlang.org) |
| UI runtime | [React 19](https://react.dev)                  |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com)      |
| Fonts      | Anton & Archivo via `next/font`                |
| Linting    | ESLint 9 with `eslint-config-next`             |
| Formatting | Prettier with `prettier-plugin-tailwindcss`    |
| Hosting    | [Vercel](https://vercel.com) (planned)         |

## Features

Implemented so far:

- Next.js App Router project with TypeScript in strict mode
- Tailwind CSS 4 styling pipeline via PostCSS
- Self-hosted Anton and Archivo font loading through `next/font`
- Centralized site identity values in `lib/site.ts`
- ESLint and Prettier configured with npm scripts for both
- Design system with role-based color tokens, a modular type scale, and
  reusable UI primitives (see [Design System](#design-system))
- Light and dark palettes driven by `prefers-color-scheme`
- Reduced-motion support and a visible keyboard focus style
- Sticky page header with the name, section anchors, and a GitHub call to action
- Mobile section menu as a keyboard-accessible disclosure below `md`
- Skip-to-content link as the first focusable element on the page
- Hero section introducing Tristan's identity, with GitHub and project CTAs
- About section pairing a prose introduction with an at-a-glance detail panel

Planned features are tracked in [Development Progress](#development-progress).

## Design System

The visual direction is a printed comic page: true black ink on yellowed pulp
stock, content divided into bordered panels separated by gutters, halftone dots
as the only texture. Square corners throughout, hard unblurred shadows, no
gradients.

All tokens are declared in the Tailwind `@theme` block in `app/globals.css`.

### Color

Tokens are named by role rather than hue, so dark mode reassigns five variables
and every utility built on them follows.

| Token        | Light     | Dark      | Use                                        |
| ------------ | --------- | --------- | ------------------------------------------ |
| `ink`        | `#000000` | `#ece3cf` | Text, borders, halftone dots               |
| `paper`      | `#e9e0cc` | `#12100e` | Page stock                                 |
| `plate`      | `#f4eddb` | `#1c1916` | Raised panel fill                          |
| `brass`      | `#8a6a2c` | `#c79a4e` | Accents, borders, large text (3.8:1 light) |
| `brass-deep` | `#6f5522` | `#d8ab5e` | Accents at body size (5.3:1 light)         |

`brass` clears the 3:1 threshold for large text and UI borders but not the 4.5:1
body-text threshold; use `brass-deep` for accent text at body size.

### Typography

Two families with deliberately different jobs:

- **Anton** — ultra-condensed poster face, display sizes only, via the
  `font-display` utility.
- **Archivo** — variable grotesk, every line intended to be read.

The scale is roughly a 1.25 ratio through body sizes and widens at display
sizes, where display steps are fluid via `clamp()`.

| Token       | Size                           | Use                  |
| ----------- | ------------------------------ | -------------------- |
| `text-xs`   | 0.8125rem                      | Fine print           |
| `text-sm`   | 0.9375rem                      | Secondary labels     |
| `text-base` | 1.0625rem                      | Body copy            |
| `text-lg`   | 1.25rem                        | Emphasised body      |
| `text-xl`   | 1.5625rem                      | Lead paragraphs      |
| `text-2xl`  | 2rem                           | Panel headings       |
| `text-3xl`  | 2.625rem                       | Section headings     |
| `text-4xl`  | `clamp(2.75rem, 6vw, 4.25rem)` | Page-level statement |
| `text-5xl`  | `clamp(3.25rem, 11vw, 7.5rem)` | Name, once per page  |

Reading measure is capped near 62 characters.

### Spacing

Semantic names layered over the default 4px scale:

| Token     | Value                        | Use                                                |
| --------- | ---------------------------- | -------------------------------------------------- |
| `gutter`  | 1.25rem                      | Gap between panels, and page margin                |
| `panel`   | 1.75rem                      | Panel inner padding                                |
| `section` | `clamp(2.5rem, 6vw, 4.5rem)` | Vertical rhythm between sections                   |
| `header`  | 3.5rem                       | Sticky header height, and the anchor scroll offset |

`gutter` doubles as the page margin so panels align with the page edge.

### Breakpoints

Tailwind's defaults are kept, since they already line up with the widths the
project targets:

| Breakpoint | Min width      |
| ---------- | -------------- |
| _(base)_   | 375px and up   |
| `sm`       | 40rem / 640px  |
| `md`       | 48rem / 768px  |
| `lg`       | 64rem / 1024px |
| `xl`       | 80rem / 1280px |

### Primitives

| Component    | Purpose                                                         |
| ------------ | --------------------------------------------------------------- |
| `Container`  | Page-width constraint; padding matches the panel gutter         |
| `Panel`      | Comic panel — `plate`, `paper`, or `ink` tone; optional padding |
| `Section`    | Vertical rhythm plus the section heading and its rule           |
| `Button`     | `<button>` in `solid`, `outline`, or `quiet` variant            |
| `ButtonLink` | `<a>` styled as a control, for navigation and external links    |

Two custom utilities, `halftone` and `halftone-coarse`, apply the dot field.

### Animation

Motion answers a person's action and is never decoration. Controls model a
physical press: at rest they cast a 3px printed shadow, hover lifts them 2px off
the page and deepens the shadow to 5px, and pressing pushes them flat into the
shadow's place. The default transition is 120ms. `prefers-reduced-motion:
reduce` collapses all transitions and animations.

## Navigation

The portfolio is a single page, so navigation is a set of in-page anchors
rather than routes. `lib/nav.ts` declares the sections in page order and
records whether each one exists yet:

```ts
{ id: "projects", label: "Projects", ready: false }
```

Only sections marked `ready` are rendered in the header, the mobile menu, and
any call to action that targets them — the navigation therefore never contains
a link that scrolls nowhere while the page is still being built. Building a
section means adding it to the page and flipping its flag to `true`.

Until the projects section exists, the hero's project call to action points at
the GitHub repository list instead, so the control still works.

The section list hides below `md` with `max-md:hidden` — one utility stating
the intent — rather than `hidden md:block`, which sets a default and then
overrides it.

Anchor targets clear the sticky header via `scroll-padding-top` on the scroll
container, sized from the same `--spacing-header` token the header uses.

## Project Structure

```text
.
├── app/                  # Next.js App Router routes and layouts
│   ├── favicon.ico
│   ├── globals.css       # Tailwind entry point, design tokens, base styles
│   ├── layout.tsx        # Root layout: fonts, metadata, page shell
│   └── page.tsx          # Home page
├── components/
│   ├── sections/         # Page sections, in page order
│   │   ├── About.tsx     # Prose introduction and the detail panel
│   │   └── Hero.tsx      # Name, role, and the primary calls to action
│   ├── site/             # Page shell
│   │   ├── MobileNav.tsx # Section disclosure below `md` (Client Component)
│   │   └── SiteHeader.tsx# Sticky header
│   └── ui/               # Design system primitives
│       ├── Button.tsx    # Button and ButtonLink
│       ├── Container.tsx # Page-width constraint
│       ├── Panel.tsx     # Comic panel
│       └── Section.tsx   # Section rhythm and heading
├── lib/                  # Framework-agnostic helpers and shared data
│   ├── about.ts          # About-section prose and reference details
│   ├── cn.ts             # Class name joiner
│   ├── nav.ts            # Section list and readiness flags
│   └── site.ts           # Site name, description, GitHub identity
├── public/               # Static assets served from the site root
├── eslint.config.mjs     # ESLint flat config
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS pipeline (Tailwind CSS)
├── tsconfig.json         # TypeScript configuration, `@/*` path alias
├── .prettierrc.json      # Prettier configuration
└── AGENTS.md             # Next.js-generated guidance for AI coding agents
```

Sections are added to `components/sections/` as they are built, one per
development phase, and registered in `lib/nav.ts`.

## Getting Started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the development server                  |
| `npm run build`        | Create a production build                     |
| `npm run start`        | Serve the production build locally            |
| `npm run lint`         | Run ESLint                                    |
| `npm run lint:fix`     | Run ESLint and apply fixable corrections      |
| `npm run typecheck`    | Type-check the project without emitting files |
| `npm run format`       | Format the project with Prettier              |
| `npm run format:check` | Verify formatting without writing changes     |

## Environment Variables

The project currently requires **no environment variables**.

If any are introduced in a later phase, they will be documented here by name and
purpose only. Real secrets and API keys are never committed to this repository
or written into this README; `.env*` files are excluded via `.gitignore`.

## Deployment

The project is designed to deploy to [Vercel](https://vercel.com) with no custom
configuration:

1. Push the repository to GitHub.
2. Import the repository in the Vercel dashboard.
3. Vercel detects Next.js automatically — the default build command
   (`next build`) and output settings apply.
4. Add any environment variables in the Vercel project settings (none are
   required today).
5. Deploy. Subsequent pushes to the default branch trigger new deployments.

A production build can be verified locally first:

```bash
npm run build
npm run start
```

## Development Progress

- [x] Phase 1 — Project setup
- [x] Phase 2 — Design system
- [x] Phase 3 — Hero & navigation
- [x] Phase 4 — About section
- [ ] Phase 5 — Skills section
- [ ] Phase 6 — Projects section
- [ ] Phase 7 — Leadership & experience
- [ ] Phase 8 — GitHub integration
- [ ] Phase 9 — Contact section
- [ ] Phase 10 — Responsive & accessibility
- [ ] Phase 11 — SEO & performance
- [ ] Phase 12 — Final testing
- [ ] Phase 13 — Vercel deployment
