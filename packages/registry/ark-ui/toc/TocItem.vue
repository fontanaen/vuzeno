<script lang="ts">
import { createContext } from "@ark-ui/vue";
import type { ComputedRef } from "vue";

export type TocItemContext = {
  value: ComputedRef<string>;
  depth: ComputedRef<number>;
  isActive: ComputedRef<boolean>;
};

export const [provideTocItemContext, injectTocItemContext] = createContext<TocItemContext>("TocItemContext");
</script>

<script setup lang="ts">
import { cn } from "cnfast";
import { computed, type HTMLAttributes, onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import { injectTocContext } from "./TocRoot.vue";

const props = withDefaults(
  defineProps<{
    value: string;
    depth?: number;
    class?: HTMLAttributes["class"];
  }>(),
  {
    depth: 2,
  },
);

const toc = injectTocContext();
const itemRef = useTemplateRef<HTMLElement>("itemRef");

const value = computed(() => props.value);
const depth = computed(() => props.depth);
const isActive = computed(() => toc.activeValue.value === props.value);

provideTocItemContext({ value, depth, isActive });

onMounted(() => {
  const element = itemRef.value;
  if (!element) {
    return;
  }

  toc.registerItem({
    value: props.value,
    depth: props.depth,
    element,
  });
});

onBeforeUnmount(() => {
  toc.unregisterItem(props.value);
});
</script>

<template>
  <li
    ref="itemRef"
    data-slot="toc-item"
    :data-active="isActive || undefined"
    :data-depth="depth"
    :class="cn('data-[depth=3]:pl-3 data-[depth=4]:pl-5', props.class)"
  >
    <slot />
  </li>
</template>
