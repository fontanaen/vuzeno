<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.TableCellTrigger
    :class="cn(
      'inline-flex w-full items-center justify-center rounded-md border-none bg-transparent p-0 text-[0.8125rem] font-normal font-[inherit] text-foreground outline-none select-none',
      'h-9 data-[view=day]:w-9 data-[view=month]:h-10 data-[view=year]:h-10',
      '[&:hover:not(:disabled):not([data-disabled]):not([data-selected]):not([data-in-range])]:bg-muted',
      'focus-visible:relative focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary',
      'data-focus:relative data-focus:z-1 data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary',
      'data-today:font-semibold data-today:text-foreground',
      'data-selected:bg-primary data-selected:font-medium data-selected:text-primary-foreground',
      'data-in-range:rounded-none data-in-range:bg-primary/10 data-in-range:text-primary-foreground',
      'data-range-start:rounded-none data-range-start:rounded-l-md data-range-start:bg-primary data-range-start:text-[var(--demo-coral-contrast)]',
      'data-range-end:rounded-none data-range-end:rounded-r-md data-range-end:bg-primary data-range-end:text-[var(--demo-coral-contrast)]',
      'data-[range-start][data-range-end]:rounded-md',
      'data-[view=day]:data-outside-range:text-muted-foreground data-[view=day]:data-outside-range:opacity-50',
      'data-[view=month]:data-outside-range:invisible data-[view=year]:data-outside-range:invisible',
      'data-disabled:cursor-not-allowed data-disabled:text-muted-foreground data-disabled:opacity-40',
      'data-unavailable:cursor-not-allowed data-unavailable:text-muted-foreground data-unavailable:line-through data-unavailable:opacity-40',
      props.class,
    )"
    data-slot="date-picker-table-cell-trigger"
  >
    <slot />
  </DatePicker.TableCellTrigger>
</template>
