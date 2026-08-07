<script setup lang="ts">
import { Tabs } from "@ark-ui/vue/tabs";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tabs.Context :class="cn(props.class)" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </Tabs.Context>
</template>
