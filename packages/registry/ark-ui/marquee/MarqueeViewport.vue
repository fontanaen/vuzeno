<script setup lang="ts">
import { Marquee } from "@ark-ui/vue/marquee";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Marquee.Viewport
    :class="cn('size-full', props.class)"
    data-slot="marquee-viewport"
  >
    <slot />
  </Marquee.Viewport>
</template>
