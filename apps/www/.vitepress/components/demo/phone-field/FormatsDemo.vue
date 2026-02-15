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
      <FieldLabel>National</FieldLabel>
      <PhoneField v-model="phone" v-model:country-code="countryCode" format="national" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneFieldCountrySelect flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number" />
      </PhoneField>
    </Field>

    <Field>
      <FieldLabel>International</FieldLabel>
      <PhoneField v-model="phone" v-model:country-code="countryCode" format="international" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneFieldCountrySelect flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number" />
      </PhoneField>
    </Field>
  </FieldGroup>
</template>