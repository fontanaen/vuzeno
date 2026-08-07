import TimelineContent from "./TimelineContent.vue";
import TimelineDescription from "./TimelineDescription.vue";
import TimelineHeader from "./TimelineHeader.vue";
import TimelineItem from "./TimelineItem.vue";
import TimelineMedia from "./TimelineMedia.vue";
import TimelineRoot from "./TimelineRoot.vue";
import TimelineTitle from "./TimelineTitle.vue";

export const Timeline = {
  Root: TimelineRoot,
  Item: TimelineItem,
  Media: TimelineMedia,
  Content: TimelineContent,
  Header: TimelineHeader,
  Title: TimelineTitle,
  Description: TimelineDescription,
} as const;
