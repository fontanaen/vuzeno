<script setup lang="ts">
import { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem } from "@vuzeno/registry/ui/color";
import { ref } from "vue";

const presetColors = ["#56d799", "#fa5454", "#feb400", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

const selectedColor = ref<string>(presetColors[0]!);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <ColorSwatch :color="selectedColor" class="size-8 rounded-md" />
      <span class="text-sm text-muted-foreground">{{ selectedColor }}</span>
    </div>
    <ColorSwatchPicker
      :model-value="selectedColor"
      class="flex flex-wrap gap-2"
      @update:model-value="selectedColor = ($event as string)"
    >
      <ColorSwatchPickerItem v-for="(color, index) in presetColors" :key="index" :value="color" />
    </ColorSwatchPicker>
  </div>
</template>
