import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const integrations = process.platform === 'win32' ? [] : [sitemap()];

export default defineConfig({
  site: 'https://tupate.studio',
  integrations,
});
