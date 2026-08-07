<script setup lang="ts">
import { Marquee, type MarqueeRootProviderProps } from "@ark-ui/vue/marquee";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MarqueeRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Marquee.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'w-full max-w-[600px] overflow-hidden text-foreground',
      'data-[orientation=vertical]:h-60',
      'data-[orientation=horizontal]:h-20',
      'data-[paused]:![animation-play-state:paused] data-[paused]:[&_*]:![animation-play-state:paused]',
      props.class,
    )"
    data-slot="marquee-root-provider"
  >
    <slot />
  </Marquee.RootProvider>
</template>
