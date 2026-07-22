<script setup lang="ts">
import { DateInput } from "@ark-ui/vue/date-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DateInput.Control
    :class="cn(
      'flex w-full flex-wrap items-center gap-2',
      '[&>span]:shrink-0 [&>span]:text-sm [&>span]:text-muted-foreground',
      props.class,
    )"
    data-slot="date-input-control"
  >
    <slot />
  </DateInput.Control>
</template>
