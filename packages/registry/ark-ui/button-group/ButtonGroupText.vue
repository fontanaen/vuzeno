<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import type { ButtonGroupVariants } from ".";

interface Props extends PolymorphicProps {
  class?: HTMLAttributes["class"];
  orientation?: ButtonGroupVariants["orientation"];
}

const props = defineProps<Props>();
</script>

<template>
  <ark.div
    data-slot="button-group-text"
    :data-orientation="props.orientation"
    :class="cn('bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4', props.class)"
  >
    <slot />
  </ark.div>
</template>
