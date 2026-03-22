<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { type SegmentPart, TimeFieldInput } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  segment?: { value: string; part: SegmentPart };
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <TimeFieldInput v-if="segment" :part="segment.part" :class="cn('py-0.5 px-0.75 bg-transparent text-sm tabular-nums focus:outline-none focus:bg-muted focus:rounded-sm', props.class)">
    <slot>
      <template v-if="segment.part === 'dayPeriod'">
        {{ segment.value }}
      </template>
      <template v-else>
        {{ segment.value.length === 1 ? `0${segment.value}` : segment.value }}
      </template>
    </slot>
  </TimeFieldInput>
</template>