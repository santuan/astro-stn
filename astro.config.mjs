import image from "@astrojs/image";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./lib/remark-reading-time.mjs";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://srcouto.netlify.app",
  integrations: [mdx({
    remarkPlugins: [remarkReadingTime]
    // Astro defaults applied
  }), sitemap(), tailwind(), vue(), react(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), astroImageTools, preact(), solidJs(), svelte()]
});