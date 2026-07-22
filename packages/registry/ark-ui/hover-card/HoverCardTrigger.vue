<script setup lang="ts">
import { HoverCard, type HoverCardTriggerProps } from "@ark-ui/vue/hover-card";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<HoverCardTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <HoverCard.Trigger
    v-bind="triggerProps"
    :class="cn(
      'inline-flex cursor-pointer items-center gap-1 font-medium text-foreground underline decoration-muted underline-offset-2',
      'transition-[color,text-decoration-color] duration-150',
      '[&:hover]:decoration-foreground',
      'focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      '[&_svg]:size-[1em]',
      props.class,
    )"
    data-slot="hover-card-trigger"
  >
    <slot />
  </HoverCard.Trigger>
</template>
