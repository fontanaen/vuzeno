<script setup lang="ts">
import { type CountryCode } from "libphonenumber-js";
import { getFlagUnicode } from "./utils";

const props = withDefaults(
  defineProps<{
    type: "cdn" | "unicode";
    countryCode: CountryCode;
    alt: string;
  }>(),
  {
    type: "cdn",
  },
);
</script>

<template>
  <div v-if="type === 'cdn'" class="rounded-xs w-5 h-3.5 overflow-hidden">
    <img
      :src="`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`"
      :srcset="`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png 2x`"
      class="h-full w-full"
      :alt="alt"
    />
  </div>
  <div v-if="type === 'unicode'" class="text-xl">
    {{ getFlagUnicode(countryCode) }}
  </div>
</template>