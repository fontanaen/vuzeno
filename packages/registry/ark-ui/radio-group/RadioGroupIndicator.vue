<script setup lang="ts">
import { RadioGroup } from "@ark-ui/vue/radio-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <RadioGroup.Indicator
    :class="cn(
      'absolute size-4 rounded-full bg-primary',
      'transition-[top,left] duration-150 ease-out',
      props.class,
    )"
    data-slot="radio-group-indicator"
  >
    <slot />
  </RadioGroup.Indicator>
</template>
