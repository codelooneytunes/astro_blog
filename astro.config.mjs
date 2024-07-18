import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.banditspace.com',
  prefetch: true,
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  })],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});