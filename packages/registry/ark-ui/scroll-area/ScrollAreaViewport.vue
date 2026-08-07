<script setup lang="ts">
import { ScrollArea, type ScrollAreaViewportProps } from "@ark-ui/vue/scroll-area";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ScrollAreaViewportProps & { class?: HTMLAttributes["class"] }>();

const viewportProps = reactiveOmit(props, "class");
</script>

<template>
  <ScrollArea.Viewport
    v-bind="viewportProps"
    :class="cn(
      'h-full rounded-lg overscroll-contain',
      'scrollbar-none [&::-webkit-scrollbar]:hidden',
      'focus-visible:outline-2 focus-visible:outline-primary',
      props.class,
    )"
    data-slot="scroll-area-viewport"
  >
    <slot />
  </ScrollArea.Viewport>
</template>
