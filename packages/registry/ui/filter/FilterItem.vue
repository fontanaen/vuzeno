<script setup lang="ts">
import { ButtonGroup } from '@vuetella/ui/components/button-group';
import FilterItemField from './FilterItemField.vue';
import FilterItemOperator from './FilterItemOperator.vue';
import FilterItemValue from './FilterItemValue.vue';
import { Button } from '@vuetella/ui/components/button';
import { XIcon } from 'lucide-vue-next';
import type { Filter } from './filter';
import type { Field, Operator } from './field';
import { computed } from 'vue';
import { RovingFocusGroup } from 'reka-ui';

const props = defineProps<{ field: Field }>()
const emits = defineEmits<(e: 'delete') => void>()

const filter = defineModel<Filter>('filter', { required: true });

const operator = computed<Operator>(() => {
    const operator = props.field.operators.find(operator => operator.value === filter.value.operator) ?? props.field.operators[0];

    if (!operator) {
        throw new Error('No operator found');
    }

    return operator;
})

function onOperatorChange(operatorValue: string | undefined) {
    if (!operatorValue) {
        return;
    }

    filter.value.operator = operatorValue;
    filter.value.value = operator.value.defaultValue ?? operator.value.multiple ? [] : '';
}
</script>

<template>
    <RovingFocusGroup>
        <ButtonGroup class="h-8 w-fit">
            <FilterItemField>
                <component :is="field.icon" class="size-4 text-muted-foreground" /> {{ filter.field }}
            </FilterItemField>
            
            <FilterItemOperator :model-value="filter.operator" :options="field.operators" @update:model-value="onOperatorChange" />
            <FilterItemValue v-model="filter.value" :options="field.options" :render-option="field.optionDisplay" :multiple="operator.multiple" :custom="operator.custom" />
            
            <Button class="h-auto w-auto aspect-square" variant="outline" size="icon" aria-label="Filter" @click="emits('delete')">
                <XIcon class="size-3!" />
            </Button>
        </ButtonGroup>
    </RovingFocusGroup>
</template>