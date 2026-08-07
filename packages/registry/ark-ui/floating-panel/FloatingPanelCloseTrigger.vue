<script setup lang="ts">
import { FloatingPanel, type FloatingPanelCloseTriggerProps } from "@ark-ui/vue/floating-panel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends FloatingPanelCloseTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon-xs",
});

const closeTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <FloatingPanel.CloseTrigger
    v-bind="closeTriggerProps"
    :class="cn(
      buttonVariants({ variant, size }),
      'size-6 rounded-sm',
      props.class,
    )"
    data-slot="floating-panel-close-trigger"
  >
    <slot />
  </FloatingPanel.CloseTrigger>
</template>
