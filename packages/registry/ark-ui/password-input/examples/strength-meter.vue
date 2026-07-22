<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
import { computed, ref } from "vue";

type Strength = "weak" | "medium" | "strong";

const password = ref("asdfasdf");

const strength = computed((): Strength | null => {
  if (!password.value) {
    return null;
  }

  const diversity = [/[a-z]/.test(password.value), /[A-Z]/.test(password.value), /\d/.test(password.value), /[^a-zA-Z0-9]/.test(password.value)].filter(Boolean).length;

  if (password.value.length >= 8 && diversity >= 4) {
    return "strong";
  }
  if (password.value.length >= 6 && diversity >= 2) {
    return "medium";
  }
  return "weak";
});
</script>

<template>
  <Field.Root class="max-w-sm">
    <Field.Label>Password</Field.Label>
    <PasswordInput.Root>
      <PasswordInput.Input v-model="password" placeholder="Enter your password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator />
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Root>
    <div v-if="strength" class="mt-2">
      <div class="h-2 overflow-hidden rounded-sm bg-muted">
        <div
          class="h-full transition-[width] duration-200 ease-out data-[strength=medium]:w-[60%] data-[strength=medium]:bg-orange-500 data-[strength=strong]:w-full data-[strength=strong]:bg-green-600 data-[strength=weak]:w-[30%] data-[strength=weak]:bg-destructive"
          :data-strength="strength"
        />
      </div>
      <div class="mt-1 text-xs text-muted-foreground capitalize">
        {{ strength }} password
      </div>
    </div>
  </Field.Root>
</template>
