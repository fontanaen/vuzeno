<script setup lang="ts">
import { Marquee } from "@ark-ui/vue/marquee";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Marquee.Item
    :class="cn(
      'flex select-none items-center justify-center gap-3 whitespace-nowrap rounded-md border border-border px-6 py-4',
      '[&_[data-marquee-item-logo]]:text-2xl [&_[data-marquee-item-logo]]:leading-none',
      '[&_[data-marquee-item-name]]:text-sm [&_[data-marquee-item-name]]:font-medium [&_[data-marquee-item-name]]:text-foreground',
      props.class,
    )"
    data-slot="marquee-item"
  >
    <slot />
  </Marquee.Item>
</template>
