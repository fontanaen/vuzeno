<script setup lang="ts">
import { ButtonGroupText } from "@vuzeno/ui/components/button-group";
import { Label } from "@vuzeno/ui/components/label";
import { cn } from "@vuzeno/ui/lib/utils";
import { type FiltersSize, type FiltersVariant, injectFiltersContext } from "./context";
import type { BaseField } from "./field";

defineProps<{
  field: BaseField;
}>();

const { variant, size } = injectFiltersContext();

const variantVariant: Record<FiltersVariant, string> = {
  outline: "bg-background",
  secondary: "bg-secondary border-none",
} as const;

const sizeVariant: Record<FiltersSize, string> = {
  sm: "text-xs [&>svg]:size-3.5 px-2!",
  md: "text-sm [&>svg]:size-4 px-3!",
  lg: "text-sm [&>svg]:size-4 px-4!",
} as const;
</script>

<template>
  <ButtonGroupText
    data-slot="button-group-text"
    :class="cn(variantVariant[variant], 'h-auto px-3 w-fit text-nowrap dark:border-input')"
    as-child
  >
    <Label :class="cn(sizeVariant[size], 'h-auto px-3 w-fit text-nowrap dark:border-input')">
      <slot>
        <component :is="field.icon" v-if="field.icon" class="text-muted-foreground" />
        {{ field.label }}
      </slot>
    </Label>
  </ButtonGroupText>
</template>
