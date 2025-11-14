import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/code/", // ضروري لموقعك على GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
