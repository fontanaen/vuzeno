<script setup lang="ts">
import { DateInput, type DateInputSegmentProps } from "@ark-ui/vue/date-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DateInputSegmentProps & { class?: HTMLAttributes["class"] }>();

const segmentProps = reactiveOmit(props, "class");
</script>

<template>
  <DateInput.Segment
    v-bind="segmentProps"
    :class="cn(
      'inline-flex min-w-[2ch] items-center justify-center rounded-[0.2rem] px-1 text-center tabular-nums text-foreground caret-transparent outline-none',
      'data-placeholder-shown:text-muted-foreground',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[type=literal]:min-w-0 data-[type=literal]:p-0 data-[type=literal]:text-muted-foreground data-[type=literal]:select-none',
      props.class,
    )"
    data-slot="date-input-segment"
  >
    <slot />
  </DateInput.Segment>
</template>
