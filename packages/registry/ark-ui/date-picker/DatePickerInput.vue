<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type InputVariantsProps, inputVariants } from "../input";

interface DatePickerInputProps extends InputVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<DatePickerInputProps>();
</script>

<template>
  <DatePicker.Input
    :class="cn(
      inputVariants({ size: props.size }),
      props.class,
    )"
    data-slot="date-picker-input"
  >
    <slot />
  </DatePicker.Input>
</template>
