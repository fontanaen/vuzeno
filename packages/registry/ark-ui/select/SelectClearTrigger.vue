<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { XIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.ClearTrigger
    :class="cn(
      'pointer-events-auto flex items-center justify-center border-0 bg-transparent text-muted-foreground',
      'transition-colors duration-150 ease-out',
      '[&:hover:not(:disabled):not([data-disabled])]:text-foreground',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="select-clear-trigger"
  >
    <slot>
      <XIcon />
    </slot>
  </Select.ClearTrigger>
</template>
