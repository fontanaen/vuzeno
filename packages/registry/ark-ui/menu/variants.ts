import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const menuItemVariants = cva(["flex min-h-8 items-center gap-2 rounded-sm px-2 text-sm leading-5 no-underline outline-none select-none", "data-highlighted:bg-muted", "[&_svg]:size-3.5 [&_svg]:shrink-0"], {
  variants: {
    variant: {
      default: ["text-foreground", "[&_svg]:text-muted-foreground"],
      destructive: ["text-destructive", "data-highlighted:text-destructive", "[&_svg]:text-destructive"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type MenuItemVariants = VariantProps<typeof menuItemVariants>;
export type MenuItemVariantsProps = {
  variant?: MenuItemVariants["variant"];
};
