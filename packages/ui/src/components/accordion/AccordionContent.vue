<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { AccordionContentProps } from "reka-ui";
import { AccordionContent } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "cnfast";

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden text-sm transition-all data-[state=closed]:animate-[collapse-height] data-[state=open]:animate-[expand-height]"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>

<style scoped>
@keyframes expand-height {
  from {
    height: 0;
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
    height: 0;
  }
}
</style>
