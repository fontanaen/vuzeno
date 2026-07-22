<script setup lang="ts">
import { FloatingPanel, type FloatingPanelResizeTriggerProps } from "@ark-ui/vue/floating-panel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ButtonVariantsProps, buttonVariants } from "../button";

interface Props extends FloatingPanelResizeTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const resizeTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <FloatingPanel.ResizeTrigger
    v-bind="resizeTriggerProps"
    :class="cn(
      'data-[axis=n]:h-1.5 data-[axis=n]:max-w-[90%]',
      'data-[axis=s]:h-1.5 data-[axis=s]:max-w-[90%]',
      'data-[axis=e]:w-1.5 data-[axis=e]:max-h-[90%]',
      'data-[axis=w]:w-1.5 data-[axis=w]:max-h-[90%]',
      'data-[axis=ne]:size-2.5 data-[axis=nw]:size-2.5 data-[axis=se]:size-2.5 data-[axis=sw]:size-2.5',
      props.class,
    )"
    data-slot="floating-panel-resize-trigger"
  >
    <slot />
  </FloatingPanel.ResizeTrigger>
</template>
