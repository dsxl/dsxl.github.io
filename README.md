# dsxl.github.io

Personal site for Dimitriy Shames — [dsxl.github.io](https://dsxl.github.io)

Static site built with [Astro](https://astro.build). Ships **zero JavaScript** to
the browser; the whole site is ~88 KB.

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

- Dark is the designed default; light mode is a full alternate palette, not an
  inversion. Both are defined as tokens at the top of `global.css`.
- No web fonts — system font stack only, so there is no flash of unstyled text
  and no third-party requests.
- No client-side JavaScript at all.
- No analytics or trackers.

## Archive

`Dimitriy2020.pdf` is the resume from the previous version of this site. It is
kept at the repo root but **not published** — only `public/` is copied into the
build. It is out of date; replace it before linking to it anywhere.

The pre-2026 site was a purchased jQuery/Bootstrap 3 template. It lives in git
history if you ever need it (`git log -- index.html`).
