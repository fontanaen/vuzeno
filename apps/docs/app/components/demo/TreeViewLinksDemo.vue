<script setup lang="ts">
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import TreeNodeWithLinks from "./tree-view/TreeNodeWithLinks.vue";
import { createLinksTreeCollection } from "./tree-view/tree-view-data";

const collection = createLinksTreeCollection();
</script>

<template>
  <TreeView.Root :collection="collection">
    <TreeView.Label>Docs</TreeView.Label>
    <TreeView.Tree>
      <TreeNodeWithLinks
        v-for="(node, index) in collection.rootNode.children"
        :key="node.id"
        :node="node"
        :index-path="[index]"
      />
    </TreeView.Tree>
  </TreeView.Root>
</template>
