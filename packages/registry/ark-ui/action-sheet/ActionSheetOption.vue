<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ActionSheetOptionAcceptableValue, injectActionSheetContext } from "./api";

const props = defineProps<
  {
    value?: ActionSheetOptionAcceptableValue;
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const context = injectActionSheetContext();
</script>

<template>
  <ark.button
    type="button"
    :as-child="asChild"
    data-slot="action-sheet-option"
    :class="cn(props.class)"
    @click="context.onSelectOption(props.value)"
  >
    <slot />
  </ark.button>
</template>
