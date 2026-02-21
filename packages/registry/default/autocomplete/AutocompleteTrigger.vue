<script setup lang="ts">
import type { ComboboxTriggerProps } from "reka-ui";
import { useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { ComboboxTrigger } from "@/components/ui/combobox";
import { cn } from "@/lib/utils";

const props = defineProps<ComboboxTriggerProps & { class?: HTMLAttributes["class"] }>();

const forwarded = useForwardProps(props);
</script>

<template>
  <ComboboxTrigger v-bind="forwarded" :class="cn('outline-none cursor-pointer', props.class)">
    <slot />
  </ComboboxTrigger>
</template>