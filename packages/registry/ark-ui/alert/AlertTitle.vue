<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.h5
    data-slot="alert-title"
    :class="cn('mb-1 font-medium leading-none tracking-tight', props.class)"
  >
    <slot />
  </ark.h5>
</template>
