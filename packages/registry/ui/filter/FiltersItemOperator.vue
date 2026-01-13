<script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@vuetella/ui/components/dropdown-menu';
import { Button } from '@vuetella/ui/components/button';
import type { Operator } from './operator';
import { CheckIcon } from 'lucide-vue-next';
import { injectFilterContext, type FilterVariant, type FilterSize } from './FiltersProvider.vue';

defineProps<{
    options: Operator<any>[];
}>()

const modelValue = defineModel<string>();

const { variant, size } = injectFilterContext();

const sizeVariant: Record<FilterSize, string> = {
    'sm': 'text-xs',
    'default': 'text-sm',
    'lg': 'text-sm',
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