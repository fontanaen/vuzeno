<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.Label
    :class="cn(
      'text-sm leading-5 font-medium text-foreground select-none',
      props.class,
    )"
    data-slot="select-label"
  >
    <slot />
  </Select.Label>
</template>
