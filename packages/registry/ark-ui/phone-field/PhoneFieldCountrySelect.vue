<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon } from "@lucide/vue";
import { Menu, useMenuFilterCollection } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { type CountryCode, getCountries, getCountryCallingCode } from "libphonenumber-js";
import { computed, watch } from "vue";
import { Button } from "../button";
import PhoneFieldCountryFlag from "./PhoneFieldCountryFlag.vue";
import { injectPhoneFieldContext } from "./PhoneFieldRoot.vue";

type CountryItem = {
  value: CountryCode;
  label: string;
  callingCode: string;
};

const props = withDefaults(
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

const { collection, set, searchTerm } = useMenuFilterCollection<CountryItem>({
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

const selectedCountry = computed(() => countryItems.value.find((item) => item.value === countryCode.value));

function selectCountry(value: CountryCode) {
  countryCode.value = value;
}
</script>

<template>
  <Menu.Root :typeahead="false">
    <Menu.Trigger as-child>
      <Button :size="size" variant="outline" :class="cn('[&_svg]:size-3 px-3')" :disabled="disabled">
        <template v-if="countryCode">
          <PhoneFieldCountryFlag
            :country-code="countryCode"
            :type="flagType"
            :alt="selectedCountry?.label ?? ''"
          />
        </template>
        <template v-else>
          <div class="bg-muted-foreground rounded-xs h-3.5 w-5"></div>
        </template>
        <ChevronsUpDownIcon class="text-muted-foreground" />
      </Button>
    </Menu.Trigger>

    <Menu.Content class="w-auto min-w-64 p-0">
      <Menu.Filter v-model:search-term="searchTerm">
        <Menu.FilterInput
          :placeholder="props.searchPlaceholder"
          class="dark:bg-transparent border-0 shadow-none focus:border-0 focus:shadow-none"
        />
      </Menu.Filter>

      <Menu.Empty v-if="collection.items.length === 0" class="py-6 justify-center text-center text-sm">
        No country found.
      </Menu.Empty>

      <div class="max-h-[min(var(--available-height,300px),300px)] overflow-y-auto p-1">
        <Menu.Item
          v-for="item in collection.items"
          :key="item.value"
          :value="item.value"
          @click="selectCountry(item.value)"
        >
          <PhoneFieldCountryFlag
            :country-code="item.value"
            :type="flagType"
            :alt="item.label"
          />

          <Menu.ItemText class="flex items-center gap-2">
            <span class="font-medium">{{ item.label }}</span>
            <span class="text-muted-foreground text-xs tabular-nums">(+{{ item.callingCode }})</span>
          </Menu.ItemText>

          <CheckIcon
            class="ml-auto size-4 text-primary"
            :class="{ 'opacity-0': countryCode !== item.value }"
          />
        </Menu.Item>
      </div>
    </Menu.Content>
  </Menu.Root>
</template>
