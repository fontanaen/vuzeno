<script setup lang="ts">
import { isValidPhoneNumber } from "libphonenumber-js";
import { CheckIcon } from "lucide-vue-next";
import { InputGroup } from "../input-group";
import { injectPhoneFieldContext } from "./PhoneFieldRoot.vue";

const { rawValue } = injectPhoneFieldContext();
</script>

<template>
  <InputGroup.Addon align="inline-end" data-slot="phone-field-indicator">
    <CheckIcon class="size-4 text-muted-foreground opacity-0 transition-opacity duration-100" :class="{ 'opacity-100': rawValue && isValidPhoneNumber(rawValue) }" />
  </InputGroup.Addon>
</template>
