/**
 * Finishing touches for the production build only (base "/").
 *
 * Runs after `vite build` and before routes.mjs, which copies index.html into
 * every route directory. The preview build under /new/ keeps its noindex meta;
 * the live build must not: the meta is stripped here and robots.txt plus
 * sitemap.xml are generated for the domain root.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const site = 'https://pardodlaimigs.lv';

const read = (file) => JSON.parse(readFileSync(join(root, 'public', 'data', file), 'utf8'));

const indexPath = join(dist, 'index.html');
let html = readFileSync(indexPath, 'utf8');
html = html.replace(
  /\n    <!-- Preview build served under \/new\/[\s\S]*?<meta name="robots" content="noindex, nofollow" \/>/,
  '',
);
if (/\bnoindex\b/.test(html)) {
  throw new Error('launch.mjs: the production index.html still contains a noindex directive');
}
writeFileSync(indexPath, html);

const urls = [
  '',
  ...read('properties.json').map((property) => `ipasums/${property.slug}/`),
  ...read('posts.json').map((post) => `${post.slug}/`),
  ...read('pages.json').map((page) => `${page.slug}/`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${site}/${path}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *
Allow: /
Disallow: /crm/

Sitemap: ${site}/sitemap.xml
`,
);

console.log(`launch.mjs: production index, robots.txt and sitemap.xml ready (${urls.length} urls)`);
