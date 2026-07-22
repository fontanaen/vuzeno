<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { Pipette } from "lucide-vue-next";

const swatches = ["red", "blue", "green", "orange"] as const;
</script>

<template>
  <ColorPicker.Root :default-value="parseColor('#eb5e41')">
    <ColorPicker.Label>Color</ColorPicker.Label>

    <ColorPicker.Control>
      <ColorPicker.ChannelInput channel="hex" />
      <ColorPicker.ChannelInput channel="alpha" />
      <ColorPicker.Trigger class="size-9 border border-input rounded-lg flex items-center justify-center">
        <ColorPicker.Swatch :value="parseColor('#eb5e41')" class="rounded-sm">
          <ColorPicker.ValueSwatch />
        </ColorPicker.Swatch>
      </ColorPicker.Trigger>
    </ColorPicker.Control>

    <ColorPicker.Content>
      <ColorPicker.Area>
        <ColorPicker.AreaBackground />
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
      <div class="flex items-center gap-3">
        <ColorPicker.EyeDropperTrigger>
          <Pipette />
        </ColorPicker.EyeDropperTrigger>
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
    </ColorPicker.Content>
  </ColorPicker.Root>
</template>
