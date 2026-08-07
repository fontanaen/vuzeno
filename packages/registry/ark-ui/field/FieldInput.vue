<script setup lang="ts">
import { Field, type FieldInputProps } from "@ark-ui/vue/field";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type InputVariantsProps, inputVariants } from "../input";

interface Props extends Omit<FieldInputProps, "size">, InputVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const inputProps = reactiveOmit(props, "class", "size");
</script>

<template>
  <Field.Input
    v-bind="inputProps"
    :class="cn(inputVariants({ size: props.size }), props.class)"
    data-slot="field-input"
  >
    <slot />
  </Field.Input>
</template>
