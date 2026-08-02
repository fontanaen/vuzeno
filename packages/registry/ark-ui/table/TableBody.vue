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
  <ark.tbody
    :as-child="asChild"
    data-slot="table-body"
    :class="
      cn(
        '[&_td]:bg-background',
        'dark:[&_td]:bg-muted [&_tr:hover_td]:bg-primary/5',
        '[&_tr:first-child_td:first-child]:rounded-tl-lg [&_tr:first-child_td:last-child]:rounded-tr-lg',
        '[&_tr:last-child_td:first-child]:rounded-bl-lg [&_tr:last-child_td:last-child]:rounded-br-lg',
        props.class,
      )
    "
  >
    <slot />
  </ark.tbody>
</template>
