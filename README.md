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

Tristan Bonardo Silalahi is an Informatics Engineering student who currently
serves as **Head of the Cadre Department at HIMATIF** (February 2026 – present).

_This section is intentionally brief and will be expanded in Phase 4 with
information provided by the site owner. No biographical details are invented._

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router)  |
| Language   | [TypeScript 5](https://www.typescriptlang.org) |
| UI runtime | [React 19](https://react.dev)                  |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com)      |
| Fonts      | Geist Sans & Geist Mono via `next/font`        |
| Linting    | ESLint 9 with `eslint-config-next`             |
| Formatting | Prettier with `prettier-plugin-tailwindcss`    |
| Hosting    | [Vercel](https://vercel.com) (planned)         |

## Features

Implemented so far:

- Next.js App Router project with TypeScript in strict mode
- Tailwind CSS 4 styling pipeline via PostCSS
- Self-hosted Geist font loading through `next/font`
- Centralized site identity values in `lib/site.ts`
- ESLint and Prettier configured with npm scripts for both

Planned features are tracked in [Development Progress](#development-progress).

## Project Structure

```text
.
├── app/                  # Next.js App Router routes and layouts
│   ├── favicon.ico
│   ├── globals.css       # Tailwind entry point and CSS custom properties
│   ├── layout.tsx        # Root layout: fonts, metadata, page shell
│   └── page.tsx          # Home page
├── lib/                  # Framework-agnostic helpers and shared data
│   └── site.ts           # Site name, description, GitHub identity
├── public/               # Static assets served from the site root
├── eslint.config.mjs     # ESLint flat config
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS pipeline (Tailwind CSS)
├── tsconfig.json         # TypeScript configuration, `@/*` path alias
├── .prettierrc.json      # Prettier configuration
└── AGENTS.md             # Next.js-generated guidance for AI coding agents
```

Additional directories (`components/`, and any data modules) are introduced in
later phases as the sections that need them are built.

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
- [ ] Phase 2 — Design system
- [ ] Phase 3 — Hero & navigation
- [ ] Phase 4 — About section
- [ ] Phase 5 — Skills section
- [ ] Phase 6 — Projects section
- [ ] Phase 7 — Leadership & experience
- [ ] Phase 8 — GitHub integration
- [ ] Phase 9 — Contact section
- [ ] Phase 10 — Responsive & accessibility
- [ ] Phase 11 — SEO & performance
- [ ] Phase 12 — Final testing
- [ ] Phase 13 — Vercel deployment
