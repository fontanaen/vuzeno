<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { Primitive } from "reka-ui";
import { type HTMLAttributes, toRefs } from "vue";
import { type FiltersStyle, provideFiltersStyleContext } from "./context";

const props = withDefaults(
  defineProps<{
    filterStyle?: FiltersStyle;
    class?: HTMLAttributes["class"];
  }>(),
  {
    filterStyle: "long",
  },
);

const { filterStyle } = toRefs(props);

provideFiltersStyleContext({ style: filterStyle });
</script>

<template>
  <Primitive as="div" data-slot="filters" :class="cn('flex flex-wrap items-center gap-2', props.class)">
    <slot />
  </Primitive>
</template>
