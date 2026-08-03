<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";
import { injectActionSheetContext } from "./context";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & ButtonVariantsProps &
      PolymorphicProps
  >(),
  {
    variant: "outline",
    size: "lg",
  },
);

const actionSheet = injectActionSheetContext();

const cancelProps = computed(() =>
  mergeProps(actionSheet.value.getCancelProps(), {
    class: cn(buttonVariants({ variant: props.variant, size: props.size }), "dark:bg-background dark:hover:bg-accent w-full text-destructive", props.class),
  }),
);
</script>

<template>
  <ark.button
    v-bind="cancelProps"
    :as-child="asChild"
    data-slot="action-sheet-cancel"
  >
    <slot />
  </ark.button>
</template>
