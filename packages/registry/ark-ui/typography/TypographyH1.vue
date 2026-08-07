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
  <ark.h1
    :as-child="asChild"
    data-slot="typography-h1"
    :class="
      cn(
        'scroll-m-20 text-balance text-center text-3xl font-extrabold tracking-tight sm:text-4xl',
        props.class,
      )
    "
  >
    <slot />
  </ark.h1>
</template>
