<script setup lang="ts">
import { Collapsible, type CollapsibleTriggerProps } from "@ark-ui/vue/collapsible";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

const props = defineProps<CollapsibleTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");

const triggerClass = computed(() => {
  if (props.asChild) {
    return props.class;
  }

  return cn(
    "flex items-center justify-between gap-4 w-full px-3 py-2.5 m-0",
    "bg-transparent text-sm font-medium leading-normal text-start",
    "text-foreground outline-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "data-disabled:opacity-50 data-disabled:grayscale",
    props.class,
  );
});
</script>

<template>
  <Collapsible.Trigger
    v-bind="triggerProps"
    :class="triggerClass"
    data-slot="collapsible-trigger"
  >
    <slot />
  </Collapsible.Trigger>
</template>
