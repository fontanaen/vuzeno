<script setup lang="ts">
import {
  ColorArea,
  ColorEyeDropper,
  ColorField,
  ColorFieldInput,
  ColorHsbField,
  ColorHslField,
  ColorPicker,
  ColorPickerContent,
  ColorPickerTrigger,
  ColorRgbField,
  ColorSlider,
  ColorSpaceSelect,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@vuzeno/registry/ui/color";
import { InputGroupAddon, InputGroupButton } from "@vuzeno/ui/components/input-group";
import { Separator } from "@vuzeno/ui/components/separator";
import { type Color, type ColorSpace, colorToString, normalizeColor } from "reka-ui";
import { computed, ref } from "vue";

definePage({
  name: "components.color-picker",
});

const history = ref<string[]>(["#56d799", "#fa5454", "#feb400"]);

const colorSpace = ref<ColorSpace | "hex">("hsl");
const currentColor = ref<Color>(normalizeColor("#56d799"));
const hexColor = computed(() => colorToString(currentColor.value, "hex"));
</script>

<template>
  <div class="flex flex-col gap-4">
    <ColorPicker>
      <ColorField :model-value="hexColor" @update:color="currentColor = $event">
        <InputGroupAddon>
          <InputGroupButton size="icon-xs">
            <ColorPickerTrigger>
              <ColorSwatch :color="hexColor" />
            </ColorPickerTrigger>
          </InputGroupButton>
        </InputGroupAddon>
        <ColorFieldInput />
      </ColorField>

      <ColorPickerContent class="p-2" side="bottom" align="start" :side-offset="12">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <ColorSwatch :color="hexColor" class="size-10 rounded-md" />
            <div class="flex flex-col">
              <span class="text-sm font-medium">Color</span>
              <span class="text-xs text-muted-foreground">{{ hexColor }}</span>
            </div>
          </div>

          <ColorEyeDropper v-model:color="currentColor" />
        </div>

        <ColorArea 
          :model-value="currentColor" 
          color-space="hsl"
          x-channel="saturation"
          y-channel="lightness"
          class="w-full h-[150px] rounded-md"
          @update:color="currentColor = $event"
        />

        <div class="text-xs text-muted-foreground mt-4">Hue</div>
        <ColorSlider channel="hue" :model-value="currentColor" class="w-full h-4 rounded-md" @update:color="currentColor = $event" />
        
        <div class="text-xs text-muted-foreground mt-2">Alpha</div>
        <ColorSlider channel="alpha" :model-value="currentColor" class="w-full h-4 rounded-md" @update:color="currentColor = $event" />

        <div class="flex items-center justify-between gap-2 mt-4">
          <ColorSpaceSelect v-model="colorSpace" size="sm" class="flex-none" />

          <ColorHslField v-if="colorSpace === 'hsl'" v-model="currentColor" size="sm" class="flex-none" />
          <ColorHsbField v-if="colorSpace === 'hsb'" v-model="currentColor" size="sm" class="flex-none" />
          <ColorRgbField v-if="colorSpace === 'rgb'" v-model="currentColor" size="sm" class="flex-none" />
        </div>

        <Separator orientation="horizontal" class="my-2 data-[orientation=horizontal]:bg-accent" />

        <div class="flex flex-col gap-2">
          <div class="text-xs text-muted-foreground">Last colors</div>
          <ColorSwatchPicker :model-value="hexColor" class="flex flex-wrap gap-1" @update:model-value="currentColor = normalizeColor($event as string)">
            <ColorSwatchPickerItem v-for="(color, index) in history" :key="index" :value="color" />
          </ColorSwatchPicker>
        </div>
      </ColorPickerContent>
    </ColorPicker>
  </div>
</template>