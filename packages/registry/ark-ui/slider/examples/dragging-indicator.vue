<script setup lang="ts">
import { Slider } from "@vuzeno/registry/ui/slider";
</script>

<template>
  <Slider.Root :default-value="[40]">
    <Slider.Label>Label</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb :index="0">
        <Slider.DraggingIndicator />
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
  </Slider.Root>
</template>
