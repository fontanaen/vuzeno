import { cva } from "class-variance-authority";

export const toastVariants = cva("border", {
  variants: {
    type: {
      info: "**:data-[slot=toast-indicator]:text-blue-500 border-blue-500/10",
      loading: "**:data-[slot=toast-indicator]:text-muted-foreground border-muted-foreground/10",
      success: "**:data-[slot=toast-indicator]:text-green-400 border-green-500/10",
      error: "**:data-[slot=toast-indicator]:text-destructive border-destructive/10",
      warning: "**:data-[slot=toast-indicator]:text-orange-400 border-orange-500/10",
    },
  },
  defaultVariants: {
    type: "info",
  },
});
