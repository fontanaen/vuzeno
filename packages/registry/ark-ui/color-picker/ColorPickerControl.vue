<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.Control
    :class="cn(
      'flex flex-row items-center gap-2',
      props.class,
    )"
    data-slot="color-picker-control"
  >
    <slot />
  </ColorPicker.Control>
</template>
