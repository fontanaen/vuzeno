<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('text-foreground text-xs font-medium py-2 px-3 text-muted-foreground', props.class)">
    <slot />
  </div>
</template>