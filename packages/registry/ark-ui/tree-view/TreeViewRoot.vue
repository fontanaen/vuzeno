<script setup lang="ts" generic="T extends TreeNode">
import { useForwardPropsEmits } from "@ark-ui/vue";
import {
  type TreeNode,
  TreeView,
  type TreeViewCheckedChangeDetails,
  type TreeViewExpandedChangeDetails,
  type TreeViewFocusChangeDetails,
  type TreeViewLoadChildrenCompleteDetails,
  type TreeViewLoadChildrenErrorDetails,
  type TreeViewRenameCompleteDetails,
  type TreeViewRenameStartDetails,
  type TreeViewRootProps,
  type TreeViewSelectionChangeDetails,
} from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewRootProps<T> & { class?: HTMLAttributes["class"] }>();

const emits = defineEmits<{
  /**
   * Called when the tree is opened or closed
   */
  expandedChange: [details: TreeViewExpandedChangeDetails];
  /**
   * Called when the focused node changes
   */
  focusChange: [details: TreeViewFocusChangeDetails];
  /**
   * Called when the selection changes
   */
  selectionChange: [details: TreeViewSelectionChangeDetails];
  /**
   * Called when the checked value changes
   */
  checkedChange: [details: TreeViewCheckedChangeDetails];
  /**
   * A function that is called when the children are loaded successfully.
   */
  loadChildrenComplete: [details: TreeViewLoadChildrenCompleteDetails<T>];
  /**
   * A function that is called when there is an error loading the children.
   */
  loadChildrenError: [details: TreeViewLoadChildrenErrorDetails<T>];
  /**
   * Called when a node starts being renamed
   */
  renameStart: [details: TreeViewRenameStartDetails<T>];
  /**
   * Called before a rename is completed. Return false to prevent the rename.
   */
  beforeRename: [details: TreeViewRenameCompleteDetails];
  /**
   * Called when a node label rename is completed
   */
  renameComplete: [details: TreeViewRenameCompleteDetails];
  /**
   * Called when the expanded value changes
   */
  "update:expandedValue": [value: string[]];
  /**
   * Called when the focused value changes
   */
  "update:focusedValue": [value: string | null];
  /**
   * Called when the selected value changes
   */
  "update:selectedValue": [value: string[]];
  /**
   * Called when the checked value changes
   */
  "update:checkedValue": [value: string[]];
}>();

const rootProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(rootProps, emits);
</script>

<template>
  <TreeView.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-80 flex-col gap-2 text-foreground',
      '[--tree-item-gap:0.5rem] [--tree-indentation:1rem] [--tree-padding-inline:0.75rem]',
      '[--tree-padding-block:0.375rem] [--tree-icon-size:1rem]',
      props.class,
    )"
    data-slot="tree-view"
  >
    <slot />
  </TreeView.Root>
</template>
