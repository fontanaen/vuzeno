<script setup lang="ts">
import { CheckSquareIcon, ChevronRightIcon, FileIcon, FolderIcon, Loader2Icon } from "@lucide/vue";
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import type { FileTreeNode } from "./tree-view-data";

defineProps<{
  node: FileTreeNode;
  indexPath: number[];
}>();
</script>

<template>
  <TreeView.NodeProvider :node="node" :index-path="indexPath">
    <template v-if="node.children || node.childrenCount">
      <TreeView.Branch>
        <TreeView.BranchControl>
          <TreeView.BranchText>
            <TreeView.NodeContext v-slot="{ loading }">
              <Loader2Icon v-if="loading" class="animate-spin size-4" />
              <FolderIcon v-else class="size-4" />
            </TreeView.NodeContext>
            {{ node.name }}
          </TreeView.BranchText>
          <TreeView.BranchIndicator>
            <ChevronRightIcon class="size-4" />
          </TreeView.BranchIndicator>
        </TreeView.BranchControl>
        <TreeView.BranchContent>
          <TreeView.BranchIndentGuide />
          <AsyncTreeNode
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
        <TreeView.ItemIndicator>
          <CheckSquareIcon class="size-4" />
        </TreeView.ItemIndicator>
        <TreeView.ItemText>
          <FileIcon class="size-4" />
          {{ node.name }}
        </TreeView.ItemText>
      </TreeView.Item>
    </template>
  </TreeView.NodeProvider>
</template>
