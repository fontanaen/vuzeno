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
  <ark.div
    :as-child="asChild"
    data-slot="typography-large"
    :class="cn('text-base font-semibold sm:text-lg', props.class)"
  >
    <slot />
  </ark.div>
</template>
