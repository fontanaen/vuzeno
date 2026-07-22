import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./app/lib/site-config";
import { getAppThemeFoucScript } from "./app/lib/themes";

export default defineNuxtConfig({
  compatibilityDate: "2026-07-18",

  devtools: { enabled: false },

  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "nuxt-shiki",
    "@nuxt/fonts",
    "nuxt-llms",
    "@nuxtjs/sitemap",
    "@vercel/analytics",
    // Runs after content/mdc so we can drop optimizeDeps includes Bun can't resolve
    // (`parent > child` nested paths don't match bun's flat .bun store).
    (_options, nuxt) => {
      nuxt.hook("vite:extendConfig", (config) => {
        if (!config.optimizeDeps?.include) {
          return;
        }

        config.optimizeDeps.include = config.optimizeDeps.include.filter((id) => !id.includes("@nuxtjs/mdc > "));
      });
    },
  ],

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
    // Avoid Nuxt 4.5 fs payload-cache collisions in dev (EEXIST/ENOTDIR on .nuxt/cache/nuxt/payload).
    // https://github.com/nuxt/nuxt/issues/34961
    devStorage: {
      "cache:nuxt:payload": { driver: "memory" },
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

  // Nuxt 4.5 ships check-if-page-unused with `export { plugin as default }`, which its own
  // B2005 detector misreads and replaces with a noop — drop it until fixed upstream.
  hooks: {
    "app:resolve"(app) {
      app.plugins = app.plugins.filter((plugin) => !plugin.src?.includes("check-if-page-unused"));
    },
  },

  vite: {
    build: {
      sourcemap: false,
    },
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["vue3-simple-icons", "@tanstack/vue-hotkeys", "reka-ui", "@vueuse/core", "lucide-vue-next", "cnfast"],
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
      script: [
        {
          innerHTML: getAppThemeFoucScript(),
          type: "text/javascript",
        },
      ],
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
