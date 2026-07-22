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
  <ark.blockquote
    :as-child="asChild"
    data-slot="typography-blockquote"
    :class="
      cn(
        'mt-6 border-l-2 pl-4 text-sm italic sm:pl-6 sm:text-base',
        props.class,
      )
    "
  >
    <slot />
  </ark.blockquote>
</template>
