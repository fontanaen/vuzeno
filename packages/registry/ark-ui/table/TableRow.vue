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
    data-slot="table-row"
    :class="
      cn(
        'transition-colors data-[state=selected]:bg-muted',
        props.class,
      )
    "
  >
    <slot />
  </ark.tr>
</template>
