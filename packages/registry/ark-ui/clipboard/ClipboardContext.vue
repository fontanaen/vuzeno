<script setup lang="ts">
import { Clipboard } from "@ark-ui/vue/clipboard";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Clipboard.Context
    v-slot="clipboard"
    :class="cn(props.class)"
    data-slot="clipboard-context"
  >
    <slot v-bind="clipboard" />
  </Clipboard.Context>
</template>
