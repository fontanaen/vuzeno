<script setup lang="ts">
import { TreeView, type TreeViewItemTextProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewItemTextProps & { class?: HTMLAttributes["class"] }>();

const itemTextProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.ItemText
    v-bind="itemTextProps"
    :class="cn(
      'inline-flex flex-1 items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap',
      props.class,
    )"
    data-slot="tree-view-item-text"
  >
    <slot />
  </TreeView.ItemText>
</template>
