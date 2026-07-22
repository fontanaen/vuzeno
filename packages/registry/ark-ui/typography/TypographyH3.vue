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
  <ark.h3
    :as-child="asChild"
    data-slot="typography-h3"
    :class="
      cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight sm:text-2xl first:mt-0',
        props.class,
      )
    "
  >
    <slot />
  </ark.h3>
</template>
