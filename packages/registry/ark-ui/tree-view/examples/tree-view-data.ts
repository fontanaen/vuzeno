import { createTreeCollection } from "@vuzeno/registry/ui/tree-view";

export type FileTreeNode = {
  id: string;
  name: string;
  children?: FileTreeNode[];
  href?: string;
  childrenCount?: number;
};

export function createFileTreeCollection() {
  return createTreeCollection<FileTreeNode>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: [
        {
          id: "node_modules",
          name: "node_modules",
          children: [
            { id: "node_modules/zag-js", name: "zag-js" },
            { id: "node_modules/pandacss", name: "panda" },
            {
              id: "node_modules/@types",
              name: "@types",
              children: [
                { id: "node_modules/@types/react", name: "react" },
                { id: "node_modules/@types/react-dom", name: "react-dom" },
              ],
            },
          ],
        },
        {
          id: "src",
          name: "src",
          children: [
            { id: "src/app.tsx", name: "app.tsx" },
            { id: "src/index.ts", name: "index.ts" },
          ],
        },
        { id: "panda.config", name: "panda.config.ts" },
        { id: "package.json", name: "package.json" },
        { id: "renovate.json", name: "renovate.json" },
        { id: "readme.md", name: "README.md" },
      ],
    },
  });
}

export function createLinksTreeCollection() {
  return createTreeCollection<FileTreeNode>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: [
        {
          id: "docs",
          name: "Documentation",
          children: [
            { id: "docs/getting-started", name: "Getting Started", href: "/docs/getting-started" },
            { id: "docs/installation", name: "Installation", href: "/docs/installation" },
            {
              id: "docs/components",
              name: "Components",
              children: [
                { id: "docs/components/accordion", name: "Accordion", href: "/docs/components/accordion" },
                { id: "docs/components/dialog", name: "Dialog", href: "/docs/components/dialog" },
                { id: "docs/components/menu", name: "Menu", href: "/docs/components/menu" },
              ],
            },
          ],
        },
        {
          id: "examples",
          name: "Examples",
          children: [
            { id: "examples/react", name: "React Examples", href: "/examples/react" },
            { id: "examples/vue", name: "Vue Examples", href: "/examples/vue" },
            { id: "examples/solid", name: "Solid Examples", href: "/examples/solid" },
          ],
        },
        {
          id: "external",
          name: "External Links",
          children: [
            { id: "external/github", name: "GitHub Repository", href: "https://github.com/chakra-ui/zag" },
            { id: "external/npm", name: "NPM Package", href: "https://www.npmjs.com/package/@zag-js/core" },
            { id: "external/docs", name: "Official Docs", href: "https://zagjs.com" },
          ],
        },
        { id: "readme.md", name: "README.md", href: "/readme" },
        { id: "license", name: "LICENSE", href: "/license" },
      ],
    },
  });
}
