<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.Context
    :class="cn(props.class)"
    data-slot="slider-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </Slider.Context>
</template>
