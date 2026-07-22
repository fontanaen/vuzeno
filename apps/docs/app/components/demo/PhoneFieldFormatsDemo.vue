<script setup lang="ts">
import { PhoneField } from "@vuzeno/registry/ui/phone-field";
import { ref } from "vue";

const phone = ref<string>("");
const countryCode = ref<string>("FR");
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <p class="mb-2 text-sm text-muted-foreground">National</p>
      <PhoneField.Root v-model="phone" v-model:country-code="countryCode" format="national" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneField.CountrySelect flag-type="cdn" />
        <PhoneField.Input placeholder="Enter your phone number" />
      </PhoneField.Root>
    </div>

    <div>
      <p class="mb-2 text-sm text-muted-foreground">International</p>
      <PhoneField.Root v-model="phone" v-model:country-code="countryCode" format="international" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneField.CountrySelect flag-type="cdn" />
        <PhoneField.Input placeholder="Enter your phone number" />
      </PhoneField.Root>
    </div>
  </div>
</template>
