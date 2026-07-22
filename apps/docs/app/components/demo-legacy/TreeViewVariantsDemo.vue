<script setup lang="ts">
import { TreeView, TreeViewIndicator, TreeViewItem } from "@vuzeno/registry/legacy/tree-view";

type TreeNode = {
  id: string;
  title: string;
  children?: TreeNode[];
};

const items: TreeNode[] = [
  {
    id: "src",
    title: "src",
    children: [
      {
        id: "components",
        title: "components",
        children: [
          { id: "button", title: "Button.vue" },
          { id: "input", title: "Input.vue" },
        ],
      },
      { id: "app", title: "App.vue" },
    ],
  },
  { id: "package.json", title: "package.json" },
];

const defaultExpanded = ["src", "components"];

const itemClass = "flex min-h-8 items-center gap-2 rounded-sm px-2 text-xs outline-none hover:bg-accent/30 cursor-default select-none";
const indicatorClass = "inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground";
</script>

<template>
  <div class="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
    <div class="space-y-2">
      <p class="text-xs font-medium text-muted-foreground">Straight</p>
      <TreeView
        v-slot="{ flattenItems }"
        guideline="straight"
        :items
        :get-key="(item) => item.id"
        :default-expanded="defaultExpanded"
        class="rounded-lg border p-2"
      >
        <TreeViewItem
          v-for="item in flattenItems"
          :key="item._id"
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
      </TreeView>
    </div>

    <div class="space-y-2">
      <p class="text-xs font-medium text-muted-foreground">Rounded</p>
      <TreeView
        v-slot="{ flattenItems }"
        guideline="rounded"
        :items
        :get-key="(item) => item.id"
        :default-expanded="defaultExpanded"
        class="rounded-lg border p-2"
      >
        <TreeViewItem
          v-for="item in flattenItems"
          :key="item._id"
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
      </TreeView>
    </div>
  </div>
</template>
