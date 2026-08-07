<script setup lang="ts">
import { Accordion, type AccordionItemContentProps } from "@ark-ui/vue/accordion";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AccordionItemContentProps & { class?: HTMLAttributes["class"] }>();

const itemContentProps = reactiveOmit(props, "class");
</script>

<template>
  <Accordion.ItemContent
    v-bind="itemContentProps"
    :class="cn(
      'overflow-hidden rounded-lg',
      'data-[orientation=horizontal]:*:whitespace-nowrap',
      props.class,
    )"
    data-slot="accordion-item-content"
  >
    <div class="px-2 pb-2.5 text-foreground leading-normal">
      <slot />
    </div>
  </Accordion.ItemContent>
</template>

<style scoped>
[data-state="open"][data-orientation="vertical"] {
  animation: expand-height 200ms ease-out, fade-in 200ms ease-out;
}

[data-state="open"][data-orientation="horizontal"] {
  animation: expand-width 200ms ease-out, fade-in 200ms ease-out;
  will-change: width;
}

[data-state="closed"][data-orientation="vertical"] {
  animation: collapse-height 200ms ease-out, fade-out 200ms ease-out;
}

[data-state="closed"][data-orientation="horizontal"] {
  animation: collapse-width 200ms ease-out, fade-out 200ms ease-out;
  will-change: width;
}

@keyframes expand-height {
  from {
    height: 0;
  }
  to {
    height: var(--height);
  }
}

@keyframes expand-width {
  from {
    width: 0;
  }
  to {
    width: var(--width);
  }
}

@keyframes collapse-width {
  from {
    width: var(--width);
  }
  to {
    width: 0;
  }
}

@keyframes collapse-height {
  from {
    height: var(--height);
  }
  to {
    height: 0;
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
