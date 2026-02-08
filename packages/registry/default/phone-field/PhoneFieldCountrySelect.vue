<script setup lang="ts">
import { cn } from "@vuetella/ui/lib/utils";
import { type CountryCode, getCountries, getCountryCallingCode } from "libphonenumber-js";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { computed } from "vue";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { injectPhoneFieldContext } from "./PhoneField.vue";
import PhoneFieldCountryFlag from "./PhoneFieldCountryFlag.vue";

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

const countries = computed(() => {
  return Array.from(new Set([...(preferredCountries.value ?? []), ...(availableCountries.value ?? getCountries())]))
    .filter((country) => !ignoredCountries.value?.includes(country))
    .map((country) => {
      return {
        code: country as CountryCode,
        callingCode: getCountryCallingCode(country as CountryCode),
      };
    });
});

const countryNameFormatter = computed(() => {
  return new Intl.DisplayNames([locale.value], { type: "region" });
});
</script>
    
<template>
  <Popover>
    <PopoverTrigger as-child :disabled="disabled">
      <Button variant="outline" :size="size" class="dark:bg-muted">
        <template v-if="countryCode">
          <PhoneFieldCountryFlag :country-code="countryCode" :type="flagType" :alt="countryNameFormatter.of(countryCode) ?? ''" />
        </template>
        <template v-else>
          <div class="bg-muted-foreground rounded-xs w-5 h-3.5"></div>
        </template>
        <ChevronsUpDownIcon class="size-3 text-muted-foreground" />
      </Button>
    </PopoverTrigger>

    <PopoverContent align="start" class="w-auto p-0">
      <Command 
        :model-value="countryCode" 
        highlight-on-hover
        @update:model-value="$event && (countryCode = $event as CountryCode)"
      >
        <CommandInput class="h-9" :placeholder="searchPlaceholder" />
        <CommandList>
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="country in countries"
              :key="country.code"
              :value="country.code"
            >
              <PhoneFieldCountryFlag :country-code="country.code" :type="flagType" :alt="countryNameFormatter.of(country.code)!" />

              <span class="font-medium">{{ countryNameFormatter.of(country.code) }}</span> 
              <span class="text-muted-foreground text-xs tabular-nums">(+{{ country.callingCode }})</span>
              <CheckIcon
                :class="cn(
                  'ml-auto',
                  countryCode === country.code ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>