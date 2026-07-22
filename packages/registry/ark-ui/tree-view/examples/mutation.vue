<script setup lang="ts">
import { createTreeCollection, TreeView } from "@vuzeno/registry/ui/tree-view";
import { shallowRef } from "vue";
import MutationTreeNode from "./mutation-tree-node.vue";
import type { FileTreeNode } from "./tree-view-data";

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

function handleRemove(payload: { node: FileTreeNode; indexPath: number[] }) {
  collection.value = collection.value.remove([payload.indexPath]);
}

function handleAdd(payload: { node: FileTreeNode; indexPath: number[] }) {
  const { node, indexPath } = payload;
  if (!collection.value.isBranchNode(node)) {
    return;
  }
  const children = [{ id: `untitled-${Date.now()}`, name: "untitled.tsx" }, ...(node.children || [])];
  collection.value = collection.value.replace(indexPath, { ...node, children });
}
</script>

<template>
  <TreeView.Root :collection="collection">
    <TreeView.Tree>
      <MutationTreeNode
        v-for="(node, index) in collection.rootNode.children"
        :key="node.id"
        :node="node"
        :index-path="[index]"
        @remove="handleRemove"
        @add="handleAdd"
      />
    </TreeView.Tree>
  </TreeView.Root>
</template>
