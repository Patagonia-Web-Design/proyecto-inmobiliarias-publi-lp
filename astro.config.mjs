import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://packdefinitivo.com',
  base: '/',
  integrations: [],
  build: {
    assets: 'assets'
  },
  server: {
    port: 3000,
    host: true
  }
});
