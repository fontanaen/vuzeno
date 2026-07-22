<script setup lang="ts">
import { Toast } from "@ark-ui/vue/toast";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Toast.CloseTrigger
    :class="cn(
      'absolute top-2 inset-e-2 inline-flex cursor-pointer items-center justify-center rounded border-none bg-transparent p-1 text-inherit opacity-60',
      'transition-[background,opacity] duration-200',
      'hover:bg-(--toast-trigger-bg) hover:opacity-100',
      'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-current',
      '[&_svg]:size-4 [&_svg]:shrink-0',
      props.class,
    )"
    data-slot="toast-close-trigger"
  >
    <slot />
  </Toast.CloseTrigger>
</template>
