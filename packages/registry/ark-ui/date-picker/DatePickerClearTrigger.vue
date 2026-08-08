<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <DatePicker.ClearTrigger
    :class="cn('shrink-0', props.class)"
    data-slot="date-picker-clear-trigger"
  >
    <slot />
  </DatePicker.ClearTrigger>
</template>
