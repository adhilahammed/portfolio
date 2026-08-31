import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Set 'base' to your GitHub repo name if deploying to GitHub Pages
// e.g., base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
