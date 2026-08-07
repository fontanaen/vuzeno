import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-md font-[inherit] font-medium select-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&:hover:not(:disabled):not([data-disabled]):not([data-state=on])]:bg-accent",
    "data-[state=on]:shadow-xs",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:opacity-50 disabled:grayscale data-disabled:opacity-50 data-disabled:grayscale",
  ],
  {
    variants: {
      variant: {
        default: ["bg-transparent text-muted-foreground", "data-[state=on]:bg-muted data-[state=on]:text-foreground"],
        outline: [
          "border border-input bg-transparent text-muted-foreground",
          "dark:bg-input/30 dark:hover:bg-input/50",
          "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
          "dark:data-[state=on]:bg-input/70 dark:data-[state=on]:text-accent-foreground",
        ],
      },
      size: {
        sm: "size-8 text-xs leading-4 [&_svg]:size-3.5",
        md: "size-9 text-sm leading-5 [&_svg]:size-4",
        lg: "size-10 text-base leading-6 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;
export type ToggleVariantsProps = {
  variant?: ToggleVariants["variant"];
  size?: ToggleVariants["size"];
};
