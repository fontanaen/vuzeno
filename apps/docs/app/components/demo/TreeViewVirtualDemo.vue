<script setup lang="ts">
import { TreeView, TreeViewIndicator, TreeViewItem, TreeViewVirtualizer } from "@vuzeno/registry/ui/tree-view";

type TreeNode = {
  id: string;
  title: string;
  children?: TreeNode[];
};

function buildFiles(prefix: string, count: number): TreeNode[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${prefix}-${index}`,
    title: `${prefix}-${index + 1}.ts`,
  }));
}

const items: TreeNode[] = [
  {
    id: "src",
    title: "src",
    children: buildFiles("src", 250),
  },
  {
    id: "lib",
    title: "lib",
    children: buildFiles("lib", 150),
  },
];

const defaultExpanded = ["src", "lib"];

const itemClass = "flex min-h-8 items-center gap-2 rounded-sm px-2 text-xs outline-none hover:bg-accent/30 cursor-default select-none";
const indicatorClass = "inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground";
</script>

<template>
  <TreeView
    :items
    :get-key="(item) => item.id"
    :default-expanded="defaultExpanded"
    class="w-full max-w-sm rounded-lg border p-2 h-96 overflow-y-auto"
  >
    <TreeViewVirtualizer
      v-slot="{ item }"
      :text-content="(node) => node.title"
      :estimate-size="20"
      class="overflow-y-auto"
    >
      <TreeViewItem
        v-slot="slotProps"
        v-bind="item.bind"
        :class="itemClass"
      >
        <TreeViewIndicator
          v-bind="slotProps"
          :has-children="item.hasChildren"
          :class="indicatorClass"
        />
        {{ item.value.title }}
      </TreeViewItem>
    </TreeViewVirtualizer>
  </TreeView>
</template>
