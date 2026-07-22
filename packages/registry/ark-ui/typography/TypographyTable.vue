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
  <ark.table
    :as-child="asChild"
    data-slot="typography-table"
    :class="cn('w-full text-sm sm:text-base', props.class)"
  >
    <slot />
  </ark.table>
</template>
