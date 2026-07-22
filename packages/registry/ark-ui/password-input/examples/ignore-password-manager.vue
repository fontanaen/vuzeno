<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
</script>

<template>
  <Field.Root class="max-w-sm">
    <Field.Label>API Key</Field.Label>
    <PasswordInput.Root ignore-password-managers>
      <PasswordInput.Input value="spd_1234567890" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator />
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Root>
  </Field.Root>
</template>
