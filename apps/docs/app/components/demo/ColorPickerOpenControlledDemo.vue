<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { Pipette } from "lucide-vue-next";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="open = !open">
      Toggle
    </Button>

    <ColorPicker.Root v-model:open="open" :default-value="parseColor('#eb5e41')">
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput channel="hex" />
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
      </ColorPicker.Content>
    </ColorPicker.Root>
  </div>
</template>
