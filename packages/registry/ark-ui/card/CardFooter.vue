<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.div :class="cn('flex items-center px-3 pt-1.5 pb-0.5', props.class)">
    <slot />
  </ark.div>
</template>
