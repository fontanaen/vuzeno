<script setup lang="ts">
import { TreeView, TreeViewIndicator, TreeViewItem } from "@vuzeno/registry/ui/tree-view";
import { FileIcon } from "lucide-vue-next";
import { ref } from "vue";
import { TypeScriptIcon, ViteIcon, VueDotjsIcon } from "vue3-simple-icons";

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
          {
            id: "ui",
            title: "ui",
            children: [
              { id: "button", title: "Button.vue" },
              { id: "input", title: "Input.vue" },
              { id: "select", title: "Select.vue" },
            ],
          },
        ],
      },
      {
        id: "pages",
        title: "pages",
        children: [
          { id: "home", title: "Home.vue" },
          { id: "about", title: "About.vue" },
          { id: "contact", title: "Contact.vue" },
        ],
      },
      {
        id: "App.vue",
        title: "App.vue",
      },
      {
        id: "main.ts",
        title: "main.ts",
      },
    ],
  },
  {
    id: "vite.config.ts",
    title: "vite.config.ts",
  },
];

function getFileIcon(filename: string) {
  if (filename.endsWith(".vue")) {
    return h(VueDotjsIcon, { class: "size-4 text-[#4FC08D]" });
  }

  if (filename === "vite.config.ts") {
    return h(ViteIcon, { class: "size-4 text-[#9135FF]" });
  }

  if (filename.endsWith(".ts")) {
    return h(TypeScriptIcon, { class: "size-4 text-[#3178C6]" });
  }

  return h(FileIcon, { class: "size-4" });
}

const expanded = ref(["documents", "vuetify", "src", "material", "material-src"]);
</script>

<template>
  <TreeView
    v-slot="{ flattenItems }"
    v-model:expanded="expanded"
    guideline="straight"
    :items
    :get-key="(item) => item.id"
    class="w-full max-w-sm rounded-lg border p-2"
  >
    <TreeViewItem
      v-for="item in flattenItems"
      :key="item._id"
      v-slot="slotProps"
      v-bind="item.bind"
      class="flex min-h-8 items-center gap-2 rounded-sm px-2 text-xs outline-none hover:bg-accent/30 data-selected:bg-accent cursor-default select-none"
    >
      <TreeViewIndicator
        v-bind="slotProps"
        :has-children="item.hasChildren"
        class="inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground"
      />
      <component v-if="item.hasChildren === false" :is="getFileIcon(item.value.title)" />
      {{ item.value.title }}
    </TreeViewItem>
  </TreeView>
</template>
