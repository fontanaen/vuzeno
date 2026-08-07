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
  <ark.tfoot
    :as-child="asChild"
    data-slot="table-footer"
    :class="
      cn(
        'font-medium [&_tr]:h-10',
        props.class
      )
    "
  >
    <slot />
  </ark.tfoot>
</template>
