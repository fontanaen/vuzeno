<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { cn } from "@vuzeno/ui/lib/utils";
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { type ActionSheetOptionAcceptableValue, injectActionSheetContext } from "./ActionSheet.vue";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  value?: ActionSheetOptionAcceptableValue;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "lg",
});

const context = injectActionSheetContext();
</script>

<template>
  <Button v-bind="props" :class="cn('h-12', props.class)" @click="context.onSelectOption(props.value)">
    <slot />
  </Button>
</template>