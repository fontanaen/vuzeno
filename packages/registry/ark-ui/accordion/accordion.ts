import AccordionContext from "./AccordionContext.vue";
import AccordionItem from "./AccordionItem.vue";
import AccordionItemContent from "./AccordionItemContent.vue";
import AccordionItemContext from "./AccordionItemContext.vue";
import AccordionItemIndicator from "./AccordionItemIndicator.vue";
import AccordionItemTrigger from "./AccordionItemTrigger.vue";
import AccordionRoot from "./AccordionRoot.vue";
import AccordionRootProvider from "./AccordionRootProvider.vue";

export const Accordion = {
  Context: AccordionContext,
  ItemContent: AccordionItemContent,
  ItemContext: AccordionItemContext,
  ItemIndicator: AccordionItemIndicator,
  ItemTrigger: AccordionItemTrigger,
  Item: AccordionItem,
  RootProvider: AccordionRootProvider,
  Root: AccordionRoot,
} as const;
