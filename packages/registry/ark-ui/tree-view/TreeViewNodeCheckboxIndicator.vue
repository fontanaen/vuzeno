<script setup lang="ts">
import { TreeView, type TreeViewNodeCheckboxIndicatorProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewNodeCheckboxIndicatorProps & { class?: HTMLAttributes["class"] }>();

const nodeCheckboxIndicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.NodeCheckboxIndicator
    v-bind="nodeCheckboxIndicatorProps"
    :class="cn('flex items-center justify-center', props.class)"
    data-slot="tree-view-node-checkbox-indicator"
  >
    <slot />
  </TreeView.NodeCheckboxIndicator>
</template>
