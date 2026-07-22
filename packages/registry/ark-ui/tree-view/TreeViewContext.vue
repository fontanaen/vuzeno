<script setup lang="ts">
import { TreeView } from "@ark-ui/vue/tree-view";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <TreeView.Context
    :class="cn(props.class)"
    data-slot="tree-view-context"
    v-slot="tree"
  >
    <slot v-bind="tree" />
  </TreeView.Context>
</template>
