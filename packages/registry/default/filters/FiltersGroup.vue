<script setup lang="ts">
import { cn } from "@vuetella/ui/lib/utils";
import type { HTMLAttributes } from "vue";
import { injectFilterContext } from "./FiltersProvider.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { filters } = injectFilterContext();

function removeFilter(index: number) {
  filters.value.splice(index, 1);
}
</script>

<template>
  <div :class="cn('flex flex-wrap items-center gap-2', props.class)">
    <slot :remove-filter="removeFilter" />
  </div>
</template>