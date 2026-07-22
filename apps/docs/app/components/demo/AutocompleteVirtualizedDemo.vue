<script setup lang="ts">
import { useVirtualizer } from "@tanstack/vue-virtual";
import type { AutocompleteInputValueChangeDetails, UseAutocompleteProps } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { computed, ref } from "vue";

type Country = {
  value: string;
  label: string;
  emoji: string;
};

const countries: Country[] = [
  { value: "AD", label: "Andorra", emoji: "🇦🇩" },
  { value: "AE", label: "United Arab Emirates", emoji: "🇦🇪" },
  { value: "AF", label: "Afghanistan", emoji: "🇦🇫" },
  { value: "AG", label: "Antigua and Barbuda", emoji: "🇦🇬" },
  { value: "AI", label: "Anguilla", emoji: "🇦🇮" },
  { value: "AL", label: "Albania", emoji: "🇦🇱" },
  { value: "AM", label: "Armenia", emoji: "🇦🇲" },
  { value: "AO", label: "Angola", emoji: "🇦🇴" },
  { value: "AQ", label: "Antarctica", emoji: "🇦🇶" },
  { value: "AR", label: "Argentina", emoji: "🇦🇷" },
  { value: "AT", label: "Austria", emoji: "🇦🇹" },
  { value: "AU", label: "Australia", emoji: "🇦🇺" },
  { value: "AZ", label: "Azerbaijan", emoji: "🇦🇿" },
  { value: "BA", label: "Bosnia and Herzegovina", emoji: "🇧🇦" },
  { value: "BB", label: "Barbados", emoji: "🇧🇧" },
  { value: "BD", label: "Bangladesh", emoji: "🇧🇩" },
  { value: "BE", label: "Belgium", emoji: "🇧🇪" },
  { value: "BG", label: "Bulgaria", emoji: "🇧🇬" },
  { value: "BR", label: "Brazil", emoji: "🇧🇷" },
  { value: "CA", label: "Canada", emoji: "🇨🇦" },
  { value: "CH", label: "Switzerland", emoji: "🇨🇭" },
  { value: "CL", label: "Chile", emoji: "🇨🇱" },
  { value: "CN", label: "China", emoji: "🇨🇳" },
  { value: "CO", label: "Colombia", emoji: "🇨🇴" },
  { value: "CZ", label: "Czech Republic", emoji: "🇨🇿" },
  { value: "DE", label: "Germany", emoji: "🇩🇪" },
  { value: "DK", label: "Denmark", emoji: "🇩🇰" },
  { value: "EE", label: "Estonia", emoji: "🇪🇪" },
  { value: "EG", label: "Egypt", emoji: "🇪🇬" },
  { value: "ES", label: "Spain", emoji: "🇪🇸" },
  { value: "FI", label: "Finland", emoji: "🇫🇮" },
  { value: "FR", label: "France", emoji: "🇫🇷" },
  { value: "GB", label: "United Kingdom", emoji: "🇬🇧" },
  { value: "GR", label: "Greece", emoji: "🇬🇷" },
  { value: "HK", label: "Hong Kong", emoji: "🇭🇰" },
  { value: "HR", label: "Croatia", emoji: "🇭🇷" },
  { value: "HU", label: "Hungary", emoji: "🇭🇺" },
  { value: "ID", label: "Indonesia", emoji: "🇮🇩" },
  { value: "IE", label: "Ireland", emoji: "🇮🇪" },
  { value: "IL", label: "Israel", emoji: "🇮🇱" },
  { value: "IN", label: "India", emoji: "🇮🇳" },
  { value: "IT", label: "Italy", emoji: "🇮🇹" },
  { value: "JP", label: "Japan", emoji: "🇯🇵" },
  { value: "KR", label: "South Korea", emoji: "🇰🇷" },
  { value: "MX", label: "Mexico", emoji: "🇲🇽" },
  { value: "MY", label: "Malaysia", emoji: "🇲🇾" },
  { value: "NL", label: "Netherlands", emoji: "🇳🇱" },
  { value: "NO", label: "Norway", emoji: "🇳🇴" },
  { value: "NZ", label: "New Zealand", emoji: "🇳🇿" },
  { value: "PH", label: "Philippines", emoji: "🇵🇭" },
  { value: "PK", label: "Pakistan", emoji: "🇵🇰" },
  { value: "PL", label: "Poland", emoji: "🇵🇱" },
  { value: "PT", label: "Portugal", emoji: "🇵🇹" },
  { value: "RO", label: "Romania", emoji: "🇷🇴" },
  { value: "RU", label: "Russia", emoji: "🇷🇺" },
  { value: "SA", label: "Saudi Arabia", emoji: "🇸🇦" },
  { value: "SE", label: "Sweden", emoji: "🇸🇪" },
  { value: "SG", label: "Singapore", emoji: "🇸🇬" },
  { value: "TH", label: "Thailand", emoji: "🇹🇭" },
  { value: "TR", label: "Türkiye", emoji: "🇹🇷" },
  { value: "TW", label: "Taiwan", emoji: "🇹🇼" },
  { value: "UA", label: "Ukraine", emoji: "🇺🇦" },
  { value: "US", label: "United States", emoji: "🇺🇸" },
  { value: "VN", label: "Vietnam", emoji: "🇻🇳" },
  { value: "ZA", label: "South Africa", emoji: "🇿🇦" },
];

function startsWithFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().startsWith(filterText.toLowerCase());
}

const scrollerRef = ref<{ rootRef: HTMLDivElement | null } | null>(null);

const { collection, filter, reset } = useListCollection({
  get initialItems() {
    return countries;
  },
  filter: startsWithFilter,
});

const virtualizer = useVirtualizer(
  computed(() => ({
    count: collection.value.size,
    getScrollElement: () => scrollerRef.value?.rootRef ?? null,
    estimateSize: () => 32,
    overscan: 10,
  })),
);

const handleScrollToIndex: NonNullable<UseAutocompleteProps<Country>["scrollToIndexFn"]> = (details) => {
  virtualizer.value.scrollToIndex(details.index, {
    align: "center",
    behavior: "auto",
  });
};

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}
</script>

<template>
  <Autocomplete.Root
    :collection="collection"
    :scroll-to-index-fn="handleScrollToIndex"
    @input-value-change="handleInputChange"
  >
    <Autocomplete.Label>Country</Autocomplete.Label>
    <Autocomplete.Control>
      <Autocomplete.Input placeholder="e.g. Germany" />
      <Autocomplete.Indicators>
        <Autocomplete.Trigger @click="reset">
          <ChevronsUpDownIcon />
        </Autocomplete.Trigger>
      </Autocomplete.Indicators>
    </Autocomplete.Control>
    <Autocomplete.Content>
      <Autocomplete.Scroller ref="scrollerRef">
        <div
          :style="{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }"
        >
          <Autocomplete.Item
            v-for="virtualItem in virtualizer.getVirtualItems()"
            :key="(virtualItem.key as PropertyKey)"
            :item="collection.items[virtualItem.index]"
            :aria-setsize="collection.size"
            :aria-posinset="virtualItem.index + 1"
            :style="{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }"
          >
            <Autocomplete.ItemText>
              <span aria-hidden="true" class="mr-2">
                {{ collection.items[virtualItem.index]?.emoji }}
              </span>
              {{ collection.items[virtualItem.index]?.label }}
            </Autocomplete.ItemText>
            <Autocomplete.ItemIndicator>
              <CheckIcon />
            </Autocomplete.ItemIndicator>
          </Autocomplete.Item>
        </div>
      </Autocomplete.Scroller>
    </Autocomplete.Content>
  </Autocomplete.Root>
</template>
