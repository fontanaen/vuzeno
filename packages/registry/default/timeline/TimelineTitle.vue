<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "h3",
    asChild: false,
  },
);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="timeline-title"
    :class="cn('text-sm font-semibold leading-none tracking-tight', props.class)"
  >
    <slot />
  </Primitive>
</template>
