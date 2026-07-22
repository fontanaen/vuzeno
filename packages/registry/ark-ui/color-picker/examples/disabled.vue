<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
</script>

<template>
  <ColorPicker.Root disabled :default-value="parseColor('#eb5e41')">
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
  </ColorPicker.Root>
</template>
