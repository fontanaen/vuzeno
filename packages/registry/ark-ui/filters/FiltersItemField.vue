<script setup lang="ts">
import { ButtonGroupText } from "@vuzeno/registry/ui/button-group";
import { cn } from "cnfast";
import { injectFiltersContext } from "./context";
import type { BaseField } from "./field";
import type { FiltersSize, FiltersVariant } from "./variants";

defineProps<{
  field: BaseField;
}>();

const { variant, size } = injectFiltersContext();

const variantVariant: Record<FiltersVariant, string> = {
  outline: "bg-input dark:bg-input/30",
  secondary: "bg-secondary border-none",
} as const;

const sizeVariant: Record<FiltersSize, string> = {
  sm: "text-xs [&>svg]:size-3.5 px-2! h-8",
  md: "text-sm [&>svg]:size-4 px-3! h-9",
  lg: "text-sm [&>svg]:size-4 px-4! h-10",
} as const;
</script>

<template>
  <ButtonGroupText
    :class="cn(variantVariant[variant], sizeVariant[size], 'px-3 w-fit text-nowrap dark:border-input')"
  >
    <slot />
  </ButtonGroupText>
</template>
