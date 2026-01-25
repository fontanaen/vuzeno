import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuetella",
  description: "A Shadcn Vue registry.",
  srcDir: "./pages",
  appearance: "dark",
  cleanUrls: true,
  vite: {
    plugins: [tailwindcss()],
  },
  outline: {
    level: [2, 3],
  },
  themeConfig: {
    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Introduction", link: "/overview/introduction" },
          { text: "Getting Started", link: "/overview/getting-started" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Autocomplete", tag: "new", link: "/components/autocomplete" },
          { text: "Filters", tag: "new", link: "/components/filters" },
          { text: "Image", tag: "new", link: "/components/image" },
          { text: "Phone Field", tag: "new", link: "/components/phone-field" },
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
        output = output.replace(/<span class="line"/g, () => {
          lineNumber++;
          return `<span class="line" data-line="${lineNumber}"`;
        });

        return output;
      };
    },
  },
});
