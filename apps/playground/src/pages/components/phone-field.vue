<script setup lang="ts">
import { PhoneField, PhoneFieldCountrySelect, PhoneFieldIndicator, PhoneFieldInput } from "@vuetella/registry/ui/phone-field";
import { ToggleGroup, ToggleGroupItem } from "@vuetella/ui/components/toggle-group";
import { ref } from "vue";

definePage({
  name: "components.phone-field",
});

const countryCode = ref<string>("FR");
const phone = ref<string>("+330771");

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

    <PhoneField v-model="phone" v-model:country-code="countryCode" :size="size" :preferred-countries="['FR', 'US']" :ignored-countries="['AC', 'TA', 'DE']">
        <PhoneFieldCountrySelect />
        <PhoneFieldInput />
    </PhoneField>

    <PhoneField v-model="phone" v-model:country-code="countryCode" :size="size" format="national" :preferred-countries="['FR', 'US']" :ignored-countries="['AC', 'TA', 'DE']">
        <PhoneFieldCountrySelect />
        <PhoneFieldInput>
          <PhoneFieldIndicator />
        </PhoneFieldInput>
    </PhoneField>
  </div>
</template>