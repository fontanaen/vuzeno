<script setup lang="ts">
import { ColorHexField, ColorHsbField, ColorHslField, ColorRgbField, ColorSpaceSelect } from "@vuzeno/registry/ui/color";
import { Field, FieldGroup, FieldLabel } from "@vuzeno/ui/components/field";
import { type Color, type ColorSpace, colorToString, normalizeColor } from "reka-ui";
import { computed, ref } from "vue";

const colorSpace = ref<ColorSpace | "hex">("hsl");
const currentColor = ref<Color>(normalizeColor("#56d799"));
const hexColor = computed({
  get: () => colorToString(currentColor.value, "hex"),
  set: (v) => {
    currentColor.value = normalizeColor(v);
  },
});

const fieldOptions = [
  { value: "hsl" as const, label: "HSL" },
  { value: "hsb" as const, label: "HSB" },
  { value: "rgb" as const, label: "RGB" },
  { value: "hex" as const, label: "Hex" },
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <FieldLabel>Format</FieldLabel>
      <div class="flex items-center gap-2 flex-wrap">
        <ColorSpaceSelect v-model="colorSpace" :options="fieldOptions" />
        <ColorHslField v-if="colorSpace === 'hsl'" v-model="currentColor" />
        <ColorHsbField v-if="colorSpace === 'hsb'" v-model="currentColor" />
        <ColorRgbField v-if="colorSpace === 'rgb'" v-model="currentColor" />
        <ColorHexField v-if="colorSpace === 'hex'" v-model="hexColor" />
      </div>
    </div>

    <FieldGroup class="w-fit">
      <Field>
        <FieldLabel>Small</FieldLabel>
        <div class="flex items-center gap-2">
          <ColorSpaceSelect v-model="colorSpace" :options="fieldOptions" size="sm" />
          <ColorHslField v-if="colorSpace === 'hsl'" v-model="currentColor" size="sm" />
          <ColorHsbField v-if="colorSpace === 'hsb'" v-model="currentColor" size="sm" />
          <ColorRgbField v-if="colorSpace === 'rgb'" v-model="currentColor" size="sm" />
          <ColorHexField v-if="colorSpace === 'hex'" v-model="hexColor" size="sm" />
        </div>
      </Field>

      <Field>
        <FieldLabel>Default</FieldLabel>
        <div class="flex items-center gap-2">
          <ColorSpaceSelect v-model="colorSpace" :options="fieldOptions" />
          <ColorHslField v-if="colorSpace === 'hsl'" v-model="currentColor" />
          <ColorHsbField v-if="colorSpace === 'hsb'" v-model="currentColor" />
          <ColorRgbField v-if="colorSpace === 'rgb'" v-model="currentColor" />
          <ColorHexField v-if="colorSpace === 'hex'" v-model="hexColor" />
        </div>
      </Field>

      <Field>
        <FieldLabel>Large</FieldLabel>
        <div class="flex items-center gap-2">
          <ColorSpaceSelect v-model="colorSpace" :options="fieldOptions" size="lg" />
          <ColorHslField v-if="colorSpace === 'hsl'" v-model="currentColor" size="lg" />
          <ColorHsbField v-if="colorSpace === 'hsb'" v-model="currentColor" size="lg" />
          <ColorRgbField v-if="colorSpace === 'rgb'" v-model="currentColor" size="lg" />
          <ColorHexField v-if="colorSpace === 'hex'" v-model="hexColor" size="lg" />
        </div>
      </Field>
    </FieldGroup>
  </div>
</template>
