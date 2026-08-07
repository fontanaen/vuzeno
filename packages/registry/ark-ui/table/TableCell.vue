<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes, TdHTMLAttributes } from "vue";

const props = defineProps<
  PolymorphicProps & {
    class?: HTMLAttributes["class"];
    colspan?: TdHTMLAttributes["colspan"];
  }
>();
</script>

<template>
  <ark.td
    :as-child="asChild"
    data-slot="table-cell"
    :colspan="colspan"
    :class="
      cn(
        'px-4 py-2 align-middle has-[[role=checkbox]]:pr-0',
        props.class,
      )
    "
  >
    <slot />
  </ark.td>
</template>
