<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
</script>

<template>
  <Field.Root class="max-w-sm">
    <Field.Label>Password</Field.Label>
    <Field.Context v-slot="field">
      <PasswordInput.Root>
        <PasswordInput.Input v-bind="field.getInputProps()" placeholder="Enter your password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Root>
    </Field.Context>
    <Field.HelperText>Enter your password</Field.HelperText>
    <Field.ErrorText>Password is required</Field.ErrorText>
  </Field.Root>
</template>
