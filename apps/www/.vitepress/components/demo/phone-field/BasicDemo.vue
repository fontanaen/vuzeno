<script setup lang="ts">
import { PhoneField, PhoneFieldCountrySelect, PhoneFieldIndicator, PhoneFieldInput } from "@vuetella/registry/ui/phone-field";
import { ref } from "vue";

const phone = ref<string>("");
const countryCode = ref<string>("FR");
</script>

<template>
    <PhoneField v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneFieldCountrySelect search-placeholder="Search country" flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number" />
    </PhoneField>
</template>