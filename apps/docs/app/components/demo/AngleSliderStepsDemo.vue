<script setup lang="ts">
import { AngleSlider } from "@vuzeno/registry/ui/angle-slider";

const markers = [0, 45, 90, 135, 180, 225, 270, 315];
</script>

<template>
  <AngleSlider.Root :step="15">
    <AngleSlider.Label>15 Step</AngleSlider.Label>
    <AngleSlider.Control>
      <AngleSlider.MarkerGroup>
        <AngleSlider.Marker
          v-for="value in markers"
          :key="value"
          :value="value"
        />
      </AngleSlider.MarkerGroup>
      <AngleSlider.Thumb />
    </AngleSlider.Control>
    <AngleSlider.ValueText />
    <AngleSlider.HiddenInput />
  </AngleSlider.Root>
</template>
