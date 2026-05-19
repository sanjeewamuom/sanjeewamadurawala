import { defineConfig } from "astro/config";

// GitHub Pages project site: https://sanjeewamuom.github.io/sanjeewamadurawala/
export default defineConfig({
  site: "https://sanjeewamuom.github.io",
  base: "/sanjeewamadurawala/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
