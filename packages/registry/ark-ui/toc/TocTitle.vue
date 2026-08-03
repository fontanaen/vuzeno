<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.p
    data-slot="toc-title"
    :class="cn('text-muted-foreground mb-2 text-xs font-medium', props.class)"
  >
    <slot />
  </ark.p>
</template>
