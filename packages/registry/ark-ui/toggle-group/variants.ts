import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const toggleGroupRootVariants = cva("inline-flex data-[orientation=vertical]:flex-col", {
  variants: {
    variant: {
      default: "rounded-lg border border-border bg-muted",
      outline: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { variant: "default", size: "sm", class: "gap-0.5 p-0.5" },
    { variant: "default", size: "md", class: "gap-0.5 p-0.5" },
    { variant: "default", size: "lg", class: "gap-1 p-1" },
    { variant: "outline", size: "sm", class: "gap-0.5" },
    { variant: "outline", size: "md", class: "gap-0.5" },
    { variant: "outline", size: "lg", class: "gap-1" },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export const toggleGroupItemVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-md border-0 font-[inherit] font-medium select-none whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&:hover:not(:disabled):not([data-disabled]):not([data-state=on])]:bg-accent",
    "data-[state=on]:shadow-xs",
    "focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring",
    "disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: ["bg-transparent text-muted-foreground", "data-[state=on]:bg-primary/30 data-[state=on]:text-foreground"],
        outline: ["border border-input bg-transparent text-muted-foreground", "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"],
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

export type ToggleGroupVariants = VariantProps<typeof toggleGroupItemVariants>;
export type ToggleGroupVariantsProps = {
  variant?: ToggleGroupVariants["variant"];
  size?: ToggleGroupVariants["size"];
};
