import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  "relative bg-no-repeat bg-origin-border inline-flex gap-1 items-center rounded-md border px-2.5 py-0.5 [&>svg]:mr-0.5 [&>svg]:size-3.5 has-[svg]:pl-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground bg-linear-to-b from-background/20 to-transparent shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--background)_20%,transparent)]",
        secondary: "border-transparent bg-secondary text-secondary-foreground bg-linear-to-b from-foreground/20 to-transparent shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--background)_20%,transparent)]",
        success: "border-transparent bg-green-500 text-green-50 [&>svg]:text-green-50 bg-linear-to-b from-foreground/20 to-transparent shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--background)_20%,transparent)]",
        warning: "border-transparent bg-amber-500 text-amber-50 [&>svg]:text-amber-50 bg-linear-to-b from-foreground/20 to-transparent shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--background)_20%,transparent)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground [&>svg]:text-destructive-foreground bg-linear-to-b from-foreground/20 to-transparent shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--background)_20%,transparent)]",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
export type BadgeVariantsProps = {
  variant?: BadgeVariants["variant"];
};
