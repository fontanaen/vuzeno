<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn(
      'px-3 py-2.5 text-sm leading-normal text-foreground',
      '[&_p+p]:mt-2',
      '[&_code]:font-mono [&_code]:text-sm [&_code]:text-foreground [&_code]:bg-muted [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md',
      props.class,
    )"
    data-slot="collapsible-body"
  >
    <slot />
  </div>
</template>
