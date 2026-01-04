<script setup lang="ts">
import { Button } from '@vuetella/ui/components/button';
import { DropdownMenuTrigger } from '@vuetella/ui/components/dropdown-menu';
import { ListFilterPlusIcon } from 'lucide-vue-next';
import { injectFilterContext, type FilterSize } from './FiltersProvider.vue';
import { cn } from '@vuetella/ui/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes["class"];
}>()

const { variant, size } = injectFilterContext();

const sizeVariant: Record<FilterSize, string> = {
    'sm': 'size-7',
    'default': 'size-8',
    'lg': 'size-10',
} as const;
</script>

<template>
    <DropdownMenuTrigger as-child>
        <slot>
            <Button :class="cn(sizeVariant[size], props.class)" :variant="variant" size="icon" aria-label="Filter">
                <ListFilterPlusIcon />
            </Button>
        </slot>
    </DropdownMenuTrigger>
</template>