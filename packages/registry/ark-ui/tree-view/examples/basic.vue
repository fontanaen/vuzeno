<script setup lang="ts">
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import TreeNode from "./tree-node.vue";
import { createFileTreeCollection } from "./tree-view-data";

const collection = createFileTreeCollection();
</script>

<template>
  <TreeView.Root :collection="collection">
    <TreeView.Label>Tree</TreeView.Label>
    <TreeView.Tree>
      <TreeNode
        v-for="(node, index) in collection.rootNode.children"
        :key="node.id"
        :node="node"
        :index-path="[index]"
      />
    </TreeView.Tree>
  </TreeView.Root>
</template>
