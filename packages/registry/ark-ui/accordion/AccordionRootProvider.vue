<script setup lang="ts">
import { Accordion, type AccordionRootProviderProps } from "@ark-ui/vue/accordion";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AccordionRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Accordion.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex text-foreground',
      'data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-96 data-[orientation=vertical]:max-w-[calc(100vw-8rem)]',
      'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:h-80 data-[orientation=horizontal]:max-h-[calc(100vh-8rem)]',
      props.class,
    )"
    data-slot="accordion-root-provider"
  >
    <slot />
  </Accordion.RootProvider>
</template>
