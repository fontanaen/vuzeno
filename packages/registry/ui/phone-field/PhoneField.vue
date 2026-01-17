  <script lang="ts">
import { toRefs } from "@vueuse/core";
import { type CountryCode, getCountryCallingCode } from "libphonenumber-js";
import { createContext } from "reka-ui";
import { computed, type Ref } from "vue";

export type PhoneFieldProps = {
  countryCode?: CountryCode | string;
  defaultCountryCode?: CountryCode | string;

  modelValue?: string;
  /**
   * The display format of the phone number
   * @default "international"
   */
  format?: "international" | "national" | "e164";
  size?: "sm" | "default" | "lg";
  preferredCountries?: string[];
  availableCountries?: string[];
  ignoredCountries?: string[];
};

export type PhoneFieldContext<P extends PhoneFieldProps> = {
  countryCode: Ref<CountryCode>;
  callingCode: Ref<string>;
  size: Ref<NonNullable<P["size"]>>;
  ignoredCountries: Ref<P["ignoredCountries"]>;
  preferredCountries: Ref<P["preferredCountries"]>;
  availableCountries: Ref<P["availableCountries"]>;
  rawValue: Ref<P["modelValue"]>;
  format: Ref<NonNullable<P["format"]>>;
};

export const [injectPhoneFieldContext, providePhoneFieldContext] = createContext<PhoneFieldContext<PhoneFieldProps>>("PhoneFieldContext");
</script>

<script setup lang="ts">
import { ButtonGroup } from "@vuetella/ui/components/button-group";

const props = withDefaults(defineProps<PhoneFieldProps>(), {
    format: "international",
    ignoredCountries: () => ['AC', 'TA'],
    size: "default",
});

const phone = defineModel<string>();
const countryCode = defineModel<string>('countryCode');
const { ignoredCountries, preferredCountries, availableCountries, format, size } = toRefs(props);

const callingCode = computed(() => {
  return getCountryCallingCode(countryCode.value as CountryCode);
});

providePhoneFieldContext({
    countryCode: countryCode as Ref<CountryCode>,
    callingCode,
    size,
    ignoredCountries,
    preferredCountries,
    availableCountries,
    rawValue: phone,
    format: format,
});
</script>
    
<template>
    <ButtonGroup>
        <slot />
    </ButtonGroup>
</template>