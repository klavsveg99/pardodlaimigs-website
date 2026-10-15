/**
 * Every route gets its own index.html after the build, so a direct hit or a
 * refresh on /new/ipasums/<slug>/ works on plain static hosting without any
 * server rewrite. The pages are rendered by the same bundle: the app reads
 * location.pathname and picks the view (see currentRoute() in src/main.js).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const read = (file) => JSON.parse(readFileSync(join(root, 'public', 'data', file), 'utf8'));

const routes = [
  'blog/',
  ...read('properties.json').map((property) => `ipasums/${property.slug}/`),
  ...read('posts.json').map((post) => `${post.slug}/`),
  ...read('pages.json').map((page) => `${page.slug}/`),
];

for (const route of routes) {
  const file = join(dist, route, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, template);
}

console.log(`routes.mjs: wrote ${routes.length} route pages`);
