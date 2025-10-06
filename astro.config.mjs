// @ts-check
import { defineConfig } from "astro/config";
import path from 'path';
import { fileURLToPath } from 'url';

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },

    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  trailingSlash: "always",
  output: "static",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
    prefixDefaultLocale: false,
  }
  },
});