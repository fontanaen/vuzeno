<script setup lang="ts">
import { PhoneField } from "@vuzeno/registry/ui/phone-field";
import { ref } from "vue";

const phone = ref<string>("");
const countryCode = ref<string>("FR");
</script>

<template>
  <PhoneField.Root v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change>
    <PhoneField.CountrySelect flag-type="cdn" />
    <PhoneField.Input placeholder="Enter your phone number">
      <PhoneField.Indicator />
    </PhoneField.Input>
  </PhoneField.Root>
</template>
