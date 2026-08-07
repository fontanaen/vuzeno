<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Accordion.ItemTrigger
    
    :class="cn(
      'flex items-center justify-between gap-4 px-2 m-0 border-0 bg-transparent text-sm font-medium leading-normal text-start outline-none',
      'hover:underline hover:underline-offset-2',
      'focus-visible:outline-2 focus-visible:outline-ring',
      'data-disabled:opacity-50 data-disabled:grayscale',
      'data-[orientation=vertical]:w-full data-[orientation=vertical]:min-h-12',
      'data-[orientation=horizontal]:h-full data-[orientation=horizontal]:min-w-10 data-[orientation=horizontal]:[writing-mode:sideways-lr]',
      props.class,
    )"
    data-slot="accordion-item-trigger"
  >
    <slot />
  </Accordion.ItemTrigger>
</template>
