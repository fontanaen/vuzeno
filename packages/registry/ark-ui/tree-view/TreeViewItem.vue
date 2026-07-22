<script setup lang="ts">
import { TreeView, type TreeViewItemProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.Item
    v-bind="itemProps"
    :class="cn(
      'group/row relative flex w-full cursor-pointer items-center gap-2 rounded-md border-none bg-transparent font-[inherit] text-foreground text-start no-underline select-none',
      '[--tree-depth:calc(var(--depth)-1)]',
      '[--tree-indentation-offset:calc(var(--tree-indentation)*var(--tree-depth))]',
      '[--tree-icon-offset:calc(var(--tree-icon-size)*var(--tree-depth)*0.5)]',
      '[--tree-offset:calc(var(--tree-padding-inline)+var(--tree-indentation-offset)+var(--tree-icon-offset))]',
      'ps-(--tree-offset) pe-(--tree-padding-inline) py-(--tree-padding-block)',
      '[&:hover:not(:disabled):not([data-disabled])]:bg-muted',
      'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      'data-selected:bg-muted data-selected:text-primary',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="tree-view-item"
  >
    <slot />
  </TreeView.Item>
</template>
