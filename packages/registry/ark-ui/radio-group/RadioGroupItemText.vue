<script setup lang="ts">
import { RadioGroup } from "@ark-ui/vue/radio-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <RadioGroup.ItemText
    :class="cn(
      'text-sm leading-5 text-foreground select-none',
      props.class,
    )"
    data-slot="radio-group-item-text"
  >
    <slot />
  </RadioGroup.ItemText>
</template>
