<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn(
      'flex items-center gap-2 p-2 text-sm text-muted-foreground',
      '[&_svg]:size-4 [&_svg]:animate-spin',
      props.class,
    )"
    data-slot="autocomplete-status"
  >
    <slot />
  </div>
</template>
