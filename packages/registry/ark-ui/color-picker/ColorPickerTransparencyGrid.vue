<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.TransparencyGrid
    :class="cn(
      'col-start-1 row-start-1 size-full rounded-[inherit]',
      props.class,
    )"
    data-slot="color-picker-transparency-grid"
  >
    <slot />
  </ColorPicker.TransparencyGrid>
</template>
