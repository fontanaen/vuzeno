<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.ViewControl
    :class="cn('flex items-center justify-between gap-2', props.class)"
    data-slot="date-picker-view-control"
  >
    <slot />
  </DatePicker.ViewControl>
</template>
