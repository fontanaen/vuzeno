<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";
import { injectActionSheetContext } from "./api";

interface Props extends ButtonVariantsProps, PolymorphicProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "lg",
});

const buttonProps = reactiveOmit(props, "class", "variant", "size");

const context = injectActionSheetContext();
</script>

<template>
  <ark.button
    v-bind="buttonProps"
    type="button"
    data-scope="action-sheet"
    data-part="cancel"
    :class="cn(buttonVariants({ variant, size }), 'dark:bg-background dark:hover:bg-accent w-full text-destructive', props.class)"
    @click="context.onCancel()"
  >
    <slot />
  </ark.button>
</template>
