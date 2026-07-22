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
    data-slot="empty-content"
    :class="cn(
      'flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm',
      props.class,
    )"
  >
    <slot />
  </ark.div>
</template>
