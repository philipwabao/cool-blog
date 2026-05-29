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

Print-inspired editorial. Warm paper tones (light + dark "night paper" variants), deep navy accent (adapts in dark), Lora + Inter + JetBrains Mono. All tokens in `:root` + `[data-theme="dark"]` in `global.css`.

**Modern frontend polish (2026)**: View Transitions, reading progress on articles, elegant masthead + persistent nav, theme toggle, refined prose measure (68ch), subtle motion, accessible focus, print styles, reusable MDX components for research visuals (`Tribute`, `QuoteStamp`, `ChartWrapper` in `src/components/mdx/`).

The aesthetic remains hand-crafted and quiet — a builder's notebook, not a product site.
