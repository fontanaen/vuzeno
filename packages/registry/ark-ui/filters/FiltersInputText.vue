<script setup lang="ts">
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { Input, inputVariants } from "../input";
import { injectFiltersContext } from "./context";
import type { TextField } from "./field";

const modelValue = defineModel<string | null>({ default: "" });

const props = defineProps<{
  field: TextField;
  class?: HTMLAttributes["class"];
}>();

const { variant, size } = injectFiltersContext();

const stringValue = computed<string>({
  get: () => (modelValue.value ?? "") as string,
  set: (next) => {
    modelValue.value = next;
  },
});
</script>

<template>
  <Input
    v-model="stringValue"
    :min-length="field.minLength"
    :max-length="field.maxLength"
    :class="
      cn(
        inputVariants({ size }),
        'rounded-none',
        variant === 'secondary' && 'bg-secondary border-none',
        props.class,
      )
    "
  />
</template>
