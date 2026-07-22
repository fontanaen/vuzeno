<script setup lang="ts">
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import { ref } from "vue";
import TreeNode from "./tree-view/TreeNode.vue";
import { createFileTreeCollection } from "./tree-view/tree-view-data";

const expandedValue = ref(["node_modules"]);
const collection = createFileTreeCollection();
</script>

<template>
  <TreeView.Root v-model:expanded-value="expandedValue" :collection="collection">
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
