<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Accordion.ItemIndicator
    
    :class="cn(
      'inline-flex items-center justify-center text-foreground transition-[rotate] duration-200 ease-out origin-center',
      'data-[state=open]:rotate-180',
      '[&_svg]:size-[1.2em]',
      props.class,
    )"
    data-slot="accordion-item-indicator"
  >
    <slot />
  </Accordion.ItemIndicator>
</template>
