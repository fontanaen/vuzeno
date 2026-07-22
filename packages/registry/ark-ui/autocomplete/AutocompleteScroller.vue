<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { ref } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
const rootRef = ref<HTMLDivElement | null>(null);

defineExpose({ rootRef });
</script>

<template>
  <div
    ref="rootRef"
    :class="cn(
      'box-border h-[min(300px,var(--total-size))] max-h-[var(--available-height,300px)] overflow-auto overscroll-contain scroll-py-1',
      '[scrollbar-width:thin] [scrollbar-color:var(--border)_var(--popover)]',
      props.class,
    )"
    data-slot="autocomplete-scroller"
  >
    <slot />
  </div>
</template>
