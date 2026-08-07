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
  <ark.h4
    :as-child="asChild"
    data-slot="typography-h4"
    :class="
      cn(
        'mt-6 scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl first:mt-0',
        props.class,
      )
    "
  >
    <slot />
  </ark.h4>
</template>
