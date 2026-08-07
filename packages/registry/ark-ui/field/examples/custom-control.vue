<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root invalid>
    <Field.Label>Any Control</Field.Label>
    <Field.Context v-slot="field">
      <input v-bind="field.getInputProps()" class="border border-destructive rounded-md" />
    </Field.Context>
    <Field.HelperText>Uses getInputProps() for maximum flexibility</Field.HelperText>
    <Field.ErrorText>This field has an error</Field.ErrorText>
  </Field.Root>
</template>
