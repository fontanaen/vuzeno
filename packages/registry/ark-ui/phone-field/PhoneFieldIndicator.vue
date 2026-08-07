<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { isValidPhoneNumber } from "libphonenumber-js";
import { InputGroup } from "../input-group";
import { injectPhoneFieldContext } from "./PhoneFieldRoot.vue";

const { rawValue } = injectPhoneFieldContext();
</script>

<template>
  <InputGroup.Addon align="inline-end" data-slot="phone-field-indicator">
    <CheckIcon class="size-4 text-muted-foreground opacity-0 transition-opacity duration-100" :class="{ 'opacity-100': rawValue && isValidPhoneNumber(rawValue) }" />
  </InputGroup.Addon>
</template>
