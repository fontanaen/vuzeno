import { createContext } from "reka-ui";
import type { Ref } from "vue";
import type { BaseField, FilterFieldItem } from "./field";
import type { Filter } from "./filter";

export type FiltersVariant = "outline" | "secondary";
export type FiltersSize = "sm" | "md" | "lg";
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

export const [injectFiltersContext, provideFiltersContext] = createContext<FiltersContext>("FiltersContext");

export type FiltersStyleContextValue = {
  style: Ref<FiltersStyle>;
};

export const [injectFiltersStyleContext, provideFiltersStyleContext] = createContext<FiltersStyleContextValue>("FiltersStyleContext");
