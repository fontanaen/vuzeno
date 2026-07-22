import { cva, type VariantProps } from "class-variance-authority";

export { default as Input } from "./Input.vue";

export const inputVariants = cva(
  [
    "w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs md:text-sm",
    "dark:bg-input/30 border-input border bg-transparent transition-[color,box-shadow] outline-none",
    "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "placeholder:text-muted-foreground",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "selection:bg-primary selection:text-primary-foreground",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ],
  {
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
  },
);

export type InputVariants = VariantProps<typeof inputVariants>;
export type InputVariantsProps = {
  size?: InputVariants["size"];
};
