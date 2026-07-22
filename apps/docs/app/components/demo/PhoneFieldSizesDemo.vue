<script setup lang="ts">
import { PhoneField } from "@vuzeno/registry/ui/phone-field";
import { ref } from "vue";

const phone = ref<string>("");
const countryCode = ref<string>("FR");
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <p class="mb-2 text-sm text-muted-foreground">Small</p>
      <PhoneField.Root v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change size="sm">
        <PhoneField.CountrySelect flag-type="cdn" />
        <PhoneField.Input placeholder="Enter your phone number" />
      </PhoneField.Root>
    </div>

    <div>
      <p class="mb-2 text-sm text-muted-foreground">Default</p>
      <PhoneField.Root v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneField.CountrySelect flag-type="cdn" />
        <PhoneField.Input placeholder="Enter your phone number" />
      </PhoneField.Root>
    </div>

    <div>
      <p class="mb-2 text-sm text-muted-foreground">Large</p>
      <PhoneField.Root v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change size="lg">
        <PhoneField.CountrySelect flag-type="cdn" />
        <PhoneField.Input placeholder="Enter your phone number" />
      </PhoneField.Root>
    </div>
  </div>
</template>
