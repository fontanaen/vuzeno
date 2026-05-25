import { cva, type VariantProps } from "class-variance-authority";

export type {
  ListContext,
  ListReorderEvent,
  ListTransitionProps,
} from "./List.vue";
export { default as List } from "./List.vue";
export type { ListItemContext } from "./ListItem.vue";
export { default as ListItem } from "./ListItem.vue";
export { default as ListItemActions } from "./ListItemActions.vue";
export { default as ListItemContent } from "./ListItemContent.vue";
export { default as ListItemDescription } from "./ListItemDescription.vue";
export { default as ListItemDragHandle } from "./ListItemDragHandle.vue";
export { default as ListItemFooter } from "./ListItemFooter.vue";
export { default as ListItemHeader } from "./ListItemHeader.vue";
export { default as ListItemMedia } from "./ListItemMedia.vue";
export { default as ListItemTitle } from "./ListItemTitle.vue";
export { default as ListSeparator } from "./ListSeparator.vue";

export type ListItemVariant = VariantProps<typeof listItemVariants>["variant"];
export type ListItemSize = VariantProps<typeof listItemVariants>["size"];

export const listItemVariants = cva("group/list-item rounded-md", {
  variants: {
    variant: {
      default: "bg-background",
      outline: "border border-border",
      muted: "bg-muted/50",
    },
    size: {
      default: "p-3",
      sm: "py-2 px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
