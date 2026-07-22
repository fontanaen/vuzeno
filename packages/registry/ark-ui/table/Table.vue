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
  <div data-slot="table" class="relative w-full overflow-auto">
    <ark.table
      :as-child="asChild"
      :class="cn('w-full caption-bottom text-sm border-separate border-spacing-x-0 border-spacing-y-2', props.class)"
    >
      <slot />
    </ark.table>
  </div>
</template>
