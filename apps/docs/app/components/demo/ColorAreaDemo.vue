<script setup lang="ts">
import { ColorArea, ColorSlider } from "@vuzeno/registry/ui/color";
import { type Color, normalizeColor } from "reka-ui";
import { ref } from "vue";

const currentColor = ref<Color>(normalizeColor("#56d799"));
</script>

<template>
  <div class="flex flex-col gap-4 w-fit">
    <ColorArea
      :model-value="currentColor"
      color-space="hsl"
      x-channel="saturation"
      y-channel="lightness"
      class="w-[200px] h-[200px] rounded-md"
      @update:color="currentColor = $event"
    />
    <div class="text-xs text-muted-foreground">Hue</div>
    <ColorSlider channel="hue" :model-value="currentColor" class="w-[200px]" @update:color="currentColor = $event" />
  </div>
</template>
