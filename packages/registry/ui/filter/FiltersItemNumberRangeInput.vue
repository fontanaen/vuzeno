<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { Popover, PopoverContent, PopoverTrigger } from "@vuetella/ui/components/popover";
import { Slider } from "@vuetella/ui/components/slider";
import { MoveHorizontalIcon } from "lucide-vue-next";
import { computed } from "vue";
import type { FilterVariant } from "./FiltersProvider.vue";
import type { Field } from "./field";

const props = defineProps<{
  field: Field<number[], number>;
  variant: FilterVariant;
}>();

const modelValue = defineModel<number[]>();

const fromValue = computed<number>(() => {
  return modelValue.value?.[0] ?? props.field.min ?? 0;
});

const toValue = computed<number>(() => {
  return modelValue.value?.[1] ?? props.field.max ?? 100;
});

const numberFormat = computed<Intl.NumberFormat>(() => {
  return new Intl.NumberFormat("en-US", props.field.numberFormat ?? { style: "decimal" });
});
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button :variant="variant" class="h-auto w-auto justify-between font-normal text-sm px-3 tabular-nums">
                {{ numberFormat.format(fromValue) }} 
                <MoveHorizontalIcon class="size-3" /> 
                {{ numberFormat.format(toValue) }}
            </Button>
        </PopoverTrigger>

        <PopoverContent align="start" class="min-w-56 overflow-hidden p-2">
            <Slider
                :model-value="[fromValue, toValue]"
                :max="field.max ?? 100"
                :min="field.min ?? 0"
                :step="field.step ?? 5"
                @update:model-value="modelValue = $event as number[];"
            />
        </PopoverContent>
    </Popover>
</template>