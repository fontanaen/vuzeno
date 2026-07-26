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
    :class="
      cn(
        'rounded-xl border bg-accent/30 dark:bg-card text-card-foreground shadow-sm p-1',
        props.class,
      )
    "
  >
    <slot />
  </ark.div>
</template>
