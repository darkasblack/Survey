import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

const conditionalPlugins: [string, Record<string, any>][] = [];

// @ts-ignore
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

export default defineConfig({
  // Set the base URL for GitHub Pages deployment
  base: "./",

  // Optimization for dependencies
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },

  plugins: [
    // React plugin
    react({
      plugins: conditionalPlugins,
    }),

    // Tempo DevTools plugin
    tempo(),
  ],

  resolve: {
    // Symlink handling
    preserveSymlinks: true,

    // Alias for easy imports
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Ensure correct paths for assets in the production build
    assetsDir: "assets",
    sourcemap: false, // Set to false for cleaner builds
    // publicPath is not needed as base handles this

    // Ensure correct output directory
    outDir: "dist",
  },

  server: {
    allowedHosts: true,
  },
});
