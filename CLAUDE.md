# salman-hash.github.io

Personal site of Salman Sadiq. Astro 7 + Tailwind CSS v4, fully static, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Environment

Node 26 is pinned **inside `.venv/`** (Python venv + `nodeenv`), so no system or nvm Node is needed.

```bash
source .venv/bin/activate      # node/npm now come from .venv
npm install
npm run dev                    # http://localhost:4321
npm run build                  # → dist/  (always run before committing)
npm run preview                # serve dist/
```

Recreate the venv from scratch:

```bash
python3 -m venv .venv && .venv/bin/pip install nodeenv
.venv/bin/nodeenv -p --prebuilt --node=26.13.0
```

`.nvmrc` and `engines.node` also say 26. CI uses `node-version: 26`.

## Structure

```
src/
  content.config.ts        Zod schemas for the `projects` and `publications` collections
  content/projects/*.md    one file = one project page at /projects/<filename>
  content/publications/*.md
  assets/projects/         cover images (optimised to WebP by astro:assets)
  data/site.ts             personal facts: contact, experience, education, skills, awards
  lib/content.ts           getProjects(), getPublications(), formatMonth(), cleanPath()
  layouts/BaseLayout.astro <head>/SEO/OG tags, header, footer status bar, theme init
  components/              Header, ThemeToggle, StatusBar, ProjectCard, Tag,
                           SectionHeading, LidarBot (hero canvas)
  pages/                   index, projects/index, projects/[...slug], research, about, contact, 404
  styles/global.css        Tailwind import + design tokens (light by default via <html data-theme>, dark toggle)
public/                    cv.pdf, og-default.png, favicon.svg, robots.txt (served as-is)
_legacy/                   previous Vite/React site, kept for reference; not built
```

## Add a project

1. Put a cover image in `src/assets/projects/` (PNG/JPG, ideally 1200×750 or larger, 16:10).
2. Create `src/content/projects/<slug>.md`. The filename becomes the URL `/projects/<slug>`.

```md
---
title: My Robot
summary: One or two sentences, max 200 chars. Used on cards and as the meta description.
role: Solo developer
org: H-BRS                      # optional
date: 2026-11-01                # sorts newest first
tags: [Perception, ROS2]        # plain words, shown as pills + used by the filter
stack: [ROS2, Python, Gazebo]
cover: ../../assets/projects/my-robot.png
coverAlt: Describe what the image shows (required).
links:                          # all optional
  repo: https://github.com/salman-hash/my-robot
  demo: https://…
  paper: https://doi.org/…
  video: https://…
featured: true                  # shows on the home page (top 3 by date)
draft: false                    # true = hidden from production builds
---

Markdown body. Use `## Headings` and normal bullet lists.
```

3. Run `npm run build`. Schema errors (missing alt text, summary over 200 chars, etc.) fail the build with a clear message.

The topic filter on `/projects` is generated automatically from tags that two or more projects share. Reuse existing tag names (exact spelling) so projects group together.

## Profile photo

Put a square photo at `src/assets/profile.png` (`.jpg`/`.jpeg`/`.webp` also work, in any letter case). It appears as a small round photo in the home hero and at the top of the About sidebar, optimised to WebP automatically. If there's no file, both spots just leave it out. Larger sources (600×600+) look sharper on high-DPI screens.

## Add a publication

Create `src/content/publications/<slug>.md` with `title`, `authors` (list), `venue`, `date`, `kind` (`conference | journal | patent`), `status` (`published | accepted | in-progress | filed | granted`), and optional `doi`, `url`, and `project` (a project slug). The body is a short abstract.

## Conventions

- **Facts come from `public/cv.pdf`.** When the CV changes, update `src/data/site.ts` and the affected Markdown. Dates still marked `# TODO: confirm date` are estimates.
- **Design tokens** live in `src/styles/global.css`. Use the Tailwind colours `bg`, `surface`, `surface-2`, `line`, `fg`, `muted`, `accent` (fills/borders) and `accent-ink` (accent *text*; darker in light mode for contrast). Don't hard-code hex colours in components.
- **Fonts:** Inter only (self-hosted through Fontsource).
- **Tone: clean and corporate, not "code-styled".** No monospace UI text, no `/`-prefixed tags or nav, no `//`, `~/ $`, `##` or terminal-style decoration, no background grid, and sentence-case labels and buttons. Monospace is only for real code inside Markdown.
- **No client-side framework.** Interactivity is small inline `<script>`s (theme toggle, project filter, hero canvas). Keep it that way to protect the Lighthouse score (currently 100 in all categories on mobile).
- **URLs have no trailing slash:** `build.format: 'file'` emits `about.html`, served at `/about`. Internal links are written as `/about` and `/projects/<slug>`.
- **Accessibility:** every image needs alt text, keep heading order sequential, keep the visible focus rings, and respect `prefers-reduced-motion` in any animation.
- Tailwind only scans `src/` (`source('../')` in `global.css`), so classes in `_legacy/` don't bloat the CSS.

## Deploy

Pushing to `main` builds and deploys. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
