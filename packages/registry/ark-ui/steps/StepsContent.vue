<script setup lang="ts">
import { Steps, type StepsContentProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.Content
    v-bind="contentProps"
    :class="cn(
      'flex min-h-40 items-center justify-center rounded-lg bg-[var(--demo-neutral-subtle)] p-4 text-sm text-muted-foreground',
      'focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-[var(--demo-coral-focus-ring)]',
      'data-[orientation=vertical]:flex-1',
      props.class,
    )"
    data-slot="steps-content"
  >
    <slot />
  </Steps.Content>
</template>
