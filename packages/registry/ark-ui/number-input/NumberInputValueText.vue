<script setup lang="ts">
import { NumberInput } from "@ark-ui/vue/number-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <NumberInput.ValueText
    :class="cn('text-sm tabular-nums text-foreground', props.class)"
    data-slot="number-input-value-text"
  >
    <slot />
  </NumberInput.ValueText>
</template>
