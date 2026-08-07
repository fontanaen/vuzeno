<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { DatePicker, type DatePickerRootProviderEmits, type DatePickerRootProviderProps } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DatePickerRootProviderProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<DatePickerRootProviderEmits>();

const rootProviderProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(rootProviderProps, emits);
</script>

<template>
  <DatePicker.RootProvider
    v-bind="forwarded"
    :class="cn(props.class)"
    data-slot="date-picker-root-provider"
  >
    <slot />
  </DatePicker.RootProvider>
</template>
