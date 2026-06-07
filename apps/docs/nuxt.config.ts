import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./app/lib/site-config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: false },

  modules: ["@nuxt/content", "@nuxtjs/color-mode", "nuxt-shiki", "@nuxt/fonts", "nuxt-llms", "@nuxtjs/sitemap", "@vercel/analytics"],

  css: ["~/assets/main.css"],

  build: {
    transpile: ["vue-sonner"],
  },

  nitro: {
    preset: "vercel",
    minify: true,
    output: {
      dir: "../../.vercel/output",
    },
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      failOnError: false,
      autoSubfolderIndex: false,
      concurrency: 2,
    },
    rollupConfig: {
      maxParallelFileOps: 2,
    },
  },

  vite: {
    build: {
      sourcemap: false,
    },
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["vue3-simple-icons", "@tanstack/vue-hotkeys", "reka-ui", "class-variance-authority", "@vueuse/core", "lucide-vue-next", "clsx", "tailwind-merge"],
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
    sections: [
      {
        title: "Contact",
        description: "Social networks",
        links: [
          {
            title: "Website",
            description: "Website",
            href: `${siteConfig.url}`,
          },
          {
            title: "GitHub",
            description: "GitHub repository",
            href: `${siteConfig.links.github}`,
          },
          {
            title: "X",
            description: "X account",
            href: `${siteConfig.links.x}`,
          },
        ],
      },
    ],
  },

  site: {
    url: siteConfig.url,
  },

  sitemap: {
    zeroRuntime: true,
  },

  app: {
    head: {
      link: [
        { rel: "manifest", href: `${siteConfig.url}/site.webmanifest` },
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
