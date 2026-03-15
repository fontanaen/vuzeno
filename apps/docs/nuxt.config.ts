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
    preset: "static",
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
    experimental: { sqliteConnector: "native" },
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
        { rel: "icon", href: "/favicon.ico" },
      ],
      meta: [
        { name: "keywords", content: "Vue,Components,shadcn,registry" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Vuzeno" },
        { property: "og:image", content: siteConfig.ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@fontanaen11" },
        { name: "twitter:creator", content: "@fontanaen11" },
        { name: "twitter:image", content: siteConfig.ogImage },
        { property: "og:title", content: siteConfig.name },
        { property: "og:description", content: siteConfig.description },
        { name: "twitter:title", content: siteConfig.name },
        { name: "twitter:description", content: siteConfig.description },
      ],
    },
  },
});
