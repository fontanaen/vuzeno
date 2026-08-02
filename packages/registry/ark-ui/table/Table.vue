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
  <div data-slot="table" class="relative w-full px-1 pb-1 has-[tfoot]:pb-0 overflow-auto bg-accent dark:bg-card rounded-xl">
    <ark.table
      :as-child="asChild"
      :class="cn('w-full caption-bottom text-sm border-separate border-spacing-0', props.class)"
    >
      <slot />
    </ark.table>
  </div>
</template>
