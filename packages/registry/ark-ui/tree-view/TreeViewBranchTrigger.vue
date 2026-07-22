<script setup lang="ts">
import { TreeView, type TreeViewBranchTriggerProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewBranchTriggerProps & { class?: HTMLAttributes["class"] }>();

const branchTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.BranchTrigger
    v-bind="branchTriggerProps"
    :class="cn('inline-flex items-center justify-center', props.class)"
    data-slot="tree-view-branch-trigger"
  >
    <slot />
  </TreeView.BranchTrigger>
</template>
