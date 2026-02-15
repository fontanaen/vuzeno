import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";
import llmstxt, { copyOrDownloadAsMarkdownButtons } from "vitepress-plugin-llms";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuetella",
  description: "A Shadcn Vue registry.",
  srcDir: "./src",
  appearance: "dark",
  cleanUrls: true,
  scrollOffset: 75,
  vite: {
    plugins: [tailwindcss(), llmstxt()],
    resolve: {
      alias: {
        "@/components/ui": path.resolve(__dirname, "../../../packages/ui/src/components"),
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
