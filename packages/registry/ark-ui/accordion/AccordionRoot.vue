<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Accordion.Root
    
    :class="cn(
      'flex text-foreground',
      'data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-96 data-[orientation=vertical]:max-w-[calc(100vw-8rem)]',
      'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:h-80 data-[orientation=horizontal]:max-h-[calc(100vh-8rem)]',
      props.class,
    )"
    data-slot="accordion"
  >
    <slot />
  </Accordion.Root>
</template>
