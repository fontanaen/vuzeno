<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.AreaBackground
    
    :class="cn(
      'size-full rounded-[inherit]',
      props.class,
    )"
    data-slot="color-picker-area-background"
  >
    <slot />
  </ColorPicker.AreaBackground>
</template>
