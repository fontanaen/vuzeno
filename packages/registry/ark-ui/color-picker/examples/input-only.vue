<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { Pipette } from "lucide-vue-next";
</script>

<template>
  <ColorPicker.Root :default-value="parseColor('#eb5e41')">
    <ColorPicker.Label>Color</ColorPicker.Label>
    <ColorPicker.Control>
      <div class="relative">
        <ColorPicker.ValueSwatch class="absolute! top-1/2 -translate-y-1/2 left-2 size-5" />
        <ColorPicker.ChannelInput channel="hex" class="pl-9" />
      </div>
      <ColorPicker.EyeDropperTrigger>
        <Pipette />
      </ColorPicker.EyeDropperTrigger>
    </ColorPicker.Control>
  </ColorPicker.Root>
</template>
