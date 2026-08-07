<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.ValueText
    :class="cn(props.class)"
    data-slot="date-picker-value-text"
  >
    <slot />
  </DatePicker.ValueText>
</template>
