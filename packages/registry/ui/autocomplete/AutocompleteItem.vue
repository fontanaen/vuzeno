<script setup lang="ts">
import { ComboboxItem } from "@vuetella/ui/components/combobox";
import { reactiveOmit } from "@vueuse/core";
import { CheckIcon } from "lucide-vue-next";
import { type ComboboxItemEmits, ComboboxItemIndicator, type ComboboxItemProps, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ComboboxItemEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ComboboxItem v-bind="forwarded">
    <slot />
    
    <ComboboxItemIndicator class="ml-auto">
      <CheckIcon class="size-4" />
    </ComboboxItemIndicator>
  </ComboboxItem>
</template>