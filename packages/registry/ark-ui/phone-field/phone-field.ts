import PhoneFieldCountryFlag from "./PhoneFieldCountryFlag.vue";
import PhoneFieldCountrySelect from "./PhoneFieldCountrySelect.vue";
import PhoneFieldIndicator from "./PhoneFieldIndicator.vue";
import PhoneFieldInput from "./PhoneFieldInput.vue";
import PhoneFieldRoot from "./PhoneFieldRoot.vue";

export const PhoneField = {
  Root: PhoneFieldRoot,
  CountrySelect: PhoneFieldCountrySelect,
  CountryFlag: PhoneFieldCountryFlag,
  Input: PhoneFieldInput,
  Indicator: PhoneFieldIndicator,
} as const;
