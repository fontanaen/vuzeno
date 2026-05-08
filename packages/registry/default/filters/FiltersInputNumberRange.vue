<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { Popover, PopoverContent, PopoverTrigger } from "@vuzeno/ui/components/popover";
import { Slider } from "@vuzeno/ui/components/slider";
import { cn } from "@vuzeno/ui/lib/utils";
import { MoveHorizontalIcon } from "lucide-vue-next";
import { computed } from "vue";
import { injectFiltersContext } from "./context";
import type { NumberField } from "./field";
import { PopoverTriggerSizeVariant } from "./sizes";

const props = defineProps<{
  field: NumberField;
}>();

const modelValue = defineModel<number[]>();

const { variant, size } = injectFiltersContext();

const fromValue = computed<number>(() => modelValue.value?.[0] ?? props.field.min ?? 0);

const toValue = computed<number>(() => modelValue.value?.[1] ?? props.field.max ?? 100);

const numberFormatter = computed(() => new Intl.NumberFormat(undefined, props.field.numberFormat ?? { style: "decimal" }));
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="variant"
        :class="cn('h-auto w-auto justify-between font-normal px-3 tabular-nums', PopoverTriggerSizeVariant[size])"
      >
        {{ numberFormatter.format(fromValue) }}
        <MoveHorizontalIcon class="size-3" />
        {{ numberFormatter.format(toValue) }}
      </Button>
    </PopoverTrigger>

    <PopoverContent align="start" class="min-w-56 overflow-hidden p-2">
      <Slider
        :model-value="[fromValue, toValue]"
        :min="field.min ?? 0"
        :max="field.max ?? 100"
        :step="field.step ?? 5"
        @update:model-value="modelValue = $event as number[]"
      />
    </PopoverContent>
  </Popover>
</template>
