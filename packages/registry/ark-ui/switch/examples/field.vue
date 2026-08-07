<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Switch } from "@vuzeno/registry/ui/switch";
</script>

<template>
  <Field.Root class="items-center">
    <Switch.Root>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
    </Switch.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
