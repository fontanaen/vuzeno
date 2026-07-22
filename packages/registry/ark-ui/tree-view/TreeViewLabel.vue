<script setup lang="ts">
import { TreeView, type TreeViewLabelProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewLabelProps & { class?: HTMLAttributes["class"] }>();

const labelProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.Label
    v-bind="labelProps"
    :class="cn(
      'text-sm leading-5 font-medium text-foreground select-none',
      props.class,
    )"
    data-slot="tree-view-label"
  >
    <slot />
  </TreeView.Label>
</template>
