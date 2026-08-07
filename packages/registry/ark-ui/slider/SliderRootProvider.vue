<script setup lang="ts">
import { Slider, type SliderRootProviderProps } from "@ark-ui/vue/slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SliderRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Slider.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-64 flex-col gap-1.5 text-foreground',
      'data-[orientation=vertical]:h-48 data-[orientation=vertical]:max-w-max',
      props.class,
    )"
    data-slot="slider-root-provider"
  >
    <slot />
  </Slider.RootProvider>
</template>
