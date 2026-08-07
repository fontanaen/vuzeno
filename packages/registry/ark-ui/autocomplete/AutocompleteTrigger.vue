<script setup lang="ts">
import { Combobox, type ComboboxTriggerProps } from "@ark-ui/vue/combobox";
import type { HTMLAttributes } from "vue";

interface AutocompleteTriggerProps extends ComboboxTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<AutocompleteTriggerProps>();
</script>

<template>
  <Combobox.Trigger
    :as-child="asChild"
    :class="props.class"
    data-slot="autocomplete-trigger"
  >
    <slot />
  </Combobox.Trigger>
</template>
