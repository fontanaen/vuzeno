<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { FieldInput, type FieldInputProps, useFieldContext } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { type InputVariantsProps, inputVariants } from "../input";

interface Props extends Omit<FieldInputProps, "size">, InputVariantsProps {
  class?: HTMLAttributes["class"];
  modelValue?: string | number;
  defaultValue?: string | number;
}

const props = defineProps<Props>();
const emits = defineEmits<(e: "update:modelValue", payload: string | number) => void>();

const inputProps = reactiveOmit(props, "class", "size", "modelValue", "defaultValue");

const field = useFieldContext();

const delegatedProps = computed(() => {
  const context = field?.value.getInputProps();
  return {
    value: props.modelValue ?? props.defaultValue,
    ...context,
    ...inputProps,
  };
});
</script>

<template>
  <ark.input
    v-bind="delegatedProps"
    :class="cn(inputVariants({ size: props.size }), props.class)"
    data-slot="field-input"
  >
    <slot />
  </ark.input>
</template>
