import EmptyContent from "./EmptyContent.vue";
import EmptyDescription from "./EmptyDescription.vue";
import EmptyHeader from "./EmptyHeader.vue";
import EmptyMedia from "./EmptyMedia.vue";
import EmptyRoot from "./EmptyRoot.vue";
import EmptyTitle from "./EmptyTitle.vue";

export const Empty = {
  Root: EmptyRoot,
  Content: EmptyContent,
  Description: EmptyDescription,
  Header: EmptyHeader,
  Media: EmptyMedia,
  Title: EmptyTitle,
} as const;
