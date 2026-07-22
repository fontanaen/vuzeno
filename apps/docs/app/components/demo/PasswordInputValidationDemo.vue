<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { PasswordInput } from "@vuzeno/registry/ui/password-input";
import { computed, ref } from "vue";

const password = ref("");
const isValid = computed(() => password.value.length >= 8);
const showError = computed(() => password.value.length > 0 && !isValid.value);
</script>

<template>
  <Field.Root class="max-w-sm" :invalid="showError">
    <Field.Label>Password (min 8 characters)</Field.Label>
    <Field.Context v-slot="field">
      <PasswordInput.Root :invalid="showError">
        <PasswordInput.Input
          v-model="password"
          v-bind="field.getInputProps()"
          placeholder="Enter your password"
        />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Root>
    </Field.Context>
    <Field.ErrorText v-if="showError">
      Password must be at least 8 characters
    </Field.ErrorText>
    <p
      v-if="isValid && password.length > 0"
      class="text-sm text-green-600"
      data-valid="true"
    >
      Password is valid
    </p>
  </Field.Root>
</template>
