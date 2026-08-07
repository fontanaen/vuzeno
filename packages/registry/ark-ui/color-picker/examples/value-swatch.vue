<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
</script>

<template>
  <ColorPicker.Root inline :default-value="parseColor('#eb5e41')">
    <ColorPicker.Area>
      <ColorPicker.AreaBackground />
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <div class="flex items-center gap-3">
      <ColorPicker.Swatch :value="parseColor('#eb5e41')">
        <ColorPicker.TransparencyGrid />
        <ColorPicker.ValueSwatch />
      </ColorPicker.Swatch>
      <div class="flex flex-1 flex-col gap-2.5">
        <ColorPicker.ChannelSlider channel="hue">
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
        <ColorPicker.ChannelSlider channel="alpha">
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </div>
    </div>
  </ColorPicker.Root>
</template>
