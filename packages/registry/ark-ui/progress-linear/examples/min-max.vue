<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { ProgressLinear } from "@vuzeno/registry/ui/progress-linear";
</script>

<template>
  <Field.Root>
    <ProgressLinear.Root :default-value="20" :min="10" :max="30">
      <Field.Label>Label</Field.Label>
      
      <ProgressLinear.Value />
      <ProgressLinear.Track />
    </ProgressLinear.Root>
  </Field.Root>
</template>
