<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.WeekNumberHeaderCell    
    :class="cn(
      'w-8 bg-muted px-0 py-2 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase',
      props.class,
    )"
    data-slot="date-picker-week-number-header-cell"
  >
    <slot />
  </DatePicker.WeekNumberHeaderCell>
</template>
