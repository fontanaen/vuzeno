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
  <ark.ul
    :as-child="asChild"
    data-slot="typography-list"
    :class="
      cn(
        'my-6 ml-4 list-disc text-sm sm:ml-6 sm:text-base [&>li]:mt-2',
        props.class,
      )
    "
  >
    <slot />
  </ark.ul>
</template>
