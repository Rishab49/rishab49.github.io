import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://rishab49.github.io',
  integrations: [react(), mdx(), sitemap(), tailwind()],
  vite:{
    ssr:{
      noExternal: ["react-icons"],
    }
  }
});