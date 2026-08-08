<script setup lang="ts">
import { DatePicker, type DatePickerTriggerProps } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DatePickerTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <DatePicker.Control as-child>
    <DatePicker.Trigger
      v-bind="triggerProps"
      :class="cn('shrink-0', props.class)"
      data-slot="date-picker-trigger"
    >
      <slot />
    </DatePicker.Trigger>
  </DatePicker.Control>
</template>
