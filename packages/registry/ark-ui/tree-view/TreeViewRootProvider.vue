<script setup lang="ts" generic="T">
import { TreeView, type TreeViewRootProviderProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewRootProviderProps<T> & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.RootProvider
    v-bind="providerProps"
    :class="cn(
      'flex w-full max-w-80 flex-col gap-2 text-foreground',
      '[--tree-item-gap:0.5rem] [--tree-indentation:1rem] [--tree-padding-inline:0.75rem]',
      '[--tree-padding-block:0.375rem] [--tree-icon-size:1rem]',
      props.class,
    )"
    data-slot="tree-view-root-provider"
  >
    <slot />
  </TreeView.RootProvider>
</template>
