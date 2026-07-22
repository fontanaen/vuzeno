<script setup lang="ts">
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import { ChevronRight, File, Folder, FolderOpen } from "lucide-vue-next";
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
            <TreeView.NodeRenameInput v-if="nodeState.renaming" />
            <TreeView.BranchText v-else>
              <FolderOpen v-if="nodeState.expanded" />
              <Folder v-else />
              {{ node.name }}
            </TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            <RenameTreeNode
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
          <File />
          <TreeView.NodeRenameInput v-if="nodeState.renaming" />
          <TreeView.ItemText v-else>{{ node.name }}</TreeView.ItemText>
        </TreeView.Item>
      </template>
    </TreeView.NodeContext>
  </TreeView.NodeProvider>
</template>
