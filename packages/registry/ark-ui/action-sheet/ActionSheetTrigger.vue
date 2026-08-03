<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectActionSheetContext } from "./context";

const props = defineProps<
  {
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const actionSheet = injectActionSheetContext();

const triggerProps = computed(() =>
  mergeProps(actionSheet.value.getTriggerProps(), {
    class: cn(props.class),
  }),
);
</script>

<template>
  <ark.button
    v-bind="triggerProps"
    :as-child="asChild"
    data-slot="action-sheet-trigger"
  >
    <slot />
  </ark.button>
</template>
