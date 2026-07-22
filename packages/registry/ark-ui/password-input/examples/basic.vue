<script setup lang="ts">
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
</script>

<template>
  <PasswordInput.Root>
    <PasswordInput.Input placeholder="Enter your password" />
    <PasswordInput.VisibilityTrigger>
      <PasswordInput.Indicator />
    </PasswordInput.VisibilityTrigger>
  </PasswordInput.Root>
</template>
