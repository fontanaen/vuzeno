import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./app/lib/site-config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxtjs/color-mode", "nuxt-shiki", "@nuxt/fonts", "nuxt-llms"],

  css: ["~/assets/main.css"],

  build: {
    transpile: ["vue-sonner"],
  },

  nitro: {
    preset: "vercel",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      failOnError: false,
      autoSubfolderIndex: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["vue3-simple-icons"],
    },
  },

  content: {
    build: {
      markdown: {
        highlight: false,
      },
    },
    database: {
      type: "d1",
      bindingName: "DB",
    },
    experimental: { nativeSqlite: true },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },

  shiki: {
    bundledLangs: ["ts", "vue", "md", "json", "bash", "html", "css"],
    defaultTheme: {
      light: "vesper",
      dark: "vesper",
    },
  },

  llms: {
    domain: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
  },

  app: {
    head: {
      link: [
        { rel: "manifest", href: `${siteConfig.url}/site.webmanifest` },
        { rel: "shortcut icon", href: "/favicon-16x16.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [{ name: "keywords", content: "Vue,Components,shadcn,registry" }],
    },
  },
});
