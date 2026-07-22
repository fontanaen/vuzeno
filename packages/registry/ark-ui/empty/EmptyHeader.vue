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
    data-slot="empty-header"
    :class="cn(
      'flex max-w-sm flex-col items-center gap-2 text-center',
      props.class,
    )"
  >
    <slot />
  </ark.div>
</template>
