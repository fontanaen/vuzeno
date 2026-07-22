<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.Label
    :class="cn(
      'text-sm font-medium leading-5 text-foreground select-none',
      props.class,
    )"
    data-slot="date-picker-label"
  >
    <slot />
  </DatePicker.Label>
</template>
