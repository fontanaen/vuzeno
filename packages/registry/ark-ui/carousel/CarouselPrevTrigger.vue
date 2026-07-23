<script setup lang="ts">
import { Carousel } from "@ark-ui/vue/carousel";
import { ArrowLeftIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Carousel.PrevTrigger
    :class="cn(
      'inline-flex size-9 select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-transparent text-sm font-medium text-foreground',
      'hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-transparent',
      'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="carousel-prev-trigger"
  >
    <slot>
      <ArrowLeftIcon />
    </slot>
  </Carousel.PrevTrigger>
</template>
