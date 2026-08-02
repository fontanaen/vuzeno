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
  <ark.th
    :as-child="asChild"
    data-slot="table-head"
    :class="
      cn('h-10 px-4 text-sm font-medium text-accent-foreground/60 has-[[role=checkbox]]:pr-0')
    "
  >
    <div :class="cn('flex items-center gap-2 [&>svg]:size-4 [&>svg]:text-muted-foreground w-full', props.class)">
      <slot />
    </div>
  </ark.th>
</template>
