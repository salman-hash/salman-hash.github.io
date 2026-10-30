// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// User site (salman-hash.github.io) → served from the domain root, no `base`.
export default defineConfig({
  site: 'https://salman-hash.github.io',
  output: 'static',
  // Emit about.html (not about/index.html) so GitHub Pages serves /about
  // directly — no 301 to /about/ on every internal link.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
