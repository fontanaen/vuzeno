<script setup lang="ts">
import { AngleSlider, type AngleSliderRootProps } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AngleSliderRootProps & { class?: HTMLAttributes["class"] }>();
const rootProps = reactiveOmit(props, "class");
</script>

<template>
  <AngleSlider.Root
    v-bind="rootProps"
    :class="cn(
      'relative size-30 flex flex-col items-center justify-center gap-1',
      props.class,
    )"
    data-slot="angle-slider"
  >
    <slot />
  </AngleSlider.Root>
</template>
