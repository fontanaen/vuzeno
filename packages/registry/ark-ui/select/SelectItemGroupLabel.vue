<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.ItemGroupLabel
    :class="cn(
      'px-2 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase',
      props.class,
    )"
    data-slot="select-item-group-label"
  >
    <slot />
  </Select.ItemGroupLabel>
</template>
