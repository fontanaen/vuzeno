<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.HiddenInput
    :class="cn(props.class)"
    data-slot="slider-hidden-input"
  />
</template>
