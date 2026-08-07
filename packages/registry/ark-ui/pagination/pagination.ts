import PaginationContext from "./PaginationContext.vue";
import PaginationEllipsis from "./PaginationEllipsis.vue";
import PaginationFirstTrigger from "./PaginationFirstTrigger.vue";
import PaginationItem from "./PaginationItem.vue";
import PaginationLastTrigger from "./PaginationLastTrigger.vue";
import PaginationNextTrigger from "./PaginationNextTrigger.vue";
import PaginationPrevTrigger from "./PaginationPrevTrigger.vue";
import PaginationRoot from "./PaginationRoot.vue";
import PaginationRootProvider from "./PaginationRootProvider.vue";

export const Pagination = {
  Context: PaginationContext,
  Ellipsis: PaginationEllipsis,
  FirstTrigger: PaginationFirstTrigger,
  Item: PaginationItem,
  LastTrigger: PaginationLastTrigger,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
  RootProvider: PaginationRootProvider,
  Root: PaginationRoot,
} as const;
