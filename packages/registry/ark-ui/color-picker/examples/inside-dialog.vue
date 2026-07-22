<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Pipette, X } from "lucide-vue-next";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm" class="absolute top-4 right-4">
          <X />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Choose a color</Dialog.Title>
      <Dialog.Description>
        Wrap the positioner in a portal so the popover appears above the dialog.
      </Dialog.Description>
      <div class="mt-4">
        <ColorPicker.Root
          :default-value="parseColor('#eb5e41')"
          lazy-mount
          unmount-on-exit
        >
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

          <Teleport to="body">
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
          </Teleport>
        </ColorPicker.Root>
      </div>
    </Dialog.Content>
  </Dialog.Root>
</template>
