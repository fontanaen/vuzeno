<script setup lang="ts">
import { Dialog, type DialogContentProps } from "@ark-ui/vue/dialog";
import { XIcon } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { Button } from "../button";

interface Props extends DialogContentProps {
  class?: HTMLAttributes["class"];
  backdrop?: boolean;
  showCloseButton?: boolean;
  scroll?: "inside" | "outside";
}

const props = withDefaults(defineProps<Props>(), {
  backdrop: true,
  scroll: "inside",
  showCloseButton: true,
});

const contentProps = reactiveOmit(props, "class", "backdrop", "scroll");
</script>

<template>
  <Teleport to="body">
    <Dialog.Backdrop
      v-if="props.backdrop"
      :class="cn(
        'fixed inset-0 z-[calc(50+var(--layer-index,0))] bg-black/40',
      )"
      data-slot="dialog-backdrop"
    />
    <Dialog.Positioner
      :class="cn(
        props.scroll === 'outside'
          ? [
              'fixed inset-0 z-[calc(var(--demo-popover-z-index)+var(--layer-index,0))]',
              'flex items-start justify-center overflow-y-auto overscroll-y-contain pointer-events-auto',
            ]
          : [
              'fixed inset-0 z-[calc(50+var(--layer-index,0))]',
              'flex items-center justify-center overscroll-y-none scrollbar-gutter-both',
            ],
      )"
      :data-slot="props.scroll === 'outside' ? 'dialog-outside-scroll-positioner' : 'dialog-positioner'"
    >
      <Dialog.Content
        v-bind="contentProps"
        :class="cn(
          'relative z-[calc(50+var(--layer-index,0))]',
          'flex w-96 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] flex-col items-start gap-y-4 p-4',
          'rounded-xl border border-border bg-popover shadow-xl outline-none',
          'translate-x-[calc(-1*var(--scrollbar-width,0)/2)] transition-transform duration-100 ease-in-out',
          'data-has-nested:scale-[calc(1-var(--nested-layer-count)*0.05)]',
          props.class,
        )"
        data-slot="dialog-content"
      >
        <Dialog.CloseTrigger v-if="props.showCloseButton" class="absolute top-2 right-2" as-child>
          <Button variant="ghost" size="icon-xs">
            <XIcon class="size-4 text-muted-foreground" />
            <span class="sr-only">Close</span>
          </Button>
        </Dialog.CloseTrigger>
        <slot />
      </Dialog.Content>
    </Dialog.Positioner>
  </Teleport>
</template>

<style scoped>
[data-slot="dialog-backdrop"][data-state="open"] {
  animation: fade-in 150ms ease-out;
}

[data-slot="dialog-backdrop"][data-state="closed"] {
  animation: fade-out 100ms ease-in;
}

[data-slot="dialog-content"][data-state="open"] {
  animation: dialog-scale-fade-in 150ms ease-out;
}

[data-slot="dialog-content"][data-state="closed"] {
  animation: dialog-scale-fade-out 100ms ease-in;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes dialog-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes dialog-scale-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
