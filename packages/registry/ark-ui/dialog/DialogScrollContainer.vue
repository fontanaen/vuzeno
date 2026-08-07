<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn(
      'mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto',
      '-mx-[var(--px)] px-[var(--px)]',
      '[scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]',
      props.class,
    )"
    data-slot="dialog-scroll-container"
  >
    <slot />
  </div>
</template>

<style scoped>
div::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

div::-webkit-scrollbar-track {
  background: transparent;
}

div::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--border);
}

div::-webkit-scrollbar-thumb:hover {
  background-color: var(--muted-foreground);
}
</style>
