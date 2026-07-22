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
