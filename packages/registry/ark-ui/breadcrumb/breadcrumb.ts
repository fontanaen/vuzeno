import BreadcrumbRoot from "./Breadcrumb.vue";
import BreadcrumbEllipsis from "./BreadcrumbEllipsis.vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";
import BreadcrumbLink from "./BreadcrumbLink.vue";
import BreadcrumbList from "./BreadcrumbList.vue";
import BreadcrumbPage from "./BreadcrumbPage.vue";
import BreadcrumbSeparator from "./BreadcrumbSeparator.vue";

export const Breadcrumb = {
  Root: BreadcrumbRoot,
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
} as const;
