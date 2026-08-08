// Current version of Nuxt Content has limitation to render grouped content, thus required manual mapping
// https://github.com/nuxt/content/issues/3119

import type { ContentNavigationItem } from "@nuxt/content";

export type NavigationItemType = "page" | "component" | "block" | "group" | "asset";

// @see ContentNavigationItem
export interface NavigationItem {
  title: string;
  path: string;
  stem?: string;
  children?: NavigationItem[];
  page?: false;
  type?: NavigationItemType;
  [key: string]: unknown;
}

function navigationItemType(item: ContentNavigationItem, parent: ContentNavigationItem | null): "component" | "block" | "group" | "page" {
  if (parent) {
    if (parent.title === "Components") {
      return "component";
    }
    if (parent.title === "Blocks") {
      return "block";
    }
  }
  if (item.children && item.children.length > 0) {
    return "group";
  }
  return "page";
}

function mapWithType(item: ContentNavigationItem, parent: ContentNavigationItem | null): NavigationItem {
  return {
    ...item,
    type: navigationItemType(item, parent),
    children: item.children?.map((child) => mapWithType(child, item)),
  };
}

export async function useNavigation() {
  const { data } = await useAsyncData(
    "navigation",
    () => {
      // tag is from our content schema; types may not include custom fields
      return queryCollectionNavigation("content", ["tag"] as unknown as (keyof import("@nuxt/content").ContentCollectionItem)[]);
    },
    {
      default: () => [],
      transform: (data) => {
        const doc = data.find((i) => i.stem === "docs")!;
        // Leaf pages belong in Overview; titled groups (e.g. Components folder) stay as top-level sections.
        const rootDocs = doc.children?.filter((item) => !item.children).map((item) => mapWithType(item, doc)) ?? [];
        const nonRootDocs = doc.children?.filter((item) => item.children).map((item) => mapWithType(item, doc)) ?? [];
        // `4.components.md` merges with the components/ folder as its index — surface that page in Overview too.
        const componentsGroup = nonRootDocs.find((item) => item.title === "Components");
        const componentsOverviewPage = componentsGroup
          ? {
              path: componentsGroup.path,
              stem: componentsGroup.stem,
              title: "Components",
              type: "page" as const,
            }
          : null;

        return [
          {
            ...doc,
            children: [
              {
                path: "/docs",
                stem: "docs",
                title: "Overview",
                type: navigationItemType(doc, null),
                children: [
                  ...rootDocs,
                  ...(componentsOverviewPage ? [componentsOverviewPage] : []),
                  {
                    path: "/llms.txt",
                    stem: "llms.txt",
                    title: "Llms.txt",
                    type: "asset",
                  },
                  {
                    path: "/llms-full.txt",
                    stem: "llms-full.txt",
                    title: "Llms-full.txt",
                    type: "asset",
                  },
                ],
              },
              ...nonRootDocs,
            ],
          },
        ];
      },
    },
  );

  return {
    data,
  };
}
