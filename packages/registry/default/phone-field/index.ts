export type { CountryCode } from "libphonenumber-js";
export { default as PhoneField } from "./PhoneField.vue";
export { default as PhoneFieldCountryFlag } from "./PhoneFieldCountryFlag.vue";
export { default as PhoneFieldCountrySelect } from "./PhoneFieldCountrySelect.vue";
export { default as PhoneFieldIndicator } from "./PhoneFieldIndicator.vue";
export { default as PhoneFieldInput } from "./PhoneFieldInput.vue";
export * from "./validation";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const phoneFieldVariants = cva(undefined, {
  variants: {
    size: {
      default: "h-10",
      sm: "h-9",
      lg: "h-11",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;
