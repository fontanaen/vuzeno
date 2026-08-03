<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";
import { injectActionSheetContext } from "./context";
import type { ActionSheetOptionAcceptableValue } from "./types";

const props = withDefaults(
  defineProps<
    {
      value: ActionSheetOptionAcceptableValue;
      disabled?: boolean;
      class?: HTMLAttributes["class"];
    } & ButtonVariantsProps &
      PolymorphicProps
  >(),
  {
    variant: "outline",
    size: "lg",
    disabled: false,
  },
);

const actionSheet = injectActionSheetContext();

const itemProps = computed(() =>
  mergeProps(
    actionSheet.value.getItemProps({
      value: props.value,
      disabled: props.disabled,
    }),
    {
      class: cn(
        buttonVariants({ variant: props.variant, size: props.size }),
        "dark:bg-background dark:hover:bg-accent first:rounded-t-md first:border-b-0 last:rounded-b-md not-last:border-b-0 rounded-none",
        props.class,
      ),
    },
  ),
);
</script>

<template>
  <ark.button
    v-bind="itemProps"
    :as-child="asChild"
    data-slot="action-sheet-item"
  >
    <slot />
  </ark.button>
</template>
