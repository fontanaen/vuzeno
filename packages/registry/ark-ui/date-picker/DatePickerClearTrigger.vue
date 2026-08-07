<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "sm",
});

const clearTriggerProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <DatePicker.ClearTrigger
    v-bind="clearTriggerProps"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    data-slot="date-picker-clear-trigger"
  >
    <slot />
  </DatePicker.ClearTrigger>
</template>
