<script setup lang="ts">
import { Accordion, type AccordionItemProps } from "@ark-ui/vue/accordion";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <Accordion.Item
    v-bind="itemProps"
    :class="cn(
      '[overflow-anchor:none]',
      'data-[orientation=vertical]:block data-[orientation=vertical]:border-b data-[orientation=vertical]:border-border',
      'data-[orientation=horizontal]:flex data-[orientation=horizontal]:border-e data-[orientation=horizontal]:border-border',
      props.class,
    )"
    data-slot="accordion-item"
  >
    <slot />
  </Accordion.Item>
</template>
