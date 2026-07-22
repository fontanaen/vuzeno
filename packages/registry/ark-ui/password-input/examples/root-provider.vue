<script setup lang="ts">
import { PasswordInput, usePasswordInput } from "@vuzeno/registry/ui/password-input";

const passwordInput = usePasswordInput();
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      password input is {{ passwordInput.visible ? "visible" : "hidden" }}
    </output>

    <PasswordInput.RootProvider :value="passwordInput">
      <PasswordInput.Input placeholder="Enter your password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator />
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.RootProvider>
  </div>
</template>
