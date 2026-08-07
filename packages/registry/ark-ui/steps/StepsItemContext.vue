<script setup lang="ts">
import { Steps } from "@ark-ui/vue/steps";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Steps.ItemContext
    
    :class="cn(props.class)"
    data-slot="steps-item-context"
  >
    <slot />
  </Steps.ItemContext>
</template>
