<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectActionSheetContext } from "./context";
import type { ActionSheetOptionAcceptableValue } from "./types";

const props = defineProps<
  {
    value?: ActionSheetOptionAcceptableValue;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const actionSheet = injectActionSheetContext();

const optionProps = computed(() =>
  mergeProps(
    actionSheet.value.getItemProps({
      value: props.value,
      disabled: props.disabled,
    }),
    {
      class: cn(props.class),
    },
  ),
);
</script>

<template>
  <ark.button
    v-bind="optionProps"
    :as-child="asChild"
    data-slot="action-sheet-option"
  >
    <slot />
  </ark.button>
</template>
