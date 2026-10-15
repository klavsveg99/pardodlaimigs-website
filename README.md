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
- Property view: opens from the listings grid or from the hero carousel. Photo gallery with arrow buttons, a photo counter, thumbnails, keyboard arrows and touch swipe; type badge, key facts, description, agent contact, an expandable exact-location map, and a link to the current listing.
- Four interface languages (LV, EN, RU, DE) with a saved preference, cookie choices, and quick contact.

## Data

Listings, thumbnails, hero images, per-property galleries and each property's exact coordinates are a snapshot of the live site taken on 14 October 2026 (25 listings, 6 photos each). Coordinates come from the map data on the live listing pages. Fonts and images are stored locally.

The live CRM remains the source of truth for properties. Property details and blog links still point to the current site. The valuation form and cookie choices are local-only: they do not submit data or load analytics.

## Still to do before launch

- Replace the listing snapshot with a live CRM feed, and migrate full galleries, the map, and listing filters.
- Migrate the 11 blog posts and the content pages, keeping their existing URLs.
- Wire the valuation form to a real endpoint, and add live lead handling.
- Serve or migrate the media library, and add 301 redirects plus a sitemap.
- Replace the keyless Google Maps embed in the property view with the Google Maps key already used by the site.
