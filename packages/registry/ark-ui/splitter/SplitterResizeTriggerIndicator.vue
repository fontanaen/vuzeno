<script setup lang="ts">
import { Splitter, type SplitterResizeTriggerIndicatorProps } from "@ark-ui/vue/splitter";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SplitterResizeTriggerIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Splitter.ResizeTriggerIndicator
    v-bind="indicatorProps"
    :class="cn(
      'relative z-1 rounded-full border border-border bg-accent shadow-sm',
      'data-[orientation=horizontal]:h-(--splitter-handle-size) data-[orientation=horizontal]:w-full',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-(--splitter-handle-size)',
      'data-focus:focus-visible:outline-2 data-focus:focus-visible:outline-offset-2 data-focus:focus-visible:outline-(--demo-coral-focus-ring)',
      'data-disabled:invisible',
      props.class,
    )"
    data-slot="splitter-resize-trigger-indicator"
  >
    <slot />
  </Splitter.ResizeTriggerIndicator>
</template>
