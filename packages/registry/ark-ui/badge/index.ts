import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  "inline-flex gap-1 items-center rounded-md border px-2.5 py-0.5 [&>svg]:mr-0.5 [&>svg]:size-3.5 has-[svg]:pl-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        success: "border-green-500/5 bg-green-500/10 text-green-500 [&>svg]:text-green-500",
        warning: "border-amber-500/5 bg-amber-500/10 text-amber-500 [&>svg]:text-amber-500",
        destructive: "border-destructive/5 bg-destructive/10 text-destructive [&>svg]:text-destructive",
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
