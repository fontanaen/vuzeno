<script setup lang="ts">
import { useVirtualizer } from "@tanstack/vue-virtual";
import { Button } from "@vuzeno/registry/ui/button";
import { createTreeCollection, TreeView, useTreeView } from "@vuzeno/registry/ui/tree-view";
import { ChevronRight, File, Folder } from "lucide-vue-next";
import { computed, nextTick, ref } from "vue";
import type { FileTreeNode } from "./tree-view/tree-view-data";

function generateLargeTree(): FileTreeNode {
  const folders: FileTreeNode[] = [];
  for (let i = 0; i < 50; i++) {
    const children: FileTreeNode[] = [];
    for (let j = 0; j < 20; j++) {
      children.push({ id: `folder-${i}/file-${i}-${j}.ts`, name: `file-${i}-${j}.ts` });
    }
    folders.push({ id: `folder-${i}`, name: `folder-${i}`, children });
  }
  return {
    id: "ROOT",
    name: "",
    children: folders,
  };
}

const collection = createTreeCollection<FileTreeNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: generateLargeTree(),
});

const ROW_HEIGHT = 32;
const treeRef = ref<HTMLDivElement | null>(null);

const tree = useTreeView({
  collection,
  scrollToIndexFn(details) {
    nextTick(() => {
      virtualizer.value?.scrollToIndex(details.index, { align: "auto" });
    });
  },
});

const visibleNodes = computed(() => tree.value.getVisibleNodes());

const virtualizer = useVirtualizer(
  computed(() => ({
    count: visibleNodes.value.length,
    getScrollElement: () => treeRef.value,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
  })),
);
</script>

<template>
  <TreeView.RootProvider :value="tree">
    <TreeView.Label>Virtualized Tree ({{ visibleNodes.length }} visible nodes)</TreeView.Label>
    <div class="flex gap-2">
      <Button variant="outline" size="sm" @click="tree.collapse()">
        Collapse all
      </Button>
      <Button variant="outline" size="sm" @click="tree.expand()">
        Expand all
      </Button>
    </div>
    <TreeView.Tree ref="treeRef" class="h-[400px] overflow-auto">
      <div
        class="relative w-full"
        :style="{ minHeight: `${virtualizer.getTotalSize()}px` }"
      >
        <div
          v-for="virtualItem in virtualizer.getVirtualItems()"
          :key="visibleNodes[virtualItem.index]?.node.id"
          :data-index="virtualItem.index"
          class="absolute top-0 left-0 w-full"
          :style="{
            height: `${virtualItem.size}px`,
            transform: `translateY(${virtualItem.start}px)`,
          }"
          @pointerdown="(event) => {
            if (event.button !== 0) return;
            tree.focus(visibleNodes[virtualItem.index]?.node.id);
          }"
        >
          <TreeView.NodeProvider
            :node="visibleNodes[virtualItem.index]?.node"
            :index-path="visibleNodes[virtualItem.index]?.indexPath"
          >
            <TreeView.NodeContext v-slot="nodeState">
              <TreeView.BranchControl
                v-if="nodeState.isBranch"
                :style="{ paddingLeft: `${nodeState.depth * 22}px` }"
              >
                <TreeView.BranchIndicator>
                  <ChevronRight />
                </TreeView.BranchIndicator>
                <TreeView.BranchText>
                  <Folder />
                  {{ visibleNodes[virtualItem.index]?.node.name }}
                </TreeView.BranchText>
              </TreeView.BranchControl>
              <TreeView.Item
                v-else
                :style="{ paddingLeft: `${nodeState.depth * 22}px` }"
              >
                <TreeView.ItemText>
                  <File />
                  {{ visibleNodes[virtualItem.index]?.node.name }}
                </TreeView.ItemText>
              </TreeView.Item>
            </TreeView.NodeContext>
          </TreeView.NodeProvider>
        </div>
      </div>
    </TreeView.Tree>
  </TreeView.RootProvider>
</template>
