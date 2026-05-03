import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace with real domain before launch
export const SITE_URL = 'https://example.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  image: {
    // let Astro generate modern formats
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
