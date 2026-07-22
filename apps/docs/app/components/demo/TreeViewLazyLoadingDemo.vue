<script setup lang="ts">
import { createTreeCollection, type TreeCollection, TreeView, type TreeViewLoadChildrenDetails } from "@ark-ui/vue/tree-view";
import { type Ref, ref } from "vue";
import AsyncTreeNode from "./tree-view/AsyncTreeNode.vue";
import type { FileTreeNode } from "./tree-view/tree-view-data";

const response: Record<string, FileTreeNode[]> = {
  node_modules: [
    { id: "zag-js", name: "zag-js" },
    { id: "pandacss", name: "panda" },
    { id: "@types", name: "@types", childrenCount: 2 },
  ],
  "node_modules/@types": [
    { id: "react", name: "react" },
    { id: "react-dom", name: "react-dom" },
  ],
  src: [
    { id: "app.tsx", name: "app.tsx" },
    { id: "index.ts", name: "index.ts" },
  ],
};

function loadChildren(details: TreeViewLoadChildrenDetails<FileTreeNode>): Promise<FileTreeNode[]> {
  const value = details.valuePath.join("/");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response[value] ?? []);
    }, 1200);
  });
}

const initialCollection = createTreeCollection<FileTreeNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      { id: "node_modules", name: "node_modules", childrenCount: 3 },
      { id: "src", name: "src", childrenCount: 2 },
      { id: "panda.config", name: "panda.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "renovate.json", name: "renovate.json" },
      { id: "readme.md", name: "README.md" },
    ],
  },
});

const collection = ref(initialCollection) as Ref<TreeCollection<FileTreeNode>>;
</script>

<template>
  <TreeView.Root
    :collection="collection"
    :load-children="loadChildren"
    @load-children-complete="(event) => (collection = event.collection)"
  >
    <TreeView.Label>Tree</TreeView.Label>
    <TreeView.Tree>
      <AsyncTreeNode
        v-for="(node, index) in collection.rootNode.children"
        :key="node.id"
        :node="node"
        :index-path="[index]"
      />
    </TreeView.Tree>
  </TreeView.Root>
</template>
