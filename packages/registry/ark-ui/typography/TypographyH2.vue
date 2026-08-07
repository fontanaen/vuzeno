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
  <ark.h2
    :as-child="asChild"
    data-slot="typography-h2"
    :class="
      cn(
        'mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 sm:text-3xl',
        props.class,
      )
    "
  >
    <slot />
  </ark.h2>
</template>
