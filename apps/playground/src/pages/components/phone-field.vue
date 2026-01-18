<script setup lang="ts">
import { PhoneField, PhoneFieldCountrySelect, PhoneFieldIndicator, PhoneFieldInput, validatePhoneNumber } from "@vuetella/registry/ui/phone-field";
import { ToggleGroup, ToggleGroupItem } from "@vuetella/ui/components/toggle-group";
import { ref } from "vue";

definePage({
  name: "components.phone-field",
});

const countryCodeFR = ref<string>("FR");
const countryCodeUS = ref<string>("US");
const phoneFR = ref<string>("+33771200669");
const phoneUS = ref<string>("+12133734");

const size = ref<"sm" | "default" | "lg">("default");

const buttonSizes: { size: "sm" | "default" | "lg"; variant: "outline" | "default" }[] = [
  {
    size: "sm",
    variant: "outline",
  },
  {
    size: "default",
    variant: "outline",
  },
  {
    size: "lg",
    variant: "outline",
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <ToggleGroup v-model="size" variant="outline">
      <ToggleGroupItem v-for="button in buttonSizes" :key="button.size" :value="button.size">
        {{ button.size }}
      </ToggleGroupItem>
    </ToggleGroup>

    <PhoneField 
      v-model="phoneFR" 
      v-model:country-code="countryCodeFR" 
      :size="size" 
      format="international" 
      reset-on-country-change 
      :preferred-countries="['FR', 'US']" 
      :ignored-countries="['AC', 'TA', 'DE']"
    >
        <PhoneFieldCountrySelect />
        <PhoneFieldInput />
    </PhoneField>

    <PhoneField v-model="phoneUS" v-model:country-code="countryCodeUS" :size="size" format="national" :preferred-countries="['FR', 'US']" :ignored-countries="['AC', 'TA', 'DE']">
        <PhoneFieldCountrySelect />
        <PhoneFieldInput>
          <PhoneFieldIndicator />
        </PhoneFieldInput>
    </PhoneField>
  </div>
</template>