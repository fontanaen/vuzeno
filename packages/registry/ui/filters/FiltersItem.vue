<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { ButtonGroup } from "@vuetella/ui/components/button-group";
import { cn } from "@vuetella/ui/lib/utils";
import { XIcon } from "lucide-vue-next";
import { computed } from "vue";
import FilterItemField from "./FiltersItemField.vue";
import FilterItemOperator from "./FiltersItemOperator.vue";
import FilterItemValue from "./FiltersItemValue.vue";
import { type FilterSize, injectFilterContext } from "./FiltersProvider.vue";
import type { Field } from "./field";
import type { Filter, FilterValue } from "./filter";
import { type Operator, OperatorDefaultValue } from "./operator";

const props = defineProps<{ field: Field }>();
const emits = defineEmits<(e: "delete") => void>();

const filter = defineModel<Filter>("filter", { required: true });

const { variant, size } = injectFilterContext();

const sizeVariant: Record<FilterSize, string> = {
  sm: "h-7",
  default: "h-8",
  lg: "h-10",
} as const;

function getOperator(operatorValue: string): Operator<unknown> {
  const operator = props.field.operators.find((operator) => operator.value === operatorValue) ?? props.field.operators[0];

  if (!operator) {
    throw new Error("No operator found");
  }

  return operator;
}

const operator = computed(() => getOperator(filter.value.operator));

function onOperatorChange(operatorValue: string | undefined) {
  if (!operatorValue) {
    return;
  }

  const newOperator = getOperator(operatorValue);

  if (newOperator.inputType !== operator.value.inputType) {
    filter.value.value = (newOperator.defaultValue ?? OperatorDefaultValue[newOperator.inputType ?? (props.field.type as keyof typeof OperatorDefaultValue)]) as FilterValue;
  }

  filter.value.operator = operatorValue;
}
</script>

<template>
    <ButtonGroup :class="cn(sizeVariant[size], 'w-fit')">
        <FilterItemField :variant="variant">
            <component :is="field.icon" class="size-4 text-muted-foreground" /> {{ props.field.name }}
        </FilterItemField>
        
        <FilterItemOperator 
            :model-value="filter.operator" 
            :options="field.operators" 
            :variant="variant" 
            @update:model-value="onOperatorChange" 
        />

        <FilterItemValue 
            v-model="filter.value" 
            :field="field" 
            :operator="operator" 
            :variant="variant" 
        />
        
        <Button 
            class="h-auto w-auto aspect-square"
            :class="{
                'px-3': size === 'default',
                'px-2': size === 'sm',
                'px-4': size === 'lg',
            }"
            :variant="variant"
            aria-label="Filter" 
            @click="emits('delete')"
        >
            <XIcon class="size-3!" />
        </Button>
    </ButtonGroup>
</template>