# philipabao.com

Personal site & technical blog of Philip Abao. Built with [Astro](https://astro.build) + MDX.

## Develop

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the built site
```

## Add a post

Create `src/content/posts/<slug>.mdx` with frontmatter:

```mdx
---
title: "Title here"
description: "One-line description shown on index pages and OG tags."
pubDate: 2026-05-20
tag: "essay"   # or note, project, etc.
draft: false
---

Body in markdown / MDX.
```

That's the whole publishing flow. `git push` deploys.

## Layout

```
src/
├── content/posts/        ← MDX posts (the only thing you edit day-to-day)
├── content.config.ts     ← post frontmatter schema
├── layouts/              ← BaseLayout, PostLayout
├── components/           ← SiteHeader, SiteFooter, Colophon
├── pages/                ← /, /about, /writing, /posts/[slug], /rss.xml
├── styles/global.css     ← design tokens & global styles
└── consts.ts             ← site title / url / author
```

## Design

Print-inspired editorial. Paper tones, ferrous orange accent, Instrument
Serif + Inter + JetBrains Mono. Tokens live in `:root` in `global.css`.
