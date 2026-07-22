<script setup lang="ts">
import { FloatingPanel, type FloatingPanelDragTriggerProps } from "@ark-ui/vue/floating-panel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends FloatingPanelDragTriggerProps, ButtonVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "ghost",
  size: "icon-sm",
});

const dragTriggerProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <FloatingPanel.DragTrigger
    v-bind="dragTriggerProps"
    :class="cn(props.class)"
    data-slot="floating-panel-drag-trigger"
  >
    <slot />
  </FloatingPanel.DragTrigger>
</template>
