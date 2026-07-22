<script setup lang="ts">
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import { CheckIcon, ChevronRightIcon, SquareIcon, SquareMinusIcon } from "lucide-vue-next";
import type { FileTreeNode } from "./tree-view-data";

defineProps<{
  node: FileTreeNode;
  indexPath: number[];
}>();
</script>

<template>
  <TreeView.NodeProvider :node="node" :index-path="indexPath">
    <TreeView.Branch v-if="node.children">
      <TreeView.BranchControl>
        <TreeView.NodeCheckbox>
          <TreeView.NodeCheckboxIndicator>
            <CheckIcon />
            <template #indeterminate>
              <SquareMinusIcon />
            </template>
            <template #fallback>
              <SquareIcon />
            </template>
          </TreeView.NodeCheckboxIndicator>
        </TreeView.NodeCheckbox>
        <TreeView.BranchText>{{ node.name }}</TreeView.BranchText>
        <TreeView.BranchIndicator>
          <ChevronRightIcon />
        </TreeView.BranchIndicator>
      </TreeView.BranchControl>
      <TreeView.BranchContent>
        <TreeView.BranchIndentGuide />
        <TreeNodeWithCheckbox
          v-for="(child, childIndex) in node.children"
          :key="child.id"
          :node="child"
          :index-path="[...indexPath, childIndex]"
        />
      </TreeView.BranchContent>
    </TreeView.Branch>
    <TreeView.Item v-else>
      <TreeView.NodeCheckbox>
        <TreeView.NodeCheckboxIndicator>
          <CheckIcon />
          <template #indeterminate>
            <SquareMinusIcon />
          </template>
          <template #fallback>
            <SquareIcon />
          </template>
        </TreeView.NodeCheckboxIndicator>
      </TreeView.NodeCheckbox>
      <TreeView.ItemText>{{ node.name }}</TreeView.ItemText>
    </TreeView.Item>
  </TreeView.NodeProvider>
</template>

<script lang="ts">
export default { name: "TreeNodeWithCheckbox" };
</script>
