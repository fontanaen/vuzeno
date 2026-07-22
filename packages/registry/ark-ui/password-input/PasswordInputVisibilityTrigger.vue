<script setup lang="ts">
import { PasswordInput } from "@ark-ui/vue/password-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <PasswordInput.VisibilityTrigger
    :class="cn(
      'bg-accent absolute top-1/2 right-2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent p-1',
      'text-muted-foreground transition-colors duration-150 ease-out',
      '[&:hover:not(:disabled):not([data-disabled])]:text-foreground',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="password-input-visibility-trigger"
  >
    <slot />
  </PasswordInput.VisibilityTrigger>
</template>
