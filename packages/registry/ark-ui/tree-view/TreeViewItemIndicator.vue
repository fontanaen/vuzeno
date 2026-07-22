<script setup lang="ts">
import { TreeView, type TreeViewItemIndicatorProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewItemIndicatorProps & { class?: HTMLAttributes["class"] }>();

const itemIndicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.ItemIndicator
    v-bind="itemIndicatorProps"
    :class="cn(
      'flex shrink-0 items-center justify-center text-primary',
      '[&_svg]:size-3.5',
      props.class,
    )"
    data-slot="tree-view-item-indicator"
  >
    <slot />
  </TreeView.ItemIndicator>
</template>
