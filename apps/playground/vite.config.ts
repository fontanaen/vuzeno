import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [VueRouter(), Vue(), tailwindcss()],
  resolve: {
    alias: {
      "@/lib/utils": path.resolve(__dirname, "../../packages/ui/src/lib/utils.ts"),
      "@/components/ui": path.resolve(__dirname, "../../packages/ui/src/components"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
