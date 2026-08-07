<script setup lang="ts">
import { AngleSlider } from "@vuzeno/registry/ui/angle-slider";
import { ref } from "vue";

const value = ref(45);
const markers = [0, 45, 90, 135, 180, 225, 270, 315];
</script>

<template>
  <AngleSlider.Root
    v-model="value"
  >
    <AngleSlider.Label>Rotation</AngleSlider.Label>
    <AngleSlider.Control>
      <AngleSlider.MarkerGroup>
        <AngleSlider.Marker
          v-for="marker in markers"
          :key="marker"
          :value="marker"
        />
      </AngleSlider.MarkerGroup>
      <AngleSlider.Thumb />
    </AngleSlider.Control>
    <AngleSlider.ValueText />
    <AngleSlider.HiddenInput />
  </AngleSlider.Root>
</template>
