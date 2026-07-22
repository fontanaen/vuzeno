<script setup lang="ts">
import { Splitter, type SplitterResizeTriggerProps } from "@ark-ui/vue/splitter";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SplitterResizeTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Splitter.ResizeTrigger
    v-bind="triggerProps"
    :class="cn(
      'relative grid cursor-col-resize place-items-center border-none bg-transparent p-0 outline-none',
      'before:absolute before:bg-muted before:content-[\'\']',
      'focus:[--splitter-border-color:var(--primary)] focus:[--splitter-thumb-color:var(--primary)]',
      'data-dragging:[--splitter-border-color:var(--primary)] data-dragging:[--splitter-thumb-color:var(--primary)]',
      'data-disabled:cursor-default',
      'data-[orientation=horizontal]:min-w-(--splitter-thumb-size) data-[orientation=horizontal]:mx-(--splitter-thumb-inset) data-[orientation=horizontal]:cursor-col-resize',
      'data-[orientation=horizontal]:before:inset-e-[calc(var(--splitter-thumb-size)*0.5)] data-[orientation=horizontal]:before:inset-y-0 data-[orientation=horizontal]:before:inset-s-auto data-[orientation=horizontal]:before:w-(--splitter-border-size)',
      'data-[orientation=vertical]:min-h-(--splitter-thumb-size) data-[orientation=vertical]:my-(--splitter-thumb-inset) data-[orientation=vertical]:cursor-row-resize',
      'data-[orientation=vertical]:before:bottom-[calc(var(--splitter-thumb-size)*0.5)] data-[orientation=vertical]:before:inset-x-0 data-[orientation=vertical]:before:top-auto data-[orientation=vertical]:before:h-(--splitter-border-size)',
      props.class,
    )"
    data-slot="splitter-resize-trigger"
  >
    <slot />
  </Splitter.ResizeTrigger>
</template>
