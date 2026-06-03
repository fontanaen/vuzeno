<script lang="ts">
import { createContext, type TreeRootEmits, type TreeRootProps } from "reka-ui";
import { type HTMLAttributes, type Ref } from "vue";
import type { TreeViewItemVariants } from "./variants";

export type TreeViewProps<T = Record<string, unknown>> = TreeRootProps<T> & {
  guideline?: NonNullable<TreeViewItemVariants["guideline"]>;
  class?: HTMLAttributes["class"];
};

export type TreeViewEmits<T = Record<string, unknown>> = TreeRootEmits<T>;

export type TreeViewContext<P extends TreeViewProps<Record<string, unknown>>> = {
  guideline: Ref<NonNullable<P["guideline"]>>;
};

export const [injectTreeViewContext, provideTreeViewContext] = createContext<TreeViewContext<TreeViewProps>>("TreeViewContext");
</script>

<script setup lang="ts" generic="T extends Record<string, unknown>">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { TreeRoot, useForwardPropsEmits } from "reka-ui";
import { toRefs } from "vue";

const props = withDefaults(defineProps<TreeViewProps<T>>(), {
  guideline: "none",
});
const emits = defineEmits<TreeRootEmits<T>>();

const delegatedProps = reactiveOmit(props, "class", "guideline");
const forwarded = useForwardPropsEmits(delegatedProps, emits);

const { guideline } = toRefs(props);

provideTreeViewContext({
  guideline,
});
</script>

<template>
  <TreeRoot
    v-slot="slotProps"
    v-bind="forwarded"
    data-slot="tree-view"
    :class="cn(props.class)"
  >
    <slot v-bind="slotProps" />
  </TreeRoot>
</template>
