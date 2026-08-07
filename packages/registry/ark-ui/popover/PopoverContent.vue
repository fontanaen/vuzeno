<script setup lang="ts">
import { Popover, type PopoverContentProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <Teleport to="body">
    <Popover.Positioner data-slot="popover-positioner">
      <Popover.Content
        v-bind="contentProps"
        :class="cn(
          '[--arrow-background:var(--popover)] [--arrow-size:10px]',
          'relative z-[calc(50+var(--layer-index,0))]',
          'flex w-[max(var(--reference-width),320px)] flex-col items-start gap-1',
          'rounded-md border border-border bg-popover p-5 outline-none',
          'origin-(--transform-origin) drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
          props.class,
        )"
        data-slot="popover-content"
      >
        <slot />
      </Popover.Content>
    </Popover.Positioner>
  </Teleport>
</template>

<style scoped>
[data-slot="popover-content"] {
  transition:
    opacity 150ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

[data-state="open"] {
  opacity: 1;
  transform: scale(1);
}

[data-state="closed"] {
  opacity: 0;
  transform: scale(0.95);
  transition-duration: 100ms;
}

@starting-style {
  [data-state="open"] {
    opacity: 0;
    transform: scale(0.95);
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-slot="popover-content"] {
    transition: opacity 100ms ease;
  }

  [data-state="closed"] {
    transform: scale(1);
  }

  @starting-style {
    [data-state="open"] {
      transform: scale(1);
    }
  }
}
</style>
