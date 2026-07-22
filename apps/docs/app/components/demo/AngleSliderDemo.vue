<script setup lang="ts">
import { AngleSlider } from "@vuzeno/registry/ui/angle-slider";

const markers = [0, 45, 90, 135, 180, 225, 270, 315];
</script>

<template>
  <AngleSlider.Root>
    <AngleSlider.Label>Rotation</AngleSlider.Label>
    <AngleSlider.ValueText />
    <AngleSlider.Control>
      <AngleSlider.Thumb />
    </AngleSlider.Control>
    <AngleSlider.HiddenInput />
  </AngleSlider.Root>
</template>
