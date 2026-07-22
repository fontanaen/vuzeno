<script setup lang="ts">
import { parseColor } from "@ark-ui/vue";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <ColorPicker.Root :default-value="parseColor('#eb5e41')">
      <ColorPicker.Label>Label</ColorPicker.Label>
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
      <ColorPicker.Content />
    </ColorPicker.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
