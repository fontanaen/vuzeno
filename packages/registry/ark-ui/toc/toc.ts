import TocIndicator from "./TocIndicator.vue";
import TocItem from "./TocItem.vue";
import TocLink from "./TocLink.vue";
import TocList from "./TocList.vue";
import TocRoot from "./TocRoot.vue";
import TocTitle from "./TocTitle.vue";

export const Toc = {
  Root: TocRoot,
  Title: TocTitle,
  List: TocList,
  Item: TocItem,
  Link: TocLink,
  Indicator: TocIndicator,
} as const;
