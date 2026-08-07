import { PhoneField } from "../../ark-ui/phone-field";

export default PhoneField.Root;
export const PhoneFieldCountryFlag = PhoneField.CountryFlag;
export const PhoneFieldCountrySelect = PhoneField.CountrySelect;
export const PhoneFieldIndicator = PhoneField.Indicator;
export const PhoneFieldInput = PhoneField.Input;
export type { CountryCode } from "libphonenumber-js";
export * from "../../ark-ui/phone-field/validation";
export { type PhoneFieldVariants, phoneFieldVariants } from "../../ark-ui/phone-field/variants";
export { PhoneField };
