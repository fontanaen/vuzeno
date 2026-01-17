<script setup lang="ts">
const props = defineProps<{
  type: "cdn" | "unicode";
  countryCode: string;
  alt: string;
}>();
</script>

<template>
    <div class="rounded-xs w-5 h-3.5 overflow-hidden">
        <img
            :src="`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`"
            :srcset="`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png 2x`"
            class="h-full w-full"
            :alt="alt"
        />
    </div>
</template>