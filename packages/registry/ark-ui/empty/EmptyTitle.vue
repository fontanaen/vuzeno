<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.div
    data-slot="empty-title"
    :class="cn('text-lg font-medium tracking-tight', props.class)"
  >
    <slot />
  </ark.div>
</template>
