<script setup lang="ts">
import { Steps, type StepsCompletedContentProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsCompletedContentProps & { class?: HTMLAttributes["class"] }>();

const completedContentProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.CompletedContent
    v-bind="completedContentProps"
    :class="cn(
      'flex min-h-40 items-center justify-center rounded-lg bg-[var(--demo-neutral-subtle)] p-4 text-center text-sm font-medium text-[var(--demo-coral-fg)]',
      'data-[orientation=vertical]:flex-1',
      props.class,
    )"
    data-slot="steps-completed-content"
  >
    <slot />
  </Steps.CompletedContent>
</template>
