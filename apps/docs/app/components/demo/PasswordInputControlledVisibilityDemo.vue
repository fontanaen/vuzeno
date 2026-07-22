<script setup lang="ts">
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="text-sm text-muted-foreground">
      Password is {{ visible ? "visible" : "hidden" }}
    </p>

    <PasswordInput.Root v-model:visible="visible">
      <PasswordInput.Input placeholder="Enter your password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator />
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Root>
  </div>
</template>
