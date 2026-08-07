import { type CollectionItem, type UseListCollectionProps, useListCollection } from "@ark-ui/vue";
import { ref, watch } from "vue";

export function useMenuFilterCollection<T extends CollectionItem>(options: UseListCollectionProps<T>) {
  const list = useListCollection<T>(options);
  const searchTerm = ref("");

  watch(
    searchTerm,
    (value) => {
      list.filter(value);
    },
    { flush: "sync" },
  );

  return {
    ...list,
    searchTerm,
  };
}

export type { MenuFilterContext } from "./menu-filter-context";
export { useMenuFilterContext } from "./menu-filter-context";
