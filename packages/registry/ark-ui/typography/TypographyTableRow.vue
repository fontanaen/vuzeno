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
  <ark.tr
    :as-child="asChild"
    data-slot="typography-table-row"
    :class="
      cn(
        'border-b last:border-b-0 has-data-[slot=typography-table-head]:last:border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        props.class,
      )
    "
  >
    <slot />
  </ark.tr>
</template>
