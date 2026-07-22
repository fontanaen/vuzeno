<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.ValueText
    :class="cn(
      'text-sm font-medium leading-5 text-foreground',
      props.class,
    )"
    data-slot="slider-value-text"
  />
</template>
