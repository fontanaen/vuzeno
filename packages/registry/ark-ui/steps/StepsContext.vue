<script setup lang="ts">
import { Steps } from "@ark-ui/vue/steps";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Steps.Context
    v-slot="slotProps"
    :class="cn(props.class)"
    data-slot="steps-context"
  >
    <slot v-bind="slotProps" />
  </Steps.Context>
</template>
