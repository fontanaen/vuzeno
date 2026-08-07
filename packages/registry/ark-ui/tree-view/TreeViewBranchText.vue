<script setup lang="ts">
import { TreeView, type TreeViewBranchTextProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewBranchTextProps & { class?: HTMLAttributes["class"] }>();

const branchTextProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.BranchText
    v-bind="branchTextProps"
    :class="cn(
      'inline-flex flex-1 items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap',
      props.class,
    )"
    data-slot="tree-view-branch-text"
  >
    <slot />
  </TreeView.BranchText>
</template>
