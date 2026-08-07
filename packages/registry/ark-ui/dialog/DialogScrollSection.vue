<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <section
    :class="cn(
      '[&_h3]:m-0 [&_h3]:mb-1 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground',
      '[&_p]:m-0 [&_p]:text-sm [&_p]:leading-normal [&_p]:text-muted-foreground',
      props.class,
    )"
    data-slot="dialog-scroll-section"
  >
    <slot />
  </section>
</template>
