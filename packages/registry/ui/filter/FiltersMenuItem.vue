<script setup lang="ts">
import { DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@vuetella/ui/components/dropdown-menu';
import { injectFilterContext } from './FiltersProvider.vue';
import type { Field } from './field';
import { OperatorDefaultValue, type Operator } from './operator';
import { computed, isVNode } from 'vue';
import type { FilterValue } from './filter';

const props = defineProps<{
    field: Field;
}>()

const { filters } = injectFilterContext();

const defaultOperator = computed<Operator<any>>(() => {
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
    filters.value.push({ 
        field: props.field.key, 
        operator: defaultOperator.value.value, 
        value: defaultOperator.value.defaultValue ?? OperatorDefaultValue[defaultOperator.value.inputType as keyof typeof OperatorDefaultValue]
    });
}

function addFilterWithValue(value: FilterValue) {
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
                <DropdownMenuItem v-for="option in field.options?.items" :disabled="disabled" :key="option?.value" @click="addFilterWithValue(option?.value)">
                    <template v-if="field.options?.optionDisplay">
                        <template v-if="isVNode(field.options?.optionDisplay(option))">
                            <component :is="field.options?.optionDisplay(option)" />
                        </template>
                        <template v-else>
                            {{ field.options?.optionDisplay(option) }}
                        </template>
                    </template>
                    <template v-else>
                        {{ option?.label }}
                    </template>
                </DropdownMenuItem>
            </DropdownMenuSubContent>
        </DropdownMenuPortal>
    </DropdownMenuSub>
</template>