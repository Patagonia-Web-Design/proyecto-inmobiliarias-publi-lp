import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://packdefinitivo.com',
  base: '/',
  adapter: cloudflare(),
  integrations: [],
  build: {
    assets: 'assets'
  },
  server: {
    port: 3000,
    host: true
  }
});
