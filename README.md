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

## Skills

The skills section groups technical skills by what they are for — languages,
machine learning and data, tools, and foundations — with no proficiency bars or
ratings. Entries come from Tristan's CV, plus a few verified from his public
GitHub repositories: LightGBM, DuckDB, pytest, and GitHub Actions from
`KarhutlaGemastik2026`, and HTML and CSS from his frontend role on the
`Tugas-UAS-AI-kelompok-API` group project. Each entry's source is noted inline
in `lib/skills.ts`.

## Projects

The projects section leads with one featured project at full width, then lists
the rest in an unequal two-column grid. Every card is rendered by the same
`ProjectCard` component from data in `lib/projects.ts`, so adding a project is a
data change only.

Project content comes from the READMEs of Tristan's public repositories, and
every figure on a card appears in its linked repository. Team projects state
his part, taken from the team section of the project's own README. Each card
carries a category, its repository links, and a live demo link when one exists
— none of the projects is deployed yet.

Not shown yet: the face-spoof detection model from the Find IT competition,
which has no public repository, and the `KelompokSorting` C++ coursework, which
is left to the GitHub section.

## Leadership

The leadership section lists Tristan's roles at HIMATIF, the Informatics
Engineering Student Association at Universitas Padjadjaran, newest first, with
the current role at full width. A side panel gives the organization, the
orientation program the roles center on, and the soft skills listed on his CV.

Content comes from his CV, and role bullets keep its wording. Where the CV and
the original project specification differ, the CV is used: the department has
six people including Tristan, the orientation program is the Character Building
Season (CBS), and no attendance figure is claimed, since none is documented.

## GitHub

The GitHub section lists every public, non-fork repository on
`github.com/MFDOOMs`, read from the GitHub REST API, beside a panel with the
account's age, its most-used languages, and a profile link. Star and follower
counts are left out on purpose.

The request runs in a Server Component, never in the browser. Responses are
cached for an hour: the page is prerendered with them and rebuilt in the
background at most once an hour, so visitors never wait on GitHub and traffic
never spends its rate limit. Only public repositories are requested, and only
the fields the page shows are kept.

Every state is handled:

- **Loading** — there is no loading moment for a visitor to see. The data is
  fetched while the page is prerendered, and during the hourly refresh
  visitors keep getting the previous page until the new one is ready. A
  `<Suspense>` placeholder was tried and removed: in a prerendered page it
  ships the placeholder in place and moves the real list behind a script, so
  anything that doesn't run JavaScript would see only the placeholder.
- **Failure** — a GitHub outage, rate limit, or malformed response renders a
  short notice with a link to the profile instead of breaking the page, and the
  reason is logged on the server.
- **Empty** — an account with no public repositories gets a notice rather than
  an empty grid.

## Contact

The contact section closes the page with Tristan's email address at display
size, a button to send an email and one to copy the address, and a side panel
with his LinkedIn and GitHub profiles, location, and time zone.

Only channels he has provided are listed, and he chose to show his email
address publicly. The phone number on his CV is deliberately left off the page.
Contact details live in `lib/site.ts` beside the rest of the site's identity.

Copying uses the Clipboard API in a small Client Component. The result is
announced to screen readers, and if the browser refuses, the button says so
while the address stays selectable on the page.

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
- Skills section grouping technical skills by purpose, without proficiency
  ratings
- Project showcase with a featured project, reusable cards, categories, stated
  team roles, and repository links
- Leadership section tracing Tristan's HIMATIF roles, with the shared context
  and soft skills in a side panel
- GitHub section listing public repositories from the GitHub API, fetched on
  the server with hourly revalidation and loading, failure, and empty states
- Contact section with the email address, send and copy actions, and links to
  LinkedIn and GitHub

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
| `TagList`    | Wrapping row of bordered labels, for skills and project tech    |
| `CopyButton` | Copies a value to the clipboard and announces whether it worked |

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
{ id: "contact", label: "Contact", ready: true }
```

Only sections marked `ready` are rendered in the header, the mobile menu, and
any call to action that targets them — the navigation therefore never contains
a link that scrolls nowhere while the page is still being built. Building a
section means adding it to the page and flipping its flag to `true`. All six
sections are now built, so every flag is `true`.

Calls to action follow the same rule. The hero's project button pointed at the
GitHub repository list until the projects section existed, and now scrolls to
it.

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
│   ├── projects/         # Project showcase building blocks
│   │   └── ProjectCard.tsx # One project: story, evidence, stack, links
│   ├── sections/         # Page sections, in page order
│   │   ├── About.tsx     # Prose introduction and the detail panel
│   │   ├── Contact.tsx   # Email, send and copy actions, other channels
│   │   ├── GitHub.tsx    # Public repositories from the GitHub API
│   │   ├── Hero.tsx      # Name, role, and the primary calls to action
│   │   ├── Leadership.tsx # HIMATIF roles and the context they share
│   │   ├── Projects.tsx  # Featured project, then the rest
│   │   └── Skills.tsx    # Technical skills, grouped by purpose
│   ├── site/             # Page shell
│   │   ├── MobileNav.tsx # Section disclosure below `md` (Client Component)
│   │   └── SiteHeader.tsx# Sticky header
│   └── ui/               # Design system primitives
│       ├── Button.tsx    # Button and ButtonLink
│       ├── Container.tsx # Page-width constraint
│       ├── CopyButton.tsx # Copy to clipboard with an announced result (Client Component)
│       ├── Panel.tsx     # Comic panel
│       ├── Section.tsx   # Section rhythm and heading
│       └── TagList.tsx   # Row of bordered labels
├── lib/                  # Framework-agnostic helpers and shared data
│   ├── about.ts          # About-section prose and reference details
│   ├── cn.ts             # Class name joiner
│   ├── github.ts         # Server-side GitHub API client, cached hourly
│   ├── leadership.ts     # Roles, organization context, and soft skills
│   ├── nav.ts            # Section list and readiness flags
│   ├── projects.ts       # Project content, each figure from its repository
│   ├── site.ts           # Site identity: name, GitHub, email, LinkedIn, location
│   └── skills.ts         # Skill groups, each entry with its source
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

The site builds and runs with **no environment variables**. One is optional:

| Variable       | Required | Purpose                                                                                                                                          |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GITHUB_TOKEN` | No       | Authenticates the GitHub section's API requests, raising GitHub's rate limit from 60 to 5,000 requests an hour. Useful on shared build machines. |

Only public data is read, so a fine-grained token with read-only access to
public repositories is enough. The variable has no `NEXT_PUBLIC_` prefix, so
Next.js keeps it on the server and never bundles it into browser JavaScript.

Real secrets and API keys are never committed to this repository or written into
this README; `.env*` files are excluded via `.gitignore`.

## Deployment

The project is designed to deploy to [Vercel](https://vercel.com) with no custom
configuration:

1. Push the repository to GitHub.
2. Import the repository in the Vercel dashboard.
3. Vercel detects Next.js automatically — the default build command
   (`next build`) and output settings apply.
4. Optionally add `GITHUB_TOKEN` in the Vercel project settings (see
   [Environment Variables](#environment-variables)); nothing is required.
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
- [x] Phase 5 — Skills section
- [x] Phase 6 — Projects section
- [x] Phase 7 — Leadership & experience
- [x] Phase 8 — GitHub integration
- [x] Phase 9 — Contact section
- [ ] Phase 10 — Responsive & accessibility
- [ ] Phase 11 — SEO & performance
- [ ] Phase 12 — Final testing
- [ ] Phase 13 — Vercel deployment
