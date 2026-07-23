<script setup lang="ts">
import { Clipboard } from "@ark-ui/vue/clipboard";
import { CheckIcon, ClipboardCopyIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Clipboard.Indicator
    :class="cn('inline-flex items-center justify-center', props.class)"
    data-slot="clipboard-indicator"
  >
    <slot>
      <ClipboardCopyIcon />
    </slot>
    <template #copied>
      <slot name="copied">
        <CheckIcon />
      </slot>
    </template>
  </Clipboard.Indicator>
</template>
