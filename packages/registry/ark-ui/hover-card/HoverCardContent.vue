<script setup lang="ts">
import { HoverCard, type HoverCardContentProps } from "@ark-ui/vue/hover-card";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<HoverCardContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <HoverCard.Content
    v-bind="contentProps"
    :class="cn(
      '[--arrow-background:var(--popover)] [--arrow-size:10px]',
      'relative z-[calc(50+var(--layer-index,0))] flex w-[300px] flex-col rounded-xl border border-border bg-popover p-4 shadow-lg outline-none',
      'origin-(--transform-origin)',
      props.class,
    )"
    data-slot="hover-card-content"
  >
    <slot />
  </HoverCard.Content>
</template>

<style scoped>
[data-state="open"] {
  animation: hover-card-scale-fade-in 150ms ease-out;
}

[data-state="closed"] {
  animation: hover-card-scale-fade-out 100ms ease-in;
}

@keyframes hover-card-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes hover-card-scale-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.96);
  }
}
</style>
