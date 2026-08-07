<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Input } from "@vuzeno/registry/ui/input";
</script>

<template>
  <Field.Root class="max-w-sm">
    <Field.Label>Email</Field.Label>
    <Field.Context v-slot="field">
      <Input v-bind="field.getInputProps()" type="email" placeholder="m@example.com" />
    </Field.Context>
    <Field.HelperText>We'll never share your email.</Field.HelperText>
  </Field.Root>
</template>
