<script setup lang="ts">
import { DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@vuetella/ui/components/dropdown-menu';
import { injectFilterContext } from './FilterProvider.vue';
import type { Field, Operator } from './field';
import { computed } from 'vue';

const props = defineProps<{
    field: Field;
}>()

const { filters } = injectFilterContext();

const defaultOperator = computed<Operator>(() => {
    const operator = props.field.operators.find(operator => operator.default) ?? props.field.operators[0];

    if (!operator) {
        throw new Error('No default operator found');
    }

    return operator;
})

const disabled = computed<boolean>(() => {
    return !props.field.multiple && filters.value.some(filter => filter.field === props.field.key) || false;
})

function addFilter() {
    filters.value.push({ field: props.field.key, operator: defaultOperator.value.value, value: defaultOperator.value.defaultValue ?? '' });
}

function addFilterWithValue(value: string | number) {
    filters.value.push({ field: props.field.key, operator: defaultOperator.value.value, value: value });
}
</script>

<template>                    
    <DropdownMenuItem v-if="!field.options" :disabled="disabled" @click="addFilter">
        <component :is="field.icon" class="size-4 text-muted-foreground" /> {{ field.name }}
    </DropdownMenuItem>
    
    <DropdownMenuSub v-else>
        <DropdownMenuSubTrigger :disabled="disabled" class="data-disabled:opacity-50">
            <component :is="field.icon" class="size-4 mr-2 text-muted-foreground" /> {{ field.name }}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
            <DropdownMenuSubContent>
                <DropdownMenuItem v-for="option in field.options" :disabled="disabled" :key="option" @click="addFilterWithValue(option)">{{ option }}</DropdownMenuItem>
            </DropdownMenuSubContent>
        </DropdownMenuPortal>
    </DropdownMenuSub>
</template>