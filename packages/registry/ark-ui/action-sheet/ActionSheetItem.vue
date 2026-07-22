<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";
import { type ActionSheetOptionAcceptableValue, injectActionSheetContext } from "./api";

interface Props extends ButtonVariantsProps, PolymorphicProps {
  value: ActionSheetOptionAcceptableValue;
  disabled?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "lg",
  disabled: false,
});

const buttonProps = reactiveOmit(props, "class", "variant", "size", "value");

const context = injectActionSheetContext();
</script>

<template>
  <ark.button
    v-bind="buttonProps"
    type="button"
    data-scope="action-sheet"
    data-part="item"
    :class="cn(
      buttonVariants({ variant, size }), 
      'dark:bg-background dark:hover:bg-accent first:rounded-t-md first:border-b-0 last:rounded-b-md not-last:border-b-0 rounded-none', 
      props.class
    )"
    @click="context.onSelectOption(props.value)"
  >
    <slot />
  </ark.button>
</template>
