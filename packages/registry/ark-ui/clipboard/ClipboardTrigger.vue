<script setup lang="ts">
import { Clipboard, type ClipboardTriggerProps } from "@ark-ui/vue/clipboard";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends ClipboardTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Clipboard.Trigger
    v-bind="triggerProps"
    :class="cn(props.class)"
  >
    <slot />
  </Clipboard.Trigger>
</template>
