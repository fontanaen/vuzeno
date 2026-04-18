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
    as: "p",
    asChild: false,
  },
);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="timeline-description"
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </Primitive>
</template>
