<script setup lang="ts">
import { Tabs, type TabTriggerProps } from "@ark-ui/vue/tabs";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TabTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Tabs.Trigger
    v-bind="triggerProps"
    :class="cn(
      'inline-flex h-8 items-center justify-center gap-2',
      'rounded-md border-none bg-transparent px-3',
      'font-inherit text-sm font-medium whitespace-nowrap select-none',
      '[a]:text-inherit',
      'data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:py-2',
      'data-selected:text-foreground',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
  >
    <slot />
  </Tabs.Trigger>
</template>
