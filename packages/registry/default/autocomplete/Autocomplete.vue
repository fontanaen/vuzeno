<script lang="ts">
export type AutocompleteProps = ComboboxRootProps & {
  searchTerm?: string;
};

export type AutocompleteContext<P extends AutocompleteProps> = {
  searchTerm: Ref<NonNullable<P["searchTerm"]>>;
};

export type AutocompleteEmits = (e: "update:searchTerm", searchTerm: string) => void;

const [injectAutocompleteContext, provideAutocompleteContext] = createContext<AutocompleteContext<AutocompleteProps>>("AutocompleteContext");

function useAutocompleteContext() {
  const ctx = injectAutocompleteContext();

  if (!ctx) {
    throw new Error("useAutocompleteContext must be used within a <Autocomplete />");
  }

  return ctx;
}

export { useAutocompleteContext, provideAutocompleteContext };
</script>

<script setup lang="ts">
import { Combobox } from "@/components/ui/combobox";
import { createContext, type ComboboxRootProps, type AcceptableValue, type ComboboxRootEmits, useForwardPropsEmits } from "reka-ui";
import type { Ref } from "vue";

const props = withDefaults(
  defineProps<AutocompleteProps>(),
  {
    highlightOnHover: true,
  },
);

const emits = defineEmits<ComboboxRootEmits>();

const searchTerm = defineModel<string>("searchTerm", { default: "" });

const forwarded = useForwardPropsEmits(props, emits);

provideAutocompleteContext({
  searchTerm,
});
</script>

<template>
  <Combobox
    v-bind="forwarded"
    class="relative"
  >
    <slot />
  </Combobox>
</template>