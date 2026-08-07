import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const switchControlVariants = cva(
  "inline-flex shrink-0 items-center rounded-full bg-input p-0.5 transition-[background-color,box-shadow] duration-150 ease-out data-[state=checked]:bg-primary data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-input",
  {
    variants: {
      size: {
        sm: "h-4 w-8",
        default: "h-5 w-10",
        lg: "h-6 w-12.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const switchThumbVariants = cva("flex items-center justify-center rounded-full bg-primary-foreground shadow-sm transition-transform duration-150 ease-out", {
  variants: {
    size: {
      sm: "h-3 w-5 data-[state=checked]:translate-x-2",
      default: "h-4 w-6 data-[state=checked]:translate-x-3",
      lg: "h-5 w-7.5 data-[state=checked]:translate-x-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const switchLabelVariants = cva("font-medium text-foreground select-none leading-5", {
  variants: {
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type SwitchVariants = VariantProps<typeof switchControlVariants>;
