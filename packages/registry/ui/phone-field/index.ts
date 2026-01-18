export type { CountryCode } from "libphonenumber-js";
export { default as PhoneField } from "./PhoneField.vue";
export { default as PhoneFieldCountryFlag } from "./PhoneFieldCountryFlag.vue";
export { default as PhoneFieldCountrySelect } from "./PhoneFieldCountrySelect.vue";
export { default as PhoneFieldIndicator } from "./PhoneFieldIndicator.vue";
export { default as PhoneFieldInput } from "./PhoneFieldInput.vue";
export * from "./validation";

export const phoneFieldSizeVariants = {
  default: "h-10",
  sm: "h-9 ",
  lg: "h-11",
};
