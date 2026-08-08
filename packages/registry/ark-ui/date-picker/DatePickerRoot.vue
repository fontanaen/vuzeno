<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { DatePicker, type DatePickerRootEmits, type DatePickerRootProps } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends DatePickerRootProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
const emits = defineEmits<DatePickerRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const delegated = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DatePicker.Root
    v-bind="delegated"
    :class="cn(props.class)"
    data-slot="date-picker"
  >
    <slot />
  </DatePicker.Root>
</template>
