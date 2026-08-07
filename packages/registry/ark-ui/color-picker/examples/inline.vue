<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { Check } from "@lucide/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";

const swatches = ["red", "blue", "green", "orange"];
</script>

<template>
  <ColorPicker.Root inline :default-value="parseColor('#eb5e41')">
    <ColorPicker.Area>
      <ColorPicker.AreaBackground />
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>

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
  </ColorPicker.Root>
</template>
