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
  <ark.div
    :as-child="asChild"
    data-slot="timeline-header"
    :class="cn('flex flex-col gap-0.5', props.class)"
  >
    <slot />
  </ark.div>
</template>
