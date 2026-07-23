<script setup lang="ts">
import { ChevronRight, File, Folder, FolderOpen } from "@lucide/vue";
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import type { FileTreeNode } from "./tree-view-data";

defineProps<{
  node: FileTreeNode;
  indexPath: number[];
}>();
</script>

<template>
  <TreeView.NodeProvider :node="node" :index-path="indexPath">
    <TreeView.NodeContext v-slot="nodeState">
      <template v-if="node.children">
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator>
              <ChevronRight />
            </TreeView.BranchIndicator>
            <TreeView.BranchText>
              <FolderOpen v-if="nodeState.expanded" />
              <Folder v-else />
              {{ node.name }}
            </TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            <ExpandCollapseTreeNode
              v-for="(child, index) in node.children"
              :key="child.id"
              :node="child"
              :index-path="[...indexPath, index]"
            />
          </TreeView.BranchContent>
        </TreeView.Branch>
      </template>
      <template v-else>
        <TreeView.Item>
          <TreeView.ItemText>
            <File />
            {{ node.name }}
          </TreeView.ItemText>
        </TreeView.Item>
      </template>
    </TreeView.NodeContext>
  </TreeView.NodeProvider>
</template>

<script lang="ts">
export default { name: "ExpandCollapseTreeNode" };
</script>
