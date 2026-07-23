<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { Button } from "@vuzeno/ui/components/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@vuzeno/ui/components/dropdown-menu";
import { type FiltersSize, injectFiltersContext } from "./context";
import type { Operator } from "./operator";
import { DropdownItemSizeVariant, PopoverTriggerSizeVariant } from "./sizes";

defineProps<{
  options: Operator<unknown>[];
}>();

const modelValue = defineModel<string>();

const { variant, size } = injectFiltersContext();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child class="h-auto">
      <Button
        :variant="variant"
        :class="PopoverTriggerSizeVariant[size]"
        aria-label="Filter operator"
      >
        {{ options.find(option => option.value === modelValue)?.label }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuGroup>
        <DropdownMenuItem v-for="option in options" :key="option.value" @click="modelValue = option.value" :class="DropdownItemSizeVariant[size]">
          {{ option.label }}
          <CheckIcon class="ml-auto size-4 text-primary" :class="{ 'opacity-0': option.value !== modelValue }" />
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
