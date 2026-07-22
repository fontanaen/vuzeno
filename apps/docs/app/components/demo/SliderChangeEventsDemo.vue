<script setup lang="ts">
import { Slider } from "@vuzeno/registry/ui/slider";
</script>

<template>
  <Slider.Root
    @value-change="(details) => console.log('onValueChange', details.value)"
    @value-change-end="(details) => console.log('onValueChangeEnd', details.value)"
  >
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
