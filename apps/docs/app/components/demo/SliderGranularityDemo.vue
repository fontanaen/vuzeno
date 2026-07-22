<script setup lang="ts">
import { Slider } from "@vuzeno/registry/ui/slider";
</script>

<template>
  <Slider.Root :step="0.01" :min="5" :max="10" :default-value="[7.5]">
    <div class="flex justify-between">
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
    </div>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb :index="0">
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
  </Slider.Root>
</template>
