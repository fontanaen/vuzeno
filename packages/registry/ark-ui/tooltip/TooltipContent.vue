<script setup lang="ts">
import { Tooltip, type TooltipContentProps } from "@ark-ui/vue/tooltip";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes, Teleport } from "vue";

const props = defineProps<TooltipContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <Teleport to="body">
    <Tooltip.Positioner data-slot="tooltip-positioner">
      <Tooltip.Content
        v-bind="contentProps"
        :class="cn(
          '[--arrow-background:var(--popover)] [--arrow-size:10px]',
          'relative z-[calc(50+var(--layer-index,0))] max-w-80 rounded border border-border bg-popover px-2.5 py-1',
          'text-xs leading-5 font-medium text-popover-foreground shadow-md',
          'origin-(--transform-origin)',
          props.class,
        )"
        data-slot="tooltip-content"
      >
        <slot />
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Teleport>
</template>

<style scoped>
[data-state="open"] {
  animation: tooltip-scale-fade-in 150ms ease-out;
}

[data-state="closed"] {
  animation: tooltip-scale-fade-out 100ms ease-in;
}

@keyframes tooltip-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes tooltip-scale-fade-out {
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
