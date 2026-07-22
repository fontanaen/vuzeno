<script setup lang="ts">
import { createTreeCollection, TreeView } from "@vuzeno/registry/ui/tree-view";
import { shallowRef } from "vue";
import RenameTreeNode from "./tree-view/RenameTreeNode.vue";
import type { FileTreeNode } from "./tree-view/tree-view-data";

const collection = shallowRef(
  createTreeCollection<FileTreeNode>({
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
  }),
);

function handleRenameComplete(details: { indexPath: number[]; label: string }) {
  const node = collection.value.at(details.indexPath);
  if (!node) {
    return;
  }
  collection.value = collection.value.replace(details.indexPath, { ...node, name: details.label });
}
</script>

<template>
  <TreeView.Root
    :collection="collection"
    :can-rename="() => true"
    @rename-complete="handleRenameComplete"
  >
    <TreeView.Label>Tree (Press F2 to rename)</TreeView.Label>
    <TreeView.Tree>
      <RenameTreeNode
        v-for="(node, index) in collection.rootNode.children"
        :key="node.id"
        :node="node"
        :index-path="[index]"
      />
    </TreeView.Tree>
  </TreeView.Root>
</template>
