<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="menu-empty"
    :class="cn('px-2 py-1.5 text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </div>
</template>
