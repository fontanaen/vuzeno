<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <p :class="cn('leading-relaxed not-first:mt-6 font-light', props.class)">
    <slot />
  </p>
</template>