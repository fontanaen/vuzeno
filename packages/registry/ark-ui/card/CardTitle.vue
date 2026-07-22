<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.h3
    :class="
      cn('text-xl font-semibold leading-none tracking-tight', props.class)
    "
  >
    <slot />
  </ark.h3>
</template>
