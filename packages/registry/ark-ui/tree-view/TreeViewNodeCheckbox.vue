<script setup lang="ts">
import { TreeView, type TreeViewNodeCheckboxProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewNodeCheckboxProps & { class?: HTMLAttributes["class"] }>();

const nodeCheckboxProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.NodeCheckbox
    v-bind="nodeCheckboxProps"
    :class="cn(
      'inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-input bg-background text-primary-foreground',
      'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
      'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      '[&_svg]:size-3',
      props.class,
    )"
    data-slot="tree-view-node-checkbox"
  >
    <slot />
  </TreeView.NodeCheckbox>
</template>
