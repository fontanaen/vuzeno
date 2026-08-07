import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { Alert } from "./alert";

export const alertVariants = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4", {
  variants: {
    variant: {
      default: "bg-card text-foreground [&>svg]:text-foreground *:data-[slot=alert-description]:text-foreground/80",
      info: "bg-card text-foreground border-blue-500/10 [&>svg]:text-blue-500 *:data-[slot=alert-description]:text-foreground/80",
      success: "bg-card border-green-500/10 text-foreground [&>svg]:text-green-500 *:data-[slot=alert-description]:text-foreground/80",
      warning: "bg-card border-amber-500/10 text-foreground [&>svg]:text-amber-500 *:data-[slot=alert-description]:text-foreground/80",
      destructive: "bg-card border-destructive/10 text-foreground [&>svg]:text-destructive *:data-[slot=alert-description]:text-foreground/80",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type AlertVariants = VariantProps<typeof alertVariants>;
