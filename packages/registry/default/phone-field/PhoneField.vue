  <script lang="ts">
import { toRefs } from "@vueuse/core";
import { type CountryCode, getCountryCallingCode } from "libphonenumber-js";
import { createContext } from "reka-ui";
import { computed, type Ref, watch } from "vue";

export type PhoneFieldProps = {
  countryCode?: CountryCode | string;
  /**
   * The default country code to use when no country code is provided
   * @default undefined
   */
  defaultCountryCode?: CountryCode | string;
  /**
   * Reset the phone number when the country changes
   * @default false
   */
  resetOnCountryChange?: boolean;

  modelValue?: string;
  /**
   * The display format of the phone number
   * @default "international"
   */
  format?: "international" | "national" | "e164";
  size?: "sm" | "default" | "lg";
  /**
   * Preferred countries to show first in the country select
   */
  preferredCountries?: string[];
  /**
   * Your list of available countries
   */
  availableCountries?: string[];
  /**
   * The countries to hide in the country select
   * @default ['AC', 'TA']
   */
  ignoredCountries?: string[];

  /**
   * The locale to format country names (e.g. "en", "fr", "en-US", "fr-FR", etc.)
   * @default "en"
   */
  locale?: string;

  disabled?: boolean;
};

export type PhoneFieldContext<P extends PhoneFieldProps> = {
  countryCode: Ref<CountryCode>;
  callingCode: Ref<string>;
  resetOnCountryChange: Ref<NonNullable<P["resetOnCountryChange"]>>;
  size: Ref<NonNullable<P["size"]>>;
  ignoredCountries: Ref<P["ignoredCountries"]>;
  preferredCountries: Ref<P["preferredCountries"]>;
  availableCountries: Ref<P["availableCountries"]>;
  rawValue: Ref<P["modelValue"]>;
  format: Ref<NonNullable<P["format"]>>;
  locale: Ref<NonNullable<P["locale"]>>;
  disabled: Ref<NonNullable<P["disabled"]>>;
};

export const [injectPhoneFieldContext, providePhoneFieldContext] = createContext<PhoneFieldContext<PhoneFieldProps>>("PhoneFieldContext");
</script>

<script setup lang="ts">
import { ButtonGroup } from "@vuzeno/ui/components/button-group";

const props = withDefaults(defineProps<PhoneFieldProps>(), {
    format: "international",
    ignoredCountries: () => ['AC', 'TA'],
    size: "default",
    resetOnCountryChange: false,
    locale: "en",
    disabled: false,
});

const phone = defineModel<string>();
const countryCode = defineModel<string>('countryCode');
const { ignoredCountries, preferredCountries, availableCountries, format, size, resetOnCountryChange, locale, disabled } = toRefs(props);

const callingCode = computed(() => {
  return getCountryCallingCode(countryCode.value as CountryCode);
});

providePhoneFieldContext({
    countryCode: countryCode as Ref<CountryCode>,
    callingCode,
    resetOnCountryChange,
    size,
    ignoredCountries,
    preferredCountries,
    availableCountries,
    rawValue: phone,
    format: format,
    locale,
    disabled,
});

watch(countryCode, () => {
  if (resetOnCountryChange.value) {
    phone.value = "";
  }
});
</script>
    
<template>
    <ButtonGroup>
        <slot />
    </ButtonGroup>
</template>