<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "ghost",
  size: "icon-sm",
});
</script>

<template>
  <DatePicker.NextTrigger
    :class="cn(buttonVariants({ variant, size }), props.class)"
    data-slot="date-picker-next-trigger"
  >
    <slot />
  </DatePicker.NextTrigger>
</template>
