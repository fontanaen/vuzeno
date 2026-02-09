<script setup lang="ts">
import { CheckIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { type FilterSize, type FilterVariant, injectFilterContext } from "./FiltersProvider.vue";
import type { Operator } from "./operator";

defineProps<{
  options: Operator<unknown>[];
}>();

const modelValue = defineModel<string>();

const { variant, size } = injectFilterContext();

const sizeVariant: Record<FilterSize, string> = {
  sm: "text-xs",
  default: "text-sm",
  lg: "text-sm",
} as const;
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child class="h-auto">
            <Button ref="triggerEl" :class="sizeVariant[size]" :variant="variant" :size="size" aria-label="Filter Operator">
                {{ options.find(option => option.value === modelValue)?.label }}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
            <DropdownMenuGroup>
                <DropdownMenuItem v-for="option in options" :key="option.value" @click="modelValue = option.value">
                    {{ option.label }}
                    <CheckIcon class="ml-auto size-4 text-primary" :class="{ 'opacity-0': option.value !== modelValue }" />
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>