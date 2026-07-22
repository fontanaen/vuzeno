<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.Control
    :class="cn('flex w-full items-center gap-2', props.class)"
    data-slot="date-picker-control"
  >
    <slot />
  </DatePicker.Control>
</template>
