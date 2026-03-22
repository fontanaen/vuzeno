<script setup lang="ts">
import { PasswordField, PasswordFieldInput, PasswordFieldToggle } from "@vuzeno/registry/ui/password-field";
import { ref } from "vue";

const password = ref("");
</script>

<template>
  <PasswordField v-model="password" class="w-72">
    <PasswordFieldInput />
    <PasswordFieldToggle />
  </PasswordField>
</template>
