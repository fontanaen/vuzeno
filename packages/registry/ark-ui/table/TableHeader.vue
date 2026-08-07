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
  <ark.thead
    :as-child="asChild"
    data-slot="table-header"
    :class="cn('', props.class)"
  >
    <slot />
  </ark.thead>
</template>
