<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { Pipette } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";

function onSubmit(event: Event) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  window.alert(JSON.stringify(Object.fromEntries(formData)));
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <ColorPicker.Root
      inline
      name="color"
      :default-value="parseColor('#eb5e41')"
    >
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
    </ColorPicker.Root>
    <Button type="submit">Submit</Button>
  </form>
</template>
