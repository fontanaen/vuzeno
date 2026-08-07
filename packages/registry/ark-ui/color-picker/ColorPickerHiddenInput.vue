<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.HiddenInput
    :class="cn(props.class)"
    data-slot="color-picker-hidden-input"
  >
    <slot />
  </ColorPicker.HiddenInput>
</template>
