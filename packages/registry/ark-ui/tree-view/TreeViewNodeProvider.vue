<script setup lang="ts" generic="T">
import { TreeView, type TreeViewNodeProviderProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewNodeProviderProps<T> & { class?: HTMLAttributes["class"] }>();

const nodeProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.NodeProvider
    v-bind="nodeProviderProps"
    :class="cn(props.class)"
    data-slot="tree-view-node-provider"
  >
    <slot />
  </TreeView.NodeProvider>
</template>
