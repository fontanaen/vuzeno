<script setup lang="ts">
import { Collapsible } from "@ark-ui/vue/collapsible";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Collapsible.Indicator
    
    :class="cn(
      'inline-flex items-center justify-center text-muted-foreground',
      'origin-center transition-transform duration-[120ms] ease-out',
      'data-[state=open]:rotate-90',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="collapsible-indicator"
  >
    <slot />
  </Collapsible.Indicator>
</template>
