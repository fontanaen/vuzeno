<script setup lang="ts">
import { AngleSlider, type AngleSliderRootProviderProps } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AngleSliderRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <AngleSlider.RootProvider
    v-bind="rootProviderProps"
    :class="cn('relative size-30 flex flex-col items-center justify-center gap-1', props.class)"
    data-slot="angle-slider-root-provider"
  >
    <slot />
  </AngleSlider.RootProvider>
</template>
