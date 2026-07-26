import { createContext } from "@ark-ui/vue";
import type { Ref } from "vue";

export type MenuFilterContext = {
  searchTerm: Ref<string>;
  setSearchTerm: (value: string) => void;
};

export const [provideMenuFilterContext, useMenuFilterContext] = createContext<MenuFilterContext>("MenuFilterContext");
