<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.Positioner>
    <DatePicker.Content
      :class="cn(
        'z-50 flex min-w-70 flex-col gap-3 rounded-lg border border-border bg-popover p-4 shadow-md outline-none',
        'data-[state=open]:animate-datepicker-fade-in data-[state=closed]:animate-datepicker-fade-out',
        props.class,
      )"
      data-slot="date-picker-content"
    >
      <slot />
    </DatePicker.Content>
  </DatePicker.Positioner>
</template>
