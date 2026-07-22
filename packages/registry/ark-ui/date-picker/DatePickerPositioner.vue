<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.Positioner
    :class="cn(props.class)"
    data-slot="date-picker-positioner"
  >
    <slot />
  </DatePicker.Positioner>
</template>
