<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectActionSheetContext } from "./context";

const props = defineProps<{ class?: HTMLAttributes["class"] } & PolymorphicProps>();

const actionSheet = injectActionSheetContext();

const groupProps = computed(() =>
  mergeProps(actionSheet.value.getGroupProps(), {
    class: cn("flex flex-col gap-0", props.class),
  }),
);
</script>

<template>
  <ark.div
    v-bind="groupProps"
    :as-child="asChild"
    data-slot="action-sheet-group"
  >
    <slot />
  </ark.div>
</template>
