<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { Input, type InputVariantsProps } from "../input";

export interface InputGroupInputProps extends InputVariantsProps {
  class?: HTMLAttributes["class"];
}

const modelValue = defineModel<string | number>({ default: (props) => props.defaultValue });

const props = defineProps<InputGroupInputProps>();
</script>

<template>
  <Input
    v-model="modelValue"
    :size="props.size"
    data-slot="input-group-control"
    :class="cn(
      'flex-1 rounded-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent ring-offset-transparent dark:bg-transparent',
      props.class,
    )"
  />
</template>
