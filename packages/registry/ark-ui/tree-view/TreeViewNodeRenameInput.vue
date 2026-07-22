<script setup lang="ts">
import { TreeView, type TreeViewNodeRenameInputProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewNodeRenameInputProps & { class?: HTMLAttributes["class"] }>();

const nodeRenameInputProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.NodeRenameInput
    v-bind="nodeRenameInputProps"
    :class="cn(
      'box-content h-5 min-w-0 flex-1 rounded-sm border border-primary bg-popover px-1 py-0 -my-px text-foreground leading-inherit outline-none',
      'focus:outline-2 focus:-outline-offset-px focus:outline-ring',
      props.class,
    )"
    data-slot="tree-view-node-rename-input"
  >
    <slot />
  </TreeView.NodeRenameInput>
</template>
