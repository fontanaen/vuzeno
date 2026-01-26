<script setup lang="ts">
import { ComboboxTrigger } from "@vuetella/ui/components/combobox";
import type { ComboboxTriggerProps } from "reka-ui";
import { useForwardProps } from "reka-ui";

const props = defineProps<ComboboxTriggerProps>();

const forwarded = useForwardProps(props);
</script>

<template>
  <ComboboxTrigger v-bind="forwarded">
    <slot />
  </ComboboxTrigger>
</template>