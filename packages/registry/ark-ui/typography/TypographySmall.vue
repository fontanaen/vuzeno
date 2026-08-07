<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  PolymorphicProps & {
    class?: HTMLAttributes["class"];
  }
>();
</script>

<template>
  <ark.small
    :as-child="asChild"
    data-slot="typography-small"
    :class="
      cn('text-xs font-medium leading-none sm:text-sm', props.class)
    "
  >
    <slot />
  </ark.small>
</template>
