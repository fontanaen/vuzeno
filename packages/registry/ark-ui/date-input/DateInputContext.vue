<script setup lang="ts">
import { DateInput } from "@ark-ui/vue/date-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DateInput.Context
    :class="cn(props.class)"
    data-slot="date-input-context"
  >
    <slot />
  </DateInput.Context>
</template>
