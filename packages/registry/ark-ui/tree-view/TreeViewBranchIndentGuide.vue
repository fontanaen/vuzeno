<script setup lang="ts">
import { TreeView, type TreeViewBranchIndentGuideProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewBranchIndentGuideProps & { class?: HTMLAttributes["class"] }>();

const indentGuideProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.BranchIndentGuide
    v-bind="indentGuideProps"
    :class="cn(
      'absolute z-1 h-full w-px bg-border',
      '[--tree-depth:calc(var(--depth)-1)]',
      '[--tree-indentation-offset:calc(var(--tree-indentation)*var(--tree-depth))]',
      '[--tree-offset:calc(var(--tree-padding-inline)+var(--tree-indentation-offset))]',
      '[--tree-icon-offset:calc(var(--tree-icon-size)*0.5*var(--depth))]',
      'inset-s-[calc(var(--tree-offset)+var(--tree-icon-offset))]',
      props.class,
    )"
    data-slot="tree-view-branch-indent-guide"
  >
    <slot />
  </TreeView.BranchIndentGuide>
</template>
