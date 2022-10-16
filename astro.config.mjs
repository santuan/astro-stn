import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import image from "@astrojs/image";
import { remarkReadingTime } from './remark-reading-time.mjs';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://srcouto.vercel.app',
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  integrations: [mdx(), sitemap(), tailwind(), vue(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), preact()]
});