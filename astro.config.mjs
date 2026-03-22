import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tupate.studio',
  integrations: [sitemap()],
  redirects: {
    '/seo-google-maps-ranking-kenya': '/articles/seo-google-maps-ranking-kenya',
  },
});
