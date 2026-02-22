import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";
import llmstxt, { copyOrDownloadAsMarkdownButtons } from "vitepress-plugin-llms";
import { componentPreviewPlugin, preprocessComponentPreview2 } from "./plugins/component-preview-plugin.ts";

const SITE_URL = "https://vuzeno.com";
const DEFAULT_OG_IMAGE_PATH = "/social/og.png";

function toCanonicalPath(relativePath: string): string {
  const withoutExtension = relativePath.replace(/\.md$/, "");
  const normalized = withoutExtension.endsWith("/index") ? withoutExtension.slice(0, -"/index".length) : withoutExtension;

  if (!normalized || normalized === "index") {
    return "/";
  }

  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Vuzeno",
  titleTemplate: "Vuzeno | :title",
  description: "A Shadcn Vue registry.",
  srcDir: "./src",
  appearance: "dark",
  cleanUrls: true,
  scrollOffset: 75,
  sitemap: {
    hostname: SITE_URL,
  },
  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Vuzeno" }],
    ["meta", { property: "og:image", content: `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}` }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@fontanaen11" }],
    ["meta", { name: "twitter:creator", content: "@fontanaen11" }],
    ["meta", { name: "twitter:image", content: `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}` }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  transformHead: ({ pageData }) => {
    const canonicalPath = toCanonicalPath(pageData.relativePath);
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const title = pageData.title ? `Vuzeno | ${pageData.title}` : "Vuzeno";
    const description = pageData.description || "A Shadcn Vue registry.";

    return [
      ["link", { rel: "canonical", href: canonicalUrl }],
      ["meta", { property: "og:url", content: canonicalUrl }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: description }],
    ];
  },
  vite: {
    plugins: [componentPreviewPlugin(), tailwindcss(), llmstxt()],
    resolve: {
      alias: {
        "@/components/ui": path.resolve(__dirname, "../../../packages/ui/src/components"),
        "@/lib/utils": path.resolve(__dirname, "../../../packages/ui/src/lib/utils.ts"),
      },
    },
  },
  outline: {
    level: [2, 3],
  },
  themeConfig: {
    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Introduction", link: "/docs/introduction" },
          { text: "Getting Started", link: "/docs/getting-started" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Autocomplete", tag: "new", link: "/docs/components/autocomplete" },
          { text: "Filters", tag: "new", link: "/docs/components/filters" },
          { text: "Image", tag: "new", link: "/docs/components/image" },
          { text: "Phone Field", tag: "new", link: "/docs/components/phone-field" },
        ],
      },
    ],
  },
  markdown: {
    theme: "vesper",
    headers: {
      level: [2, 3],
    },
    config: (md) => {
      md.use(copyOrDownloadAsMarkdownButtons);

      // Save the original fence renderer (which includes VitePress's wrapper)
      const originalFence = md.renderer.rules.fence!;

      md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args;
        const token = tokens[idx];
        const rawCode = token.content;

        // Get the original rendered output
        const originalOutput = originalFence(...args);

        // Replace the default button with your Vue component
        // The component needs to be globally registered
        return originalOutput.replace(/<button title="[^"]*" class="copy"><\/button>/, `<CopyButton class="copy" code="${encodeURIComponent(rawCode)}" />`);
      };
    },
    preConfig(md) {
      const originalParse = md.parse.bind(md);
      md.parse = (src: string, env: object) => {
        return originalParse(preprocessComponentPreview2(src), env);
      };

      const originalFence = md.renderer.rules.fence!;

      md.renderer.rules.fence = (...args) => {
        // Get the original rendered output
        let output = originalFence(...args);
        let lineNumber = 0;
        output = output.replace(/<span class="line([^"]*)"/g, (_, additionalClasses) => {
          lineNumber++;
          return `<span class="line${additionalClasses}" data-line="${lineNumber}"`;
        });

        return output;
      };
    },
  },
});
