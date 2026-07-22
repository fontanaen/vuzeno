<script setup lang="ts">
import { Clipboard } from "@ark-ui/vue/clipboard";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Clipboard.ValueText
    :class="cn('text-sm leading-5 text-foreground', props.class)"
    data-slot="clipboard-value-text"
  >
    <slot />
  </Clipboard.ValueText>
</template>
