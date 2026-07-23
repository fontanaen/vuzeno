<script setup lang="ts">
import { Format } from "@ark-ui/vue/format";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Format.Number
    
    :class="cn(props.class)"
    data-slot="format-number"
  >
    <slot />
  </Format.Number>
</template>
