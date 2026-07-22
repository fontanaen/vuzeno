<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.div :class="cn('border border-border bg-muted p-3 rounded-lg', props.class)">
    <slot />
  </ark.div>
</template>
