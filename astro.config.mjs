import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/static';
// https://astro.build/config

export default defineConfig({
  site: "https://www.homesolar.co.in",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  adapter: vercel({
    analytics: true
  })
});