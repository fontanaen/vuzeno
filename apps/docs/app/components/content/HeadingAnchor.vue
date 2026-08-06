<script setup lang="ts">
import { HashIcon } from "@lucide/vue";

defineProps<{
  id?: string;
}>();
</script>

<template>
  <a
    v-if="id"
    :href="`#${id}`"
    class="relative inline text-inherit no-underline decoration-foreground/50 underline-offset-4 group-hover/heading:underline focus-visible:underline"
  >
    <HashIcon
      class="absolute -left-5 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-0 size-4 text-muted-foreground group-hover/heading:translate-x-0 group-focus-within/heading:translate-x-0 group-hover/heading:opacity-100 group-focus-within/heading:opacity-100 group-hover/heading:text-foreground group-focus-within/heading:text-foreground transition-all duration-150"
    />
    
    <slot />
  </a>
  <slot v-else />
</template>
