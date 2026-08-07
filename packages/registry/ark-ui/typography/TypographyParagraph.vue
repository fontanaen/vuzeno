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
  <ark.p
    :as-child="asChild"
    data-slot="typography-p"
    :class="
      cn(
        'text-sm leading-7 sm:text-base [&:not(:first-child)]:mt-6',
        props.class,
      )
    "
  >
    <slot />
  </ark.p>
</template>
