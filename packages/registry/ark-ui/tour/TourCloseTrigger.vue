<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.CloseTrigger
    :class="cn(
      'absolute top-2 right-2 inline-flex size-6 cursor-pointer items-center justify-center',
      'rounded border-none bg-transparent text-muted-foreground',
      '[&:hover:not(:disabled)]:bg-muted',
      'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring',
      '[&_svg]:size-4 [&_svg]:shrink-0',
      props.class,
    )"
    data-slot="tour-close-trigger"
  >
    <slot />
  </Tour.CloseTrigger>
</template>
