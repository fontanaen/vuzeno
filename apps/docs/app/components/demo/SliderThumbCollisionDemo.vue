<script setup lang="ts">
import { Slider } from "@vuzeno/registry/ui/slider";
</script>

<template>
  <Slider.Root thumb-collision-behavior="push" :default-value="[25, 60]">
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
      <Slider.Thumb :index="1">
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
  </Slider.Root>
</template>
