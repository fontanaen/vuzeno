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
  <ark.div
    :as-child="asChild"
    data-slot="typography-table-container"
    :class="cn('my-6 w-full overflow-x-auto rounded-md border', props.class)"
  >
    <slot />
  </ark.div>
</template>
