<script setup lang="ts">
import { Splitter } from "@ark-ui/vue/splitter";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Splitter.Context
    :class="cn(props.class)"
    data-slot="splitter-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </Splitter.Context>
</template>
