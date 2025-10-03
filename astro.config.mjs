// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: tailwindcss(),
  },
  adapter: vercel(),
  trailingSlash: "always",
  output: "static",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    prefixDefaultLocale: false,
  },
});
