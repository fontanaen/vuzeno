<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { ButtonGroup } from "@vuzeno/ui/components/button-group";
import { cn } from "@vuzeno/ui/lib/utils";
import { XIcon } from "lucide-vue-next";
import { computed } from "vue";
import FilterItemField from "./FiltersItemField.vue";
import FilterItemOperator from "./FiltersItemOperator.vue";
import FilterItemValue from "./FiltersItemValue.vue";
import { type FilterSize, injectFilterContext } from "./FiltersProvider.vue";
import { type Field, isField, isFieldGroup } from "./field";
import type { Filter, FilterValue } from "./filter";
import { type Operator, OperatorDefaultValue } from "./operator";

const emits = defineEmits<(e: "delete") => void>();

const filter = defineModel<Filter>("filter", { required: true });

const { variant, size, fields } = injectFilterContext();

const sizeVariant: Record<FilterSize, string> = {
  sm: "h-7",
  default: "h-8",
  lg: "h-10",
} as const;

const field = computed(() => {
  for (const field of fields.value) {
    if (isFieldGroup(field) && field.fields.some((field) => field.key === filter.value.field)) {
      return field.fields.find((field) => field.key === filter.value.field) as Field;
    }

    if (isField(field) && field.key === filter.value.field) {
      return field;
    }
  }

  throw new Error(`Field with key ${filter.value.field} not found`);
});

function getOperator(operatorValue: string): Operator<unknown> {
  const operator = field.value.operators.find((operator) => operator.value === operatorValue) ?? field.value.operators[0];

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
            <component :is="field.icon" class="size-4 text-muted-foreground" /> {{ field.name }}
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