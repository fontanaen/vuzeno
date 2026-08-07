<script setup lang="ts">
import { useScrollAreaContext } from "@ark-ui/vue/scroll-area";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<{
  side: "top" | "bottom" | "left" | "right";
  class?: HTMLAttributes["class"];
}>();

const scrollArea = useScrollAreaContext();

const sideClassBySide = {
  top: "inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent",
  bottom: "inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent",
  left: "inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent",
  right: "inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent",
} as const;

const isVisible = computed(() => {
  const api = scrollArea.value;

  if (props.side === "top") {
    return api.hasOverflowY && !api.isAtTop;
  }

  if (props.side === "bottom") {
    return api.hasOverflowY && !api.isAtBottom;
  }

  if (props.side === "left") {
    return api.hasOverflowX && !api.isAtLeft;
  }

  return api.hasOverflowX && !api.isAtRight;
});
</script>

<template>
  <div
    :class="cn(
      'pointer-events-none absolute z-5 transition-opacity duration-200',
      isVisible ? 'opacity-100' : 'opacity-0',
      sideClassBySide[props.side],
      props.class,
    )"
    data-slot="scroll-area-shadow"
    :data-side="props.side"
    aria-hidden="true"
  />
</template>
