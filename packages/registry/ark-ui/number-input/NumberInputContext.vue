<script setup lang="ts">
import { NumberInput } from "@ark-ui/vue/number-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <NumberInput.Context
    
    :class="cn(props.class)"
    data-slot="number-input-context"
  >
    <slot />
  </NumberInput.Context>
</template>
