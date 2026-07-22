<script setup lang="ts">
import { Slider } from "@vuzeno/registry/ui/slider";

const marks = [0, 25, 50, 75, 100];
</script>

<template>
  <Slider.Root :default-value="[50]">
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
    <Slider.MarkerGroup>
      <Slider.Marker v-for="value in marks" :key="value" :value="value">
        {{ value }}
      </Slider.Marker>
    </Slider.MarkerGroup>
  </Slider.Root>
</template>
