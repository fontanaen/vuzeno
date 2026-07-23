<script setup lang="ts">
import { Collapsible } from "@ark-ui/vue/collapsible";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Collapsible.Content
    
    :class="cn(
      'flex flex-col gap-2 overflow-hidden',
      props.class,
    )"
    data-slot="collapsible-content"
  >
    <slot />
  </Collapsible.Content>
</template>

<style scoped>
[data-state="open"] {
  animation: expand-height 120ms ease-out, fade-in 120ms ease-out;
}

[data-state="open"][data-has-collapsed-size] {
  animation-name: expand-height;
}

[data-state="closed"] {
  animation: collapse-height 120ms ease-out, fade-out 120ms ease-out;
}

[data-state="closed"][data-has-collapsed-size] {
  animation-name: collapse-height;
  box-shadow: inset 0 -12px 12px -12px rgba(0, 0, 0, 0.5);
}

@keyframes expand-height {
  from {
    height: var(--collapsed-height, 0);
  }
  to {
    height: var(--height);
  }
}

@keyframes collapse-height {
  from {
    height: var(--height);
  }
  to {
    height: var(--collapsed-height, 0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
