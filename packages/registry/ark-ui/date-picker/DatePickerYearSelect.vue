<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { ChevronDownIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <label 
    :class="cn(
      'flex items-center gap-2 h-7 relative rounded-md border border-border dark:bg-input/30 text-[0.8125rem] font-[inherit] text-foreground outline-none appearance-none',
      'focus-visible:border-ring focus-visible:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'has-focus:ring-2 has-focus:ring-primary has-focus:border-transparent',
      props.class,
    )"
  >
    <DatePicker.YearSelect class="appearance-none outline-none pl-3 pr-7 py-1" />
    <ChevronDownIcon class="absolute top-1/2 -translate-y-1/2 right-2 size-4 text-white select-none pointer-events-none" />
  </label>
</template>
