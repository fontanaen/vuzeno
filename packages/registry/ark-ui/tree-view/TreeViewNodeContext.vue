<script setup lang="ts">
import { TreeView } from "@ark-ui/vue/tree-view";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TreeView.NodeContext
    :class="cn(props.class)"
    data-slot="tree-view-node-context"
    v-slot="nodeState"
  >
    <slot v-bind="nodeState" />
  </TreeView.NodeContext>
</template>
