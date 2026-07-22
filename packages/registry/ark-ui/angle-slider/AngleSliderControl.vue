<script setup lang="ts">
import { AngleSlider, type AngleSliderControlProps, useAngleSliderContext } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<AngleSliderControlProps & { class?: HTMLAttributes["class"] }>();

const controlProps = reactiveOmit(props, "class");

const api = useAngleSliderContext();
const percent = computed(() => (api.value.value / 360) * 100);

const width = 120;
const thickness = 15;
</script>

<template>
  <AngleSlider.Control
    v-bind="controlProps"
    :class="cn(
      'absolute inset-0',
      props.class,
    )"
    data-slot="angle-slider-control"
  >
    <svg
      :width="width"
      :height="width"
      :viewBox="`0 0 ${width} ${width}`"
      :style="{ '--size': `${width}px`, '--thickness': `${thickness}px`, '--percent': percent }"
    >
      <title>Slider Ring</title>
      <circle 
        class="
          fill-transparent stroke-accent
          [--radius:calc(var(--size)/2-var(--thickness)/2)]
          [cx:calc(var(--size)/2)]
          [cy:calc(var(--size)/2)]
          [r:var(--radius)]
          stroke-[calc(var(--thickness)/2)]
        " 
      />
      <circle 
        class="
          fill-transparent stroke-primary
          [--radius:calc(var(--size)/2-var(--thickness)/2)]
          [cx:calc(var(--size)/2)]
          [cy:calc(var(--size)/2)]
          [r:var(--radius)]
          [stroke-width:var(--thickness)]
          [--circumference:calc(2*3.14159*var(--radius))]
          [stroke-dasharray:var(--circumference)]
          [stroke-dashoffset:calc(var(--circumference)*((100-var(--percent))/100))]
          [stroke-linecap:round]
          origin-center -rotate-90
        " 
      />
    </svg>

    <slot />
  </AngleSlider.Control>
</template>
