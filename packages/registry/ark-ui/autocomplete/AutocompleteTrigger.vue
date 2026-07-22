<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.Trigger
    :class="cn(
      'pointer-events-auto flex items-center justify-center border-0 bg-transparent text-muted-foreground',
      '[&:hover:not(:disabled):not([data-disabled])]:text-foreground',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="autocomplete-trigger"
  >
    <slot />
  </Combobox.Trigger>
</template>
