import { cva, type VariantProps } from "class-variance-authority";

export const treeViewItemVariants = cva("px-2 ms-[calc((var(--tree-level)-1)*var(--tree-indent,1.25rem))] relative", {
  variants: {
    guideline: {
      none: "",
      straight:
        "data-has-children:before:content-normal data-has-children:before:w-px data-has-children:before:block data-has-children:before:absolute data-has-children:before:left-3.5 data-has-children:before:top-full data-has-children:before:h-[calc(var(--tree-item-children-count-straight)*100%)] data-has-children:before:bg-border",
      rounded: `
        data-has-children:before:content-normal data-has-children:before:w-px data-has-children:before:block data-has-children:before:absolute data-has-children:before:left-3.5 data-has-children:before:top-full data-has-children:before:h-[calc((var(--tree-item-children-count-rounded)-0.75)*100%)] data-has-children:before:bg-border
        data-child:after:content-normal data-child:after:size-2 data-child:after:block data-child:after:absolute data-child:after:-left-1.5 data-child:after:top-1/4 data-child:after:bottom-0 data-child:after:border-l data-child:after:border-b data-child:after:border-border data-child:after:rounded-bl-sm
      `,
    },
  },
  defaultVariants: {
    guideline: "none",
  },
});

export type TreeViewItemVariants = VariantProps<typeof treeViewItemVariants>;
