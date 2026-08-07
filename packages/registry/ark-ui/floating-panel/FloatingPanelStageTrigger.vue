<script setup lang="ts">
import { FloatingPanel, type FloatingPanelStageTriggerProps } from "@ark-ui/vue/floating-panel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends FloatingPanelStageTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon-sm",
});

const stageTriggerProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <FloatingPanel.StageTrigger
    v-bind="stageTriggerProps"
    :class="cn(
      buttonVariants({ variant, size }),
      'size-6 rounded-sm',
      props.class,
    )"
    data-slot="floating-panel-stage-trigger"
  >
    <slot />
  </FloatingPanel.StageTrigger>
</template>
