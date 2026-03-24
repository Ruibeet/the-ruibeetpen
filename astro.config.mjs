import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'static',
  build: { format: 'directory' },
  integrations: [
    react(),
    tailwind()
  ],
});
