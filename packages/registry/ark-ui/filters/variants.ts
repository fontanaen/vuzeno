import { cva } from "class-variance-authority";
import type { ButtonVariants } from "../button";

export type FiltersSize = Extract<NonNullable<ButtonVariants["size"]>, "sm" | "md" | "lg">;
export type FiltersVariant = Extract<NonNullable<ButtonVariants["variant"]>, "outline" | "secondary">;

export const filtersControlVariants = cva("font-normal", {
  variants: {
    size: {
      sm: "text-xs px-2 [&_svg]:size-3.5",
      md: "text-sm px-3",
      lg: "text-sm px-4",
    },
  },
  defaultVariants: { size: "md" },
});

export const filtersMenuItemVariants = cva("", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
  defaultVariants: { size: "md" },
});

export const filtersCheckboxVariants = cva("", {
  variants: {
    size: {
      sm: "size-4 **:[&_svg]:size-3",
      md: "size-4",
      lg: "size-4",
    },
  },
  defaultVariants: { size: "md" },
});

export const filtersChipVariants = cva("w-fit text-nowrap dark:border-input", {
  variants: {
    variant: {
      outline: "bg-input dark:bg-input/30",
      secondary: "bg-secondary border-none",
    },
    size: {
      sm: "h-8 px-2 text-xs [&>svg]:size-3.5",
      md: "h-9 px-3 text-sm [&>svg]:size-4",
      lg: "h-10 px-4 text-sm [&>svg]:size-4",
    },
  },
  defaultVariants: { variant: "outline", size: "md" },
});

export const FiltersIconButtonSize = {
  sm: "icon-sm",
  md: "icon",
  lg: "icon-lg",
} as const satisfies Record<FiltersSize, NonNullable<ButtonVariants["size"]>>;
