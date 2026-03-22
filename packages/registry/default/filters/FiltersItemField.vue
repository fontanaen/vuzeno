<script setup lang="ts">
import { ButtonGroupText } from "@vuzeno/ui/components/button-group";
import { Label } from "@vuzeno/ui/components/label";
import { cn } from "@vuzeno/ui/lib/utils";
import { type FilterSize, type FilterVariant, injectFilterContext } from "./FiltersProvider.vue";

const { variant, size } = injectFilterContext();

const variantVariant: Record<FilterVariant, string> = {
  outline: "bg-background",
  secondary: "bg-secondary border-none",
} as const;

const sizeVariant: Record<FilterSize, string> = {
  sm: "text-xs [&>svg]:size-3.5",
  default: "text-sm [&>svg]:size-4",
  lg: "text-sm [&>svg]:size-4",
} as const;
</script>

<template>
  <ButtonGroupText data-slot="button-group-text" :class="cn(variantVariant[variant], sizeVariant[size], 'h-auto px-3 w-fit text-nowrap dark:bg-input/30 dark:border-input')" as-child>
    <Label>
      <slot />
    </Label>
  </ButtonGroupText>
</template>