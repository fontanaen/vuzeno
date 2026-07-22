<script setup lang="ts">
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import TreeNodeWithCheckbox from "./tree-view/TreeNodeWithCheckbox.vue";
import { createFileTreeCollection } from "./tree-view/tree-view-data";

const collection = createFileTreeCollection();
</script>

<template>
  <TreeView.Root :collection="collection" :default-checked-value="[]">
    <TreeView.Label>Tree</TreeView.Label>
    <TreeView.Tree>
      <TreeNodeWithCheckbox
        v-for="(node, index) in collection.rootNode.children"
        :key="node.id"
        :node="node"
        :index-path="[index]"
      />
    </TreeView.Tree>
  </TreeView.Root>
</template>
