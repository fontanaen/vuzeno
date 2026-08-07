<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { Check, Pipette } from "@lucide/vue";
import { ColorPicker, useColorPicker } from "@vuzeno/registry/ui/color-picker";

const swatches = ["red", "blue", "green", "orange"];

const colorPicker = useColorPicker({ defaultValue: parseColor("#eb5e41") });
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      Color: {{ colorPicker.valueAsString }}
    </output>

    <ColorPicker.RootProvider :value="colorPicker">
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.ChannelInput channel="alpha" />
        <ColorPicker.Trigger>
          <ColorPicker.Swatch :value="parseColor('#eb5e41')">
            <ColorPicker.TransparencyGrid />
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
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger
            v-for="color in swatches"
            :key="color"
            :value="color"
          >
            <ColorPicker.Swatch :value="color">
              <ColorPicker.SwatchIndicator>
                <Check />
              </ColorPicker.SwatchIndicator>
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
        <ColorPicker.View format="rgba">
          <div class="flex gap-2 [&>*]:flex-1">
            <ColorPicker.ChannelInput channel="hex" />
            <ColorPicker.ChannelInput channel="alpha" />
          </div>
        </ColorPicker.View>
        <ColorPicker.View format="hsla">
          <div class="flex gap-2 [&>*]:flex-1">
            <ColorPicker.ChannelInput channel="hue" />
            <ColorPicker.ChannelInput channel="saturation" />
            <ColorPicker.ChannelInput channel="lightness" />
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker.RootProvider>
  </div>
</template>
