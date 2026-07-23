<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Accordion.ItemContext
    
    :class="cn(props.class)"
    data-slot="accordion-item-context"
  >
    <slot />
  </Accordion.ItemContext>
</template>
