# Development Workflow & Progress Tracking

The project must be developed incrementally rather than being built entirely in one pass.

The goal is to maintain a clean development history where each major feature is implemented, tested, reviewed, and committed separately.

---

## README.md

Create a comprehensive `README.md` in the repository root.

The README should include:

### Project Overview

- Project name
- Short description
- Purpose of the portfolio
- Screenshot or preview section when available

### About

Brief information about Tristan Bonardo Silalahi.

### Tech Stack

List the technologies actually used in the project.

### Features

List the major features implemented.

### Project Structure

Explain the important directories and files.

### Getting Started

Provide instructions for running the project locally.

Example:

```bash
npm install
npm run dev
```

### Environment Variables

Document required environment variables if any are introduced.

Never place actual secrets or API keys in the README.

### Deployment

Explain how the project can be deployed to Vercel.

### Development Progress

Maintain a progress checklist:

```markdown
## Development Progress

- [ ] Phase 1 — Project setup
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
```

Update this checklist whenever a phase is completed.

---

# Incremental Development

Do NOT implement the entire project in one operation.

Work through the following phases sequentially.

---

## Phase 1 — Project Setup

Tasks:

- Initialize the Next.js project.
- Configure TypeScript.
- Configure Tailwind CSS.
- Establish the project structure.
- Configure linting.
- Configure formatting if appropriate.
- Create the initial README.
- Verify the project runs successfully.

Acceptance criteria:

- Development server starts successfully.
- Production build succeeds.
- No initial console errors.

When complete:

1. Update `README.md`.
2. Mark Phase 1 as complete.
3. Show me a concise summary of what changed.
4. Show me the files created/modified.
5. Show me the tests/build commands executed.
6. Create a Git commit.

Commit format:

```text
chore: initialize portfolio project
```

Then STOP and wait for the next instruction.

---

## Phase 2 — Design System

Tasks:

- Establish typography.
- Define spacing conventions.
- Define responsive breakpoints.
- Establish reusable UI primitives.
- Establish color system.
- Establish button styles.
- Establish card styles.
- Establish animation conventions.

Acceptance criteria:

- Design system is consistent.
- Components are reusable.
- Desktop and mobile foundations are established.

When complete:

1. Test the application.
2. Update README progress.
3. Summarize changes.
4. Create a Git commit.

Commit format:

```text
style: establish portfolio design system
```

Then STOP.

---

## Phase 3 — Hero & Navigation

Tasks:

- Build navigation.
- Build hero section.
- Introduce Tristan's identity.
- Add GitHub CTA.
- Add project CTA.
- Implement responsive behavior.

Acceptance criteria:

- Navigation works.
- All links work.
- Hero is responsive.
- No console errors.

Commit:

```text
feat: add hero and navigation
```

Update README and STOP.

---

## Phase 4 — About

Build the About section using the provided personal information.

Commit:

```text
feat: add about section
```

Update README and STOP.

---

## Phase 5 — Skills

Build the technical skills section.

Only include skills explicitly provided in the project specification or verified from the repository.

Do not fabricate experience or proficiency.

Commit:

```text
feat: add technical skills section
```

Update README and STOP.

---

## Phase 6 — Projects

Build the project showcase.

Requirements:

- Reusable project card.
- Project data separated from UI.
- GitHub links.
- Live demo links when available.
- Project categories.
- Responsive layout.

Do not fabricate project information.

Commit:

```text
feat: add project showcase
```

Update README and STOP.

---

## Phase 7 — Leadership & Experience

Build the leadership and experience section.

Include:

**Head of Cadre Department — HIMATIF**

**February 2026 — Present**

Impact:

- Leads a team of 5 people.
- Contributes to conceptualizing the Informatics Engineering department's "Ospek Jurusan".
- Helps train and prepare 100+ new Informatics Engineering students.
- Focuses on soft skills and hard skills relevant to university life.

Commit:

```text
feat: add leadership and experience section
```

Update README and STOP.

---

## Phase 8 — GitHub Integration

Implement the GitHub section using:

**GitHub username:** `MFDOOMs`

Repository:

`https://github.com/MFDOOMs`

If GitHub API integration is used:

- Handle API failures.
- Handle loading states.
- Handle empty states.
- Do not expose private information.
- Do not expose API tokens client-side.

Commit:

```text
feat: add github integration
```

Update README and STOP.

---

## Phase 9 — Contact

Build the contact section.

Use placeholders for information that has not been provided.

Do NOT invent:

- Email addresses
- LinkedIn URLs
- Social media accounts

Commit:

```text
feat: add contact section
```

Update README and STOP.

---

## Phase 10 — Responsive & Accessibility

Perform a dedicated quality pass.

Test:

- 1440px desktop
- 1024px laptop
- 768px tablet
- 375px mobile

Check:

- Navigation
- Typography
- Spacing
- Images
- Buttons
- Links
- Keyboard navigation
- Focus states
- Semantic HTML
- Color contrast
- Screen-reader considerations

Fix all issues found.

Commit:

```text
fix: improve responsive design and accessibility
```

Update README and STOP.

---

## Phase 11 — SEO & Performance

Implement:

- Page metadata
- Open Graph metadata
- Favicon
- Proper headings
- SEO description
- Image optimization
- Performance improvements

Verify the production build.

Commit:

```text
feat: add seo and performance optimizations
```

Update README and STOP.

---

## Phase 12 — Final Testing

Perform a complete project audit.

Check:

### Functionality

- Navigation
- Buttons
- Links
- GitHub integration
- Responsive behavior

### Code Quality

- TypeScript errors
- Lint errors
- Unused code
- Unnecessary dependencies
- Component structure

### Performance

- Image optimization
- Bundle size
- Loading behavior

### Accessibility

- Keyboard navigation
- Semantic structure
- Contrast
- Focus states

### Build

Run the production build.

Fix every issue that can reasonably be fixed.

Commit:

```text
chore: finalize portfolio quality checks
```

Update README and STOP.

---

## Phase 13 — Vercel Deployment

Prepare the project for Vercel deployment.

Verify:

- Production build succeeds.
- Environment variables are documented.
- No secrets are committed.
- GitHub repository is clean.
- README is complete.
- All links work.

Do not deploy automatically unless explicitly instructed.

Commit:

```text
chore: prepare project for deployment
```

Update README and STOP.

---

# Git Workflow

After every completed phase:

1. Run relevant tests.
2. Run linting.
3. Run the production build when appropriate.
4. Review the changes.
5. Update `README.md`.
6. Mark the phase as completed.
7. Create exactly one focused Git commit for that phase.
8. Report the commit hash.
9. STOP.

Do not combine unrelated phases into a single commit.

Do not create meaningless commits such as:

```text
update
fix
changes
stuff
final
```

Use descriptive conventional commits.

---

# Progress Report Format

After each phase, report:

```text
PHASE: 3 — Hero & Navigation
STATUS: COMPLETE

Implemented:
- Navigation
- Hero section
- GitHub CTA
- Project CTA
- Responsive layout

Tests:
✓ npm run lint
✓ npm run build

Files changed:
- app/page.tsx
- components/Navbar.tsx
- components/Hero.tsx

Commit:
abc1234 — feat: add hero and navigation

README:
✓ Progress updated

Waiting for next instruction.
```

Do not proceed to the next phase automatically.

---

# Important Agent Rules

The agent must prioritize:

1. Working software
2. Clean architecture
3. Maintainable code
4. Accessibility
5. Responsive design
6. Performance
7. Visual quality

Do not introduce unnecessary dependencies.

Do not fabricate personal information, projects, achievements, statistics, or credentials.

Do not commit secrets, API keys, `.env` files, or private credentials.

Do not automatically push to GitHub.

The agent may create local Git commits, but pushing to a remote repository requires explicit user instruction.

If a phase is blocked, explain the blocker instead of silently skipping it.

Do not continue to the next phase after completing a phase.

Wait for the user to review the result and explicitly request the next phase.
