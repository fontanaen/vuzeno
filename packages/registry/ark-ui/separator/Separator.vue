<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface SeparatorProps extends PolymorphicProps {
  orientation?: "horizontal" | "vertical";
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: "horizontal",
});
</script>

<template>
  <ark.div
    data-slot="separator"
    :data-orientation="props.orientation"
    :class="
      cn(
        'shrink-0 bg-border',
        'data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full',
        props.class,
      )
    "
  >
    <slot />
  </ark.div>
</template>
