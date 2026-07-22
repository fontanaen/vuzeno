<script setup lang="ts">
import { Steps, type StepsSeparatorProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsSeparatorProps & { class?: HTMLAttributes["class"] }>();

const separatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.Separator
    v-bind="separatorProps"
    :class="cn(
      'mx-(--steps-gutter) h-(--steps-thickness) flex-1 bg-muted',
      'data-complete:bg-primary',
      'data-[orientation=vertical]:absolute data-[orientation=vertical]:mx-0',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:max-h-[calc(100%-var(--steps-size)-var(--steps-gutter)*2)]',
      'data-[orientation=vertical]:w-(--steps-thickness)',
      'data-[orientation=vertical]:top-[calc(var(--steps-size)+var(--steps-gutter))]',
      'data-[orientation=vertical]:left-[calc(var(--steps-size)/2-1px)]',
      props.class,
    )"
    data-slot="steps-separator"
  >
    <slot />
  </Steps.Separator>
</template>
