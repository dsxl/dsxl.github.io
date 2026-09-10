# dsxl.github.io

Personal site for Dimitriy Shames — [dsxl.github.io](https://dsxl.github.io)

Static site built with [Astro](https://astro.build). The only client-side
JavaScript is the inline theme toggle (~1 KB, no bundle, no requests); the whole
site is under 100 KB.

## Running it

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run check    # type-check .astro files
```

Requires Node 22+.

## Where things live

```
src/
  site.ts                  ← all page content: bio, roles, toolbox, links
  content/posts/*.md       ← blog posts
  pages/                   ← routes
  layouts/Base.astro       ← <head>, header, footer, SEO/OG tags
  styles/global.css        ← design tokens + all styling
public/                    ← copied verbatim to the site root
```

**To edit the bio, job history, or toolbox:** everything is in `src/site.ts`.
No templates to touch.

## Adding a post

Create `src/content/posts/my-post.md`:

```md
---
title: Post title
description: One or two sentences. Used for the card and the meta description.
date: 2026-09-10
draft: false
---

Body copy in Markdown.
```

The filename becomes the URL: `/posts/my-post/`. Set `draft: true` to keep a
post out of the build. Posts appear automatically on the homepage, the
`/posts/` index, and `/rss.xml`.

## Deploying

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

> **One-time setup:** in **Settings → Pages**, set *Source* to **GitHub Actions**.
> Without this the workflow builds but nothing is published.

## Design notes

- **Theming.** Every design token is a single `light-dark(light, dark)` pair at
  the top of `global.css` — one declaration covers both palettes, so there is no
  duplicated color block and no `prefers-color-scheme` media query.
  `color-scheme: light dark` on `:root` follows the OS by default; the toggle
  pins it by setting `data-theme="light"` or `"dark"` on `<html>`, and every
  token re-resolves from that. "System" removes the attribute.
  A blocking inline script in `<head>` applies the stored choice before first
  paint, so a pinned theme never flashes the other one. The preference lives in
  `localStorage` and every access is wrapped in try/catch — in private mode the
  toggle still works, it just doesn't persist. Without JavaScript the toggle
  hides itself and the OS preference still applies.
  `light-dark()` has been Baseline since mid-2024; older browsers fall back to
  plain readable text rather than breaking layout.
- No web fonts — system font stack only, so there is no flash of unstyled text
  and no third-party requests.
- No analytics or trackers.

## Archive

There is deliberately no resume PDF. LinkedIn generates one from the profile,
and maintaining a second copy here only creates a version that goes stale.
Contact and history route to LinkedIn instead.

The pre-2026 site was a purchased jQuery/Bootstrap 3 template. It lives in git
history if you ever need it (`git log -- index.html`), along with the old
`Dimitriy2020.pdf`.
