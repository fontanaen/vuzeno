<script setup lang="ts">
import { TreeView, type TreeViewTreeProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewTreeProps & { class?: HTMLAttributes["class"] }>();

const treeProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.Tree
    v-bind="treeProps"
    :class="cn(
      'flex flex-col text-sm leading-5',
      '[&_svg]:size-4 [&_svg]:shrink-0',
      props.class,
    )"
    data-slot="tree-view-tree"
  >
    <slot />
  </TreeView.Tree>
</template>
