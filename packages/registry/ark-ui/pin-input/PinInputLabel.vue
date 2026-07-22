<script setup lang="ts">
import { PinInput } from "@ark-ui/vue/pin-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <PinInput.Label
    :class="cn(
      'text-sm font-medium text-foreground',
      props.class,
    )"
    data-slot="pin-input-label"
  >
    <slot />
  </PinInput.Label>
</template>
