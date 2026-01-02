<script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@vuetella/ui/components/dropdown-menu';
import { Button } from '@vuetella/ui/components/button';
import type { Operator } from './field';
import { CheckIcon } from 'lucide-vue-next';

defineProps<{
    options: Operator[];
}>()

const modelValue = defineModel<string>();
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child class="h-auto">
            <Button ref="triggerEl" class="px-3" variant="outline" aria-label="Filter Operator">
                {{ options.find(option => option.value === modelValue)?.name }}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
            <DropdownMenuGroup>
                <DropdownMenuItem v-for="option in options" :key="option.value" @click="modelValue = option.value">
                    {{ option.name }}
                    <CheckIcon class="ml-auto size-4 text-primary" :class="{ 'opacity-0': option.value !== modelValue }" />
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>