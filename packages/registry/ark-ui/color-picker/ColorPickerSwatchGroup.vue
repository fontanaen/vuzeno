<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.SwatchGroup
    :class="cn(
      'flex flex-wrap gap-2',
      props.class,
    )"
    data-slot="color-picker-swatch-group"
  >
    <slot />
  </ColorPicker.SwatchGroup>
</template>
