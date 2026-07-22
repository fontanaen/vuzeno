<script setup lang="ts">
import { PinInput } from "@ark-ui/vue/pin-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <PinInput.Context    
    :class="cn(props.class)"
    data-slot="pin-input-context"
  >
    <slot />
  </PinInput.Context>
</template>
