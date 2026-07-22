<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { ProgressLinear } from "@vuzeno/registry/ui/progress-linear";
</script>

<template>
  <Field.Root>
    <ProgressLinear.Root
      :default-value="42"
      :translations="{
        value: ({ value, max }) => (value == null ? 'Loading...' : `${value} of ${max} items loaded`),
      }"
    >
    <Field.Label>Label</Field.Label>
    
    <ProgressLinear.Value />
    <ProgressLinear.Track />
  </ProgressLinear.Root>
  </Field.Root>
</template>
