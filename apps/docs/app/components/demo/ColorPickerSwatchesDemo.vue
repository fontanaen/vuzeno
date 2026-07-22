<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { CheckIcon } from "lucide-vue-next";

const swatches = ["red", "blue", "green", "orange"];
</script>

<template>
  <ColorPicker.Root inline :default-value="parseColor('#eb5e41')">
    <output>
      Selected color:
      <ColorPicker.ValueText />
    </output>
    <ColorPicker.SwatchGroup>
      <ColorPicker.SwatchTrigger v-for="color in swatches" :key="color" :value="color">
        <ColorPicker.Swatch :value="color">
          <ColorPicker.SwatchIndicator>
            <CheckIcon />
          </ColorPicker.SwatchIndicator>
        </ColorPicker.Swatch>
      </ColorPicker.SwatchTrigger>
    </ColorPicker.SwatchGroup>
  </ColorPicker.Root>
</template>
