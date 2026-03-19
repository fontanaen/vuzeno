<script setup lang="ts">
import { PasswordField, PasswordFieldInput, PasswordFieldToggle } from "@vuzeno/registry/ui/password-field";
import { ref } from "vue";

definePage({
  name: "components.password-field",
});

const password = ref<string>("");
</script>

<template>
  <div class="flex flex-col gap-4">
    <PasswordField v-model="password">
      <PasswordFieldInput />
      <PasswordFieldToggle />
    </PasswordField>
  </div>
</template>