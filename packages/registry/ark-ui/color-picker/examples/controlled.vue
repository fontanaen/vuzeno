<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { Pipette } from "@lucide/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { ref } from "vue";

const value = ref(parseColor("hsl(20, 100%, 50%)"));
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      Selected color: {{ value.toString("hex") }}
    </output>

    <ColorPicker.Root v-model="value">
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.ChannelInput channel="alpha" />
        <ColorPicker.Trigger>
          <ColorPicker.Swatch :value="value">
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
      </ColorPicker.Content>
    </ColorPicker.Root>
  </div>
</template>
