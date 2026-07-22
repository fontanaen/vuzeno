<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.RangeText
    :class="cn('text-sm font-semibold text-foreground', props.class)"
    data-slot="date-picker-range-text"
  >
    <slot />
  </DatePicker.RangeText>
</template>
