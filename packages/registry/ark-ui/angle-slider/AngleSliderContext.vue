<script setup lang="ts">
import { AngleSlider } from "@ark-ui/vue/angle-slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <AngleSlider.Context
    
    :class="cn(props.class)"
    data-slot="angle-slider-context"
  >
    <slot />
  </AngleSlider.Context>
</template>
