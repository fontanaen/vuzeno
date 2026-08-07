<script setup lang="ts">
import { TreeView, type TreeViewBranchProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewBranchProps & { class?: HTMLAttributes["class"] }>();

const branchProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.Branch
    v-bind="branchProps"
    :class="cn('relative', props.class)"
    data-slot="tree-view-branch"
  >
    <slot />
  </TreeView.Branch>
</template>
