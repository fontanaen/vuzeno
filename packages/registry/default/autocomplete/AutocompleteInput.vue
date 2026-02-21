<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { ComboboxInputEmits, ComboboxInputProps } from "reka-ui";
import { useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { ComboboxInput } from "@/components/ui/combobox";
import { cn } from "@/lib/utils";
import { useAutocompleteContext } from "./Autocomplete.vue";

const props = defineProps<
  {
    class?: HTMLAttributes["class"];
  } & ComboboxInputProps
>();

const emits = defineEmits<ComboboxInputEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);

const { searchTerm } = useAutocompleteContext();
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    v-model="searchTerm"
    data-slot="input-group-control"
    :class="cn(
      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', 
      'flex-1 rounded-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent ring-offset-transparent dark:bg-transparent',
    )"
  />
</template>