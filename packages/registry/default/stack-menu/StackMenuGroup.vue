<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('flex flex-col gap-2 py-2', props.class)">
    <slot />
  </div>
</template>