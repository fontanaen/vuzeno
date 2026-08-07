<script setup lang="ts">
import { DateInput } from "@ark-ui/vue/date-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DateInput.Label
    :class="cn(
      'text-sm font-medium leading-5 text-foreground select-none',
      'data-disabled:opacity-50',
      'data-invalid:text-destructive',
      props.class,
    )"
    data-slot="date-input-label"
  >
    <slot />
  </DateInput.Label>
</template>
