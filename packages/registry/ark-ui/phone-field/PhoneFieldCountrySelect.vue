<script setup lang="ts">
import type { AutocompleteInputValueChangeDetails, AutocompleteOpenChangeDetails, AutocompleteValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { cn } from "cnfast";
import { type CountryCode, getCountries, getCountryCallingCode } from "libphonenumber-js";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { computed, watch } from "vue";
import PhoneFieldCountryFlag from "./PhoneFieldCountryFlag.vue";
import { injectPhoneFieldContext } from "./PhoneFieldRoot.vue";

type CountryItem = {
  value: CountryCode;
  label: string;
  callingCode: string;
};

withDefaults(
  defineProps<{
    searchPlaceholder?: string;
    flagType?: "cdn" | "unicode";
  }>(),
  {
    flagType: "cdn",
  },
);

const { countryCode, ignoredCountries, preferredCountries, availableCountries, size, locale, disabled } = injectPhoneFieldContext()!;

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const countryItems = computed<CountryItem[]>(() => {
  const formatter = new Intl.DisplayNames([locale.value], { type: "region" });

  return Array.from(new Set([...(preferredCountries.value ?? []), ...(availableCountries.value ?? getCountries())]))
    .filter((country) => !ignoredCountries.value?.includes(country))
    .map((country) => {
      return {
        value: country as CountryCode,
        label: formatter.of(country) ?? country,
        callingCode: getCountryCallingCode(country as CountryCode),
      };
    });
});

const { collection, filter, set } = useListCollection<CountryItem>({
  get initialItems() {
    return countryItems.value;
  },
  itemToString: (item) => `${item.label} +${item.callingCode} ${item.value}`,
  itemToValue: (item) => item.value,
  filter: containsFilter,
});

watch(countryItems, (items) => {
  set(items);
});

const autocompleteValue = computed({
  get() {
    return countryCode.value ? [countryCode.value] : [];
  },
  set(value: string[]) {
    countryCode.value = (value[0] ?? "") as CountryCode;
  },
});

const triggerSizeClass = computed(() => {
  if (size.value === "sm") {
    return "h-9 px-3";
  }

  if (size.value === "lg") {
    return "h-11 px-5";
  }

  return "h-10 px-4";
});

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}

function handleValueChange({ value }: AutocompleteValueChangeDetails) {
  if (value[0]) {
    countryCode.value = value[0] as CountryCode;
  }
}

function handleOpenChange({ open }: AutocompleteOpenChangeDetails) {
  if (open) {
    filter("");
  }
}
</script>

<template>
  <Autocomplete.Root
    v-model="autocompleteValue"
    :collection="collection"
    :disabled="disabled"
    selection-behavior="clear"
    class="w-auto max-w-none"
    @input-value-change="handleInputChange"
    @value-change="handleValueChange"
    @open-change="handleOpenChange"
  >
    <Autocomplete.Control class="relative w-auto">
      <Autocomplete.Trigger
        :disabled="disabled"
        data-slot="phone-field-country-select"
        :class="
          cn(
            'flex items-center gap-2 rounded-s-md border border-input bg-background dark:bg-input/30 shadow-xs',
            'hover:bg-accent hover:text-accent-foreground',
            'disabled:cursor-not-allowed disabled:opacity-50',
            '[&_svg]:size-3',
            triggerSizeClass,
          )
        "
      >
        <template v-if="countryCode">
          <PhoneFieldCountryFlag
            :country-code="countryCode"
            :type="flagType"
            :alt="
              countryItems.find((item) => item.value === countryCode)?.label ??
              ''
            "
          />
        </template>
        <template v-else>
          <div class="bg-muted-foreground rounded-xs h-3.5 w-5"></div>
        </template>
        <ChevronsUpDownIcon class="text-muted-foreground" />
      </Autocomplete.Trigger>
    </Autocomplete.Control>
    <Autocomplete.Content class="w-auto min-w-64 p-0">
      <div class="border-b border-input shrink-0">
        <Autocomplete.Input
          :placeholder="searchPlaceholder"
          class="dark:bg-transparent border-0 shadow-none focus:border-0 focus:shadow-none"
        />
      </div>

      <Autocomplete.Empty class="py-6 justify-center text-sm">
        No country found.
      </Autocomplete.Empty>

      <div
        class="max-h-[min(var(--available-height,300px),300px)] overflow-y-auto p-1"
      >
        <Autocomplete.Item
          v-for="item in collection.items"
          :key="item.value"
          :item="item"
        >
          <PhoneFieldCountryFlag
            :country-code="item.value"
            :type="flagType"
            :alt="item.label"
          />

          <Autocomplete.ItemText class="flex items-center gap-2">
            <span class="font-medium">{{ item.label }}</span>
            <span class="text-muted-foreground text-xs tabular-nums"
              >(+{{ item.callingCode }})</span
            >
          </Autocomplete.ItemText>

          <Autocomplete.ItemIndicator>
            <CheckIcon class="size-4" />
          </Autocomplete.ItemIndicator>
        </Autocomplete.Item>
      </div>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
