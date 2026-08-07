<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
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
  <ark.div data-slot="filters" :class="cn('flex flex-wrap items-center gap-2', props.class)">
    <slot />
  </ark.div>
</template>
