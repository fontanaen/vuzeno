<script setup lang="ts">
import { Toast, useToastContext } from "@ark-ui/vue/toast";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { toastVariants } from "./variants";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();

const toastContext = useToastContext();
</script>

<template>
  <Toast.Root
    :class="cn(
      'relative flex w-full min-w-80 flex-col items-start gap-2 rounded-lg bg-popover py-3 ps-3 pe-10 text-foreground',
      '[--toast-accent:var(--foreground)] [--toast-trigger-bg:var(--muted)]',
      '[translate:var(--x)_var(--y)] scale-(--scale) z-(--z-index) h-(--height) opacity-(--opacity)',
      'will-change-[translate,opacity,scale]',
      'transition-[translate,scale,opacity,height,box-shadow] duration-400 ease-[cubic-bezier(0.21,1.02,0.73,1)]',
      'data-[placement^=top]:shadow-[0_-4px_12px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.2)]',
      'data-[placement^=bottom]:shadow-[0_4px_12px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.2)]',
      'data-[state=closed]:transition-[translate,scale,opacity] data-[state=closed]:duration-[400ms,400ms,200ms]',
      'data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]',
      'has-data-[slot=toast-indicator]:**:data-[slot=toast-title]:pl-6.5',
      toastVariants({ type: toastContext.type }),
      props.class,
    )"
    data-slot="toast"
  >
    <slot />
  </Toast.Root>
</template>
