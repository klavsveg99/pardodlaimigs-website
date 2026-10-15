# Pārdod Laimīgs website remake - local prototype

This is an isolated local front-end project. It does not modify or publish to the live site.

## Run locally

```sh
npm install
npm run dev
```

For the client preview path, build with `npm run build:staging`. This sets Vite's asset base to `/new/` for deployment under `public_html/new`.

## What the prototype covers

- Homepage: hero carousel (8 properties, autoplay, arrows, index, progress), property search and filters, selling paths, urgent 3-day sale, client reviews, blog cards, team, legal support, valuation form, FAQ.
- Property pages: one per listing under `/ipasums/<slug>/`, opening from a card's arrow, from the dialog's full-listing button and from a bookmark. Photo gallery with arrow buttons, a photo counter, thumbnails, keyboard arrows and touch swipe; type badge, key facts, the listing prose, agent contact, an expandable exact-location map, and the contact form.
- Property dialog: a quick look at a listing without leaving the page, opened from a card's image or title.
- Blog: an index under `/blog/` and one page per post under `/<slug>/`, each with its own body in all four languages.
- Content pages: the privacy policy under `/privatuma-politika/`.
- Four interface languages (LV, EN, RU, DE) with a saved preference, cookie choices, and quick contact.

## Routes

The URL shapes match the site being migrated to (`/ipasums/<slug>/`, `/<post-slug>/`, `/blog/`, `/<page-slug>/`) so links and bookmarks survive the move off WordPress. The app reads `location.pathname` and picks the view; `scripts/routes.mjs` writes an `index.html` per route after the build, which is what makes a direct hit or a refresh work on plain static hosting. Internal links are handled client-side, so navigation does not reload the page.

## Data

Listings, thumbnails, hero images, per-property galleries and each property's exact coordinates are a snapshot of the live site taken on 14 October 2026 (25 listings, 6 photos each). Coordinates come from the map data on the live listing pages. Fonts and images are stored locally.

`public/data/posts.json` and `public/data/pages.json` carry the article and page copy (all four languages) migrated from WordPress into the CRM, so the preview and the CRM site render the same text. The dates come from the live posts, and one wrong date in the earlier snapshot was corrected.

The live CRM remains the source of truth for properties. Nothing in the preview links back to the old WordPress site. The valuation form validates the email shape and the phone number against the chosen country's dial code, and asks Google for a reCAPTCHA v3 token using the same key the live site uses - the preview has no server, so it stops after the token (the CRM verifies it). Cookie choices are local-only: they do not load analytics.

## Still to do before launch

- Replace the listing snapshot with a live CRM feed, and migrate full galleries, the map, and listing filters.
- Migrate the remaining eight blog posts (the preview carries the three the homepage features), keeping their existing URLs.
- Wire the valuation form to a real endpoint, and add live lead handling.
- Serve or migrate the media library, and add 301 redirects plus a sitemap.
- Replace the keyless Google Maps embed in the property view with the Google Maps key already used by the site.
