<script setup lang="ts">
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
</script>

<template>
  <div class="flex max-w-sm flex-col gap-4">
    <PasswordInput.Root size="sm">
      <PasswordInput.Input placeholder="Small" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator />
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Root>

    <PasswordInput.Root size="md">
      <PasswordInput.Input placeholder="Medium" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator />
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Root>

    <PasswordInput.Root size="lg">
      <PasswordInput.Input placeholder="Large" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator />
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Root>
  </div>
</template>
