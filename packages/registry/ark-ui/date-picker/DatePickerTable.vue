<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.Table
    :class="cn('w-full border-separate border-spacing-0', props.class)"
    data-slot="date-picker-table"
  >
    <slot />
  </DatePicker.Table>
</template>
