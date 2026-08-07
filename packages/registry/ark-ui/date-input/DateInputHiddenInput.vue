<script setup lang="ts">
import { DateInput } from "@ark-ui/vue/date-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DateInput.HiddenInput
    :class="cn(props.class)"
    data-slot="date-input-hidden-input"
  >
    <slot />
  </DateInput.HiddenInput>
</template>
