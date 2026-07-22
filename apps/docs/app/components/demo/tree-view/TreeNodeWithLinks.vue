<script setup lang="ts">
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import { ChevronRight, ExternalLink, File } from "lucide-vue-next";
import type { FileTreeNode } from "./tree-view-data";

defineProps<{
  node: FileTreeNode;
  indexPath: number[];
}>();
</script>

<template>
  <TreeView.NodeProvider :node="node" :index-path="indexPath">
    <template v-if="node.children">
      <TreeView.Branch>
        <TreeView.BranchControl>
          <TreeView.BranchText>{{ node.name }}</TreeView.BranchText>
          <TreeView.BranchIndicator>
            <ChevronRight />
          </TreeView.BranchIndicator>
        </TreeView.BranchControl>
        <TreeView.BranchContent>
          <TreeView.BranchIndentGuide />
          <TreeNodeWithLinks
            v-for="(child, index) in node.children"
            :key="child.id"
            :node="child"
            :index-path="[...indexPath, index]"
          />
        </TreeView.BranchContent>
      </TreeView.Branch>
    </template>
    <template v-else>
      <TreeView.Item as-child>
        <a :href="node.href">
          <TreeView.ItemText>
            <File />
            {{ node.name }}
          </TreeView.ItemText>
          <ExternalLink v-if="node.href?.startsWith('http')" :size="12" />
        </a>
      </TreeView.Item>
    </template>
  </TreeView.NodeProvider>
</template>