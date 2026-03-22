<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { type SegmentPart, TimeFieldRoot, type TimeFieldRootEmits, type TimeFieldRootProps, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<TimeFieldRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<TimeFieldRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);

function getSegment(segments: { value: string; part: SegmentPart }[], type: SegmentPart) {
  return segments.find((segment) => segment.part === type);
}
</script>

<template>
  <TimeFieldRoot 
    v-bind="forwarded" 
    v-slot="{ segments }"
    :class="cn(
      'flex items-center gap-1 dark:bg-input/30 border border-input h-9 rounded-lg px-2 w-fit', 
      'data-disabled:cursor-not-allowed data-disabled:opacity-50',
      'data-invalid:border-destructive',
      props.class
    )"
  >
    <slot 
      :hour="getSegment(segments, 'hour')"
      :minute="getSegment(segments, 'minute')"
      :second="getSegment(segments, 'second')"
      :day-period="getSegment(segments, 'dayPeriod')"
      :segments="segments"
    />
  </TimeFieldRoot>
</template>