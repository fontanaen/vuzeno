<script setup lang="ts">
import { PhoneField, PhoneFieldCountrySelect, PhoneFieldIndicator, PhoneFieldInput, validatePhoneNumber } from "@vuzeno/registry/ui/phone-field";
import { Switch } from "@vuzeno/ui/components/switch";
import { ToggleGroup, ToggleGroupItem } from "@vuzeno/ui/components/toggle-group";
import { ref } from "vue";

definePage({
  name: "components.phone-field",
});

const countryCode = ref<string>("FR");
const phone = ref<string>("");
const resetOnCountryChange = ref<boolean>(false);

const size = ref<"sm" | "default" | "lg">("default");
const flagType = ref<"cdn" | "unicode">("unicode");

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

    <div class="flex items-center gap-2 text-sm">
      <Switch v-model="resetOnCountryChange" /> Reset on country change
    </div>

    <ToggleGroup v-model="flagType" variant="outline">
      <ToggleGroupItem v-for="flagType in ['cdn', 'unicode']" :key="flagType" :value="flagType">
        {{ flagType }}
      </ToggleGroupItem>
    </ToggleGroup>

    <PhoneField 
      v-model="phone" 
      v-model:country-code="countryCode" 
      :size="size" 
      format="international" 
      :reset-on-country-change="resetOnCountryChange" 
      :preferred-countries="['FR', 'US']" 
      :ignored-countries="['AC', 'TA', 'DE']"
    >
        <PhoneFieldCountrySelect :flag-type="flagType" />
        <PhoneFieldInput>
          <PhoneFieldIndicator />
        </PhoneFieldInput>
    </PhoneField>
  </div>
</template>