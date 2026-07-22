<script setup lang="ts">
import { Marquee } from "@ark-ui/vue/marquee";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Marquee.Content
    :class="cn(
      '[animation-timing-function:linear] [animation-duration:var(--marquee-duration)] [animation-delay:var(--marquee-delay)] [animation-iteration-count:var(--marquee-loop-count)]',
      'data-[reverse]:[animation-direction:reverse]',
      'motion-reduce:!animate-none',
      props.class,
    )"
    data-slot="marquee-content"
  >
    <slot />
  </Marquee.Content>
</template>

<style scoped>
[data-side="start"],
[data-side="end"] {
  animation-name: marqueeX;
}

[data-side="top"],
[data-side="bottom"] {
  animation-name: marqueeY;
}

@media (prefers-reduced-motion: reduce) {
  [data-slot="marquee-content"] {
    animation: none !important;
  }
}

@keyframes marqueeX {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(var(--marquee-translate));
  }
}

@keyframes marqueeY {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(var(--marquee-translate));
  }
}
</style>
