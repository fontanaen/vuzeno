<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PolymorphicProps
  >(),
  {
    asChild: false,
  },
);
</script>

<template>
  <ark.h3
    :as-child="asChild"
    data-slot="timeline-title"
    :class="cn('text-sm font-semibold leading-none tracking-tight', props.class)"
  >
    <slot />
  </ark.h3>
</template>
