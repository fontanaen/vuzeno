import { createContext } from "@ark-ui/vue";
import type { Ref } from "vue";
import type { BaseField, FilterFieldItem } from "./field";
import type { Filter } from "./filter";
import type { FiltersSize, FiltersVariant } from "./variants";

export type FiltersStyle = "short" | "long";

export type FiltersContext = {
  fields: Ref<FilterFieldItem[]>;
  filters: Ref<Filter[]>;
  variant: Ref<FiltersVariant>;
  size: Ref<FiltersSize>;
  addFilter: (filter: Filter) => void;
  updateFilter: (filter: Filter, patch: Partial<Filter>) => void;
  removeFilter: (filter: Filter) => void;
  clearFilters: () => void;
  findField: (key: string) => BaseField | undefined;
};

export const [provideFiltersContext, injectFiltersContext] = createContext<FiltersContext>("FiltersContext");

export type FiltersStyleContextValue = {
  style: Ref<FiltersStyle>;
};

export const [provideFiltersStyleContext, injectFiltersStyleContext] = createContext<FiltersStyleContextValue>("FiltersStyleContext");
