<script setup lang="ts">
import { useFieldContext } from "@ark-ui/vue";
import { DateInput } from "@ark-ui/vue/date-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { inputVariants } from "../input";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();

const field = useFieldContext();
</script>

<template>
  <DateInput.SegmentGroup
    :id="field?.ids.control"
    tabindex="0"
    :class="cn(
      inputVariants({ size: 'md' }),
      'flex w-auto',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
      'data-invalid:border-destructive',
      'data-invalid:data-focus:shadow-[0_0_0_1px_var(--destructive)]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      'data-readonly:bg-muted',
      props.class,
    )"
    data-slot="date-input-segment-group"
  >
    <DateInput.SegmentContext v-slot="segment">
      <slot v-bind="segment" />
    </DateInput.SegmentContext> 
  </DateInput.SegmentGroup>
</template>
