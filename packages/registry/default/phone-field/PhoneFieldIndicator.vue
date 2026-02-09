<script setup lang="ts">
import { isValidPhoneNumber } from "libphonenumber-js";
import { CheckIcon } from "lucide-vue-next";
import { InputGroupAddon } from "@/components/ui/input-group";
import { injectPhoneFieldContext } from "./PhoneField.vue";

const { rawValue } = injectPhoneFieldContext();
</script>
    
<template>
    <InputGroupAddon align="inline-end">
        <CheckIcon class="size-4 text-muted-foreground opacity-0 transition-opacity duration-100" :class="{ 'opacity-100': rawValue && isValidPhoneNumber(rawValue) }" />
    </InputGroupAddon>
</template>