import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const phoneFieldVariants = cva(undefined, {
  variants: {
    size: {
      sm: "h-8",
      md: "h-9",
      lg: "h-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;
