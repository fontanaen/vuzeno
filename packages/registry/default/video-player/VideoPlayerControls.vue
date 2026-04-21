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
    data-slot="video-player-controls"
    :class="
      cn(
        'absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 bg-linear-to-t from-black/80 via-black/40 to-transparent px-3 pb-3 pt-8 text-white opacity-0 transition-opacity duration-200',
        'group-hover/video-player:opacity-100 group-focus-within/video-player:opacity-100',
        'group-data-[playing=false]/video-player:opacity-100',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
