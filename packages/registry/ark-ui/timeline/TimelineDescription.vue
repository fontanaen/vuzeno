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
  <ark.p
    :as-child="asChild"
    data-slot="timeline-description"
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </ark.p>
</template>
