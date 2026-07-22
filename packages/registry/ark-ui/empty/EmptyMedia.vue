<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import type { EmptyMediaVariants } from ".";
import { emptyMediaVariants } from ".";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  variant?: EmptyMediaVariants["variant"];
}>();
</script>

<template>
  <ark.div
    data-slot="empty-icon"
    :data-variant="variant"
    :class="cn(emptyMediaVariants({ variant }), props.class)"
  >
    <slot />
  </ark.div>
</template>
