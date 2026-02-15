<script setup lang="ts">
import { PhoneField, PhoneFieldCountrySelect, PhoneFieldInput } from "@vuetella/registry/ui/phone-field";
import { Field, FieldGroup, FieldLabel } from "@vuetella/ui/components/field";
import { ref } from "vue";

const phone = ref<string>("");
const countryCode = ref<string>("FR");
</script>

<template>
  <FieldGroup class="w-96">
    <Field>
      <FieldLabel>Small</FieldLabel>
      <PhoneField v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change size="sm">
        <PhoneFieldCountrySelect flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number" />
      </PhoneField>
    </Field>

    <Field>
      <FieldLabel>Default</FieldLabel>
      <PhoneField v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneFieldCountrySelect flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number" />
      </PhoneField>
    </Field>

    <Field>
      <FieldLabel>Large</FieldLabel>
      <PhoneField v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change size="lg">
        <PhoneFieldCountrySelect flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number" />
      </PhoneField>
    </Field>
  </FieldGroup>
</template>