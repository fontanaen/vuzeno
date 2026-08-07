<script setup lang="ts">
import { ScrollArea, type ScrollAreaScrollbarProps } from "@ark-ui/vue/scroll-area";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import ScrollAreaThumb from "./ScrollAreaThumb.vue";

const props = defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes["class"]; thumbClass?: HTMLAttributes["class"] }>();

const scrollbarProps = reactiveOmit(props, "class", "thumbClass");
</script>

<template>
  <ScrollArea.Scrollbar
    v-bind="scrollbarProps"
    :class="cn(
      'relative m-2 z-10 flex rounded-md bg-muted opacity-0 pointer-events-none transition-opacity duration-150',
      'before:absolute before:content-[\'\']',
      'data-scrolling:duration-0',
      'data-hover:opacity-100 data-hover:pointer-events-auto',
      'data-scrolling:opacity-100 data-scrolling:pointer-events-auto',
      'data-[orientation=vertical]:hidden data-[orientation=vertical]:data-overflow-y:flex data-[orientation=vertical]:w-1',
      'data-[orientation=vertical]:before:left-1/2 data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-5 data-[orientation=vertical]:before:-translate-x-1/2',
      'data-[orientation=horizontal]:hidden data-[orientation=horizontal]:data-overflow-x:flex data-[orientation=horizontal]:h-1',
      'data-[orientation=horizontal]:before:inset-x-0 data-[orientation=horizontal]:before:-bottom-2 data-[orientation=horizontal]:before:h-5 data-[orientation=horizontal]:before:w-full',
      props.class,
    )"
    data-slot="scroll-area-scrollbar"
  >
    <ScrollAreaThumb :class="props.thumbClass" />
  </ScrollArea.Scrollbar>
</template>
