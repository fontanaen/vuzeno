<script setup lang="ts">
import { FloatingPanel, type FloatingPanelTriggerProps } from "@ark-ui/vue/floating-panel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends FloatingPanelTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "sm",
});

const triggerProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <FloatingPanel.Trigger
    v-bind="triggerProps"
    :class="cn(
      buttonVariants({ variant, size }),
      props.class,
    )"
    data-slot="floating-panel-trigger"
  >
    <slot />
  </FloatingPanel.Trigger>
</template>
