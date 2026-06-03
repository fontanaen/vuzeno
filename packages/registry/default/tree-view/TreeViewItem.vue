<script setup lang="ts" generic="T extends Record<string, unknown>">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { injectTreeRootContext, TreeItem, type TreeItemEmits, type TreeItemProps, useForwardPropsEmits } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { injectTreeViewContext } from "./TreeView.vue";
import { treeViewItemVariants } from "./variants";

const props = defineProps<
  TreeItemProps<T> & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<TreeItemEmits<T>>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);

const rootContext = injectTreeRootContext();
const { guideline } = injectTreeViewContext();

const expanded = computed(() => new Set(rootContext.expanded.value));

function isExpanded(value: T) {
  return expanded.value.has(rootContext.getKey(value));
}

function countVisibleDescendants(value: T) {
  const nodes = rootContext.getChildren(value);
  if (!nodes) {
    return 0;
  }

  let count = 0;

  for (const child of nodes) {
    count += 1;

    if (isExpanded(child)) {
      count += countVisibleDescendants(child);
    }
  }

  return count;
}

function countVisibleDescendantsRounded(value: T) {
  const nodes = rootContext.getChildren(value);
  if (!nodes?.length) {
    return 0;
  }

  const lastKey = rootContext.getKey(nodes.at(-1)!);
  let count = 0;

  for (const child of nodes) {
    const key = rootContext.getKey(child);

    if (key === lastKey) {
      return count + 1;
    }

    count += 1;

    if (isExpanded(child)) {
      count += countVisibleDescendants(child);
    }
  }

  return count;
}

const childrenCountStraight = computed(() => {
  if (!isExpanded(props.value)) {
    return 0;
  }

  return countVisibleDescendants(props.value);
});

const childrenCountRounded = computed(() => {
  if (!isExpanded(props.value)) {
    return 0;
  }

  return countVisibleDescendantsRounded(props.value);
});

const childrenCount = computed(() => {
  if (guideline.value === "straight") {
    return childrenCountStraight.value;
  }

  if (guideline.value === "rounded") {
    return childrenCountRounded.value;
  }

  return 0;
});
</script>

<template>
  <TreeItem
    v-slot="slotProps"
    :value="value"
    :level="level"
    v-bind="forwarded"
    as-child
  >
    <li
      data-slot="tree-view-item"
      :data-child="level > 1 ? '' : undefined"
      :data-has-children="childrenCount > 0 ? '' : undefined"
      :style="{
        '--tree-level': level,
        '--tree-item-children-count-straight': childrenCountStraight,
        '--tree-item-children-count-rounded': childrenCountRounded,
      }"
      :class="
        cn(
          treeViewItemVariants({ guideline }),
          props.class,
        )
      "
    >
      <slot v-bind="slotProps" />
    </li>
  </TreeItem>
</template>