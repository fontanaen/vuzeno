<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import ExpandCollapseTreeNode from "./expand-collapse-tree-node.vue";
import { createFileTreeCollection } from "./tree-view-data";

const collection = createFileTreeCollection();
</script>

<template>
  <TreeView.Root :collection="collection" data-animate="false">
    <TreeView.Context v-slot="tree">
      <div class="flex gap-2">
        <Button
          v-if="collection.getBranchValues().every((value) => tree.expandedValue.includes(value))"
          variant="outline"
          size="sm"
          @click="tree.collapse()"
        >
          Collapse all
        </Button>
        <Button v-else variant="outline" size="sm" @click="tree.expand()">
          Expand all
        </Button>
      </div>
    </TreeView.Context>
    <TreeView.Tree>
      <ExpandCollapseTreeNode
        v-for="(node, index) in collection.rootNode.children"
        :key="node.id"
        :node="node"
        :index-path="[index]"
      />
    </TreeView.Tree>
  </TreeView.Root>
</template>
