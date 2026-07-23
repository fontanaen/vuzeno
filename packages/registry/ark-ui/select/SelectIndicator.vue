<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { ChevronsUpDownIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.Indicator
    :class="cn(
      'flex shrink-0 items-center justify-center text-muted-foreground',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="select-indicator"
  >
    <slot>
      <ChevronsUpDownIcon />
    </slot>
  </Select.Indicator>
</template>
