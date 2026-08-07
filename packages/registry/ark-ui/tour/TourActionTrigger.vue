<script setup lang="ts">
import { Tour, type TourActionTriggerProps } from "@ark-ui/vue/tour";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends TourActionTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "sm",
});

const triggerProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <Tour.ActionTrigger
    v-bind="triggerProps"
    :class="cn(
      buttonVariants({ variant, size }),
      props.class,
    )"
    data-slot="tour-action-trigger"
  />
</template>
