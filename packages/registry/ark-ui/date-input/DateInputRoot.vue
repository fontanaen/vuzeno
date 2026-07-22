<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { DateInput, type DateInputRootEmits, type DateInputRootProps } from "@ark-ui/vue/date-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DateInputRootProps & { class?: HTMLAttributes["class"] }>();
const emit = defineEmits<DateInputRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emit);
</script>

<template>
  <DateInput.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-sm flex-col gap-1.5',
      props.class,
    )"
    data-slot="date-input"
  >
    <slot />

    <DateInput.HiddenInput />
  </DateInput.Root>
</template>
