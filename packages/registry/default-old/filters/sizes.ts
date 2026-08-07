import type { FiltersSize } from "./context";

export const PopoverTriggerSizeVariant: Record<FiltersSize, string> = {
  sm: "text-xs px-2!",
  md: "text-sm",
  lg: "text-sm",
} as const;

export const DropdownItemSizeVariant: Record<FiltersSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm",
} as const;

export const CheckboxSizeVariant: Record<FiltersSize, string> = {
  sm: "size-4 **:[&_svg]:size-3",
  md: "size-4",
  lg: "size-4",
} as const;
