<script setup lang="ts">
import { Input } from "@vuzeno/ui/components/input";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { type FiltersSize, injectFiltersContext } from "./context";
import type { TextField } from "./field";

const props = defineProps<{
  field: TextField;
  class?: HTMLAttributes["class"];
}>();

const modelValue = defineModel<string | null>({ default: "" });

const { variant, size } = injectFiltersContext();

const sizeVariant: Record<FiltersSize, string> = {
  sm: "text-xs h-7",
  md: "text-sm h-8",
  lg: "text-sm h-10",
} as const;

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
    :minlength="field.minLength"
    :maxlength="field.maxLength"
    :class="cn('h-auto', sizeVariant[size], variant === 'secondary' && 'bg-secondary border-none', props.class)"
  />
</template>
