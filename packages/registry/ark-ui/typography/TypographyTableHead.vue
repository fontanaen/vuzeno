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
  <ark.th
    :as-child="asChild"
    data-slot="typography-table-head"
    :class="
      cn(
        'border-r last:border-r-0 px-3 py-1.5 text-sm text-left font-bold sm:px-4 sm:py-2 [[align=center]]:text-center [[align=right]]:text-right',
        props.class,
      )
    "
  >
    <slot />
  </ark.th>
</template>
