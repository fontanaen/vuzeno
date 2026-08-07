<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.Context
    :class="cn(props.class)"
    data-slot="color-picker-context"
  >
    <slot />
  </ColorPicker.Context>
</template>
