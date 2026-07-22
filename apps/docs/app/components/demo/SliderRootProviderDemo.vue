<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Slider, useSlider } from "@vuzeno/registry/ui/slider";

const slider = useSlider();
</script>

<template>
  <div class="flex flex-col gap-4 w-80">
    <Button variant="outline" size="sm" class="w-fit" @click="slider.focus()">
      Focus
    </Button>

    <Slider.RootProvider :value="slider">
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb :index="0">
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.RootProvider>
  </div>
</template>
