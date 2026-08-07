<script setup lang="ts">
import { DatePicker, type DatePickerViewProps } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DatePickerViewProps & { class?: HTMLAttributes["class"] }>();

const viewProps = reactiveOmit(props, "class");
</script>

<template>
  <DatePicker.View
    v-bind="viewProps"
    :class="cn('flex flex-col gap-3 [[hidden]]:hidden', props.class)"
    data-slot="date-picker-view"
  >
    <slot />
  </DatePicker.View>
</template>
