<script setup lang="ts">
import { RadioGroup } from "@ark-ui/vue/radio-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <RadioGroup.ItemControl
    :class="cn(
      'inline-flex shrink-0 size-4 items-center justify-center rounded-full border border-accent bg-transparent',
      'data-[state=checked]:border-4 data-[state=checked]:border-primary',
      'data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-primary',
      props.class,
    )"
    data-slot="radio-group-item-control"
  >
    <slot />
  </RadioGroup.ItemControl>
</template>
