<script setup lang="ts">
import { MoveHorizontalIcon } from "@lucide/vue";
import { Popover } from "@vuzeno/registry/ui/popover";
import { Slider } from "@vuzeno/registry/ui/slider";
import { cn } from "cnfast";
import { computed } from "vue";
import { buttonVariants } from "../button";
import { injectFiltersContext } from "./context";
import type { NumberField } from "./field";
import { filtersControlVariants } from "./variants";

const modelValue = defineModel<number[]>();

const props = defineProps<{
  field: NumberField;
}>();

const { variant, size } = injectFiltersContext();

const fromValue = computed<number>(() => modelValue.value?.[0] ?? props.field.min ?? 0);

const toValue = computed<number>(() => modelValue.value?.[1] ?? props.field.max ?? 100);

const numberFormatter = computed(() => new Intl.NumberFormat(undefined, props.field.numberFormat ?? { style: "decimal" }));

const sliderValue = computed({
  get() {
    return [fromValue.value, toValue.value];
  },
  set(value: number[]) {
    modelValue.value = value;
  },
});

const triggerClass = computed(() => cn("w-auto justify-between font-normal px-3 tabular-nums", filtersControlVariants({ size: size.value })));
</script>

<template>
  <Popover.Root>
    <Popover.Trigger :class="cn(buttonVariants({ variant, size }), triggerClass)">
      {{ numberFormatter.format(fromValue) }}
      <MoveHorizontalIcon class="size-3" />
      {{ numberFormatter.format(toValue) }}
    </Popover.Trigger>

    <Popover.Content class="w-auto min-w-56 max-w-none overflow-hidden p-2">
      <Slider.Root
        v-model="sliderValue"
        :min="field.min ?? 0"
        :max="field.max ?? 100"
        :step="field.step ?? 5"
        class="w-full max-w-none"
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb :index="0">
            <Slider.HiddenInput />
          </Slider.Thumb>
          <Slider.Thumb :index="1">
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.Root>
    </Popover.Content>
  </Popover.Root>
</template>
