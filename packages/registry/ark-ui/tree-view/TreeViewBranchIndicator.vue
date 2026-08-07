<script setup lang="ts">
import { TreeView, type TreeViewBranchIndicatorProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewBranchIndicatorProps & { class?: HTMLAttributes["class"] }>();

const branchIndicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.BranchIndicator
    v-bind="branchIndicatorProps"
    :class="cn(
      'inline-flex items-center justify-center origin-center text-muted-foreground transition-transform duration-150 ease-out',
      'data-[state=open]:rotate-90',
      '[&_svg]:size-3.5',
      props.class,
    )"
    data-slot="tree-view-branch-indicator"
  >
    <slot />
  </TreeView.BranchIndicator>
</template>
