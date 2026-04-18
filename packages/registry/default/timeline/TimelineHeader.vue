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
    as: "div",
    asChild: false,
  },
);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="timeline-header"
    :class="cn('flex flex-col gap-0.5', props.class)"
  >
    <slot />
  </Primitive>
</template>
