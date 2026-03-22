import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tupate.studio',
  integrations: [sitemap()],
  redirects: {
    '/seo-google-maps-ranking-kenya': '/articles/seo-google-maps-ranking-kenya',
    '/business-website-design-kenya': '/articles/website-design-kenya',
    '/website-maintenance-services-kenya': '/articles/website-maintenance-kenya',
  },
});
