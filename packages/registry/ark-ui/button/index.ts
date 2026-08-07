import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "relative bg-no-repeat bg-origin-border inline-flex items-center justify-center gap-2 whitespace-nowrap border rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-97 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary bg-linear-to-t from-background/30 dark:from-background/20 to-transparent text-primary-foreground shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--background)_20%,transparent)] hover:from-background/30 hover:bg-primary/90",
        destructive:
          "border-transparent bg-destructive bg-linear-to-b from-background/30 dark:from-foreground/20 to-transparent text-destructive-foreground shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--background)_20%,transparent)] hover:from-background/30 dark:hover:from-foreground/30 hover:bg-destructive/90",
        outline: "border border-input bg-background dark:bg-input/30 dark:hover:bg-input/70 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border-transparent bg-secondary bg-linear-to-b from-foreground/10 dark:from-foreground/20 to-transparent text-secondary-foreground shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] hover:to-background/50 hover:from-foreground/5 dark:hover:to-background/20 hover:bg-secondary/90",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-md px-3",
        md: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
        icon: "size-9",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type ButtonVariantsProps = {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
};
