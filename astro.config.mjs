import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
  vite: {
    build: {
      // Evita warnings ruidosos por chunks grandes (three.js) en build
      chunkSizeWarningLimit: 1200
    }
  }
})