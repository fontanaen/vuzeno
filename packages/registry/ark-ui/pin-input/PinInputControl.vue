<script setup lang="ts">
import { PinInput } from "@ark-ui/vue/pin-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <PinInput.Control
    :class="cn(
      'inline-flex gap-2',
      props.class,
    )"
    data-slot="pin-input-control"
  >
    <slot />
  </PinInput.Control>
</template>
