<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.Input
    :class="cn(
      'box-border h-9 w-full min-w-0 rounded-md border border-input dark:bg-input/30 px-3 py-1 pr-16 font-[inherit] text-sm leading-5 text-foreground outline-none',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'placeholder:text-muted-foreground',
      'focus:border-ring focus:shadow-sm',
      'disabled:opacity-50 data-disabled:opacity-50 data-disabled:grayscale',
      'data-invalid:border-destructive data-invalid:focus:border-destructive data-invalid:focus:shadow-[0_0_0_1px_var(--destructive)]',
      props.class,
    )"
    data-slot="autocomplete-input"
  >
  <slot />
  </Combobox.Input>
</template>
