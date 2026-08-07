<script setup lang="ts">
import { NumberInput } from "@ark-ui/vue/number-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <NumberInput.Label
    :class="cn('text-sm font-medium text-foreground', props.class)"
    data-slot="number-input-label"
  >
    <slot />
  </NumberInput.Label>
</template>
