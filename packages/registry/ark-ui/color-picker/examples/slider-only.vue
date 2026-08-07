<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
</script>

<template>
  <ColorPicker.Root inline :default-value="parseColor('#5dd016')">
    <!-- <div class="flex items-center gap-2">
      <div>
        <ColorPicker.TransparencyGrid />
        <ColorPicker.ValueSwatch />
      </div>
      <ColorPicker.ValueText />
    </div> -->
    <ColorPicker.View format="rgba">
      <div>
        <span>R</span>
        <ColorPicker.ChannelSlider channel="red">
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </div>
      <div>
        <span>G</span>
        <ColorPicker.ChannelSlider channel="green">
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </div>
      <div>
        <span>B</span>
        <ColorPicker.ChannelSlider channel="blue">
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </div>
    </ColorPicker.View>
  </ColorPicker.Root>
</template>