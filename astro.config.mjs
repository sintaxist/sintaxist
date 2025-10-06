// @ts-check
import { defineConfig } from "astro/config";
import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: tailwindcss(),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
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
