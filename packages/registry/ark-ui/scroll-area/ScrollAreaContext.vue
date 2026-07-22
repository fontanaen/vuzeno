<script setup lang="ts">
import { ScrollArea } from "@ark-ui/vue/scroll-area";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ScrollArea.Context
    
    :class="cn(props.class)"
    data-slot="scroll-area-context"
  >
    <slot />
  </ScrollArea.Context>
</template>
