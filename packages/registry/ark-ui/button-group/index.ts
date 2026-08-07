import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as ButtonGroup } from "./ButtonGroup.vue";
export { default as ButtonGroupSeparator } from "./ButtonGroupSeparator.vue";
export { default as ButtonGroupText } from "./ButtonGroupText.vue";

export const buttonGroupVariants = cva(
  [
    "flex items-stretch",
    "has-[>[data-slot=button-group]]:gap-2",
    "[&>[data-slot=select]:not(:first-child)_[data-slot=select-trigger]]:rounded-s-none",
    "[&>[data-slot=select]:not(:first-child)_[data-slot=select-trigger]]:border-s-0",
    "[&>[data-slot=select]:not(:last-child)_[data-slot=select-trigger]]:rounded-e-none",
  ],
  {
    variants: {
      orientation: {
        horizontal: ["flex-row items-center", "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none"],
        vertical: ["flex-col items-center", "[&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"],
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
export type ButtonGroupVariantsProps = {
  orientation?: ButtonGroupVariants["orientation"];
};
