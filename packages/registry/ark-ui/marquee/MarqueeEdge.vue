<script setup lang="ts">
import { Marquee, type MarqueeEdgeProps } from "@ark-ui/vue/marquee";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MarqueeEdgeProps & { class?: HTMLAttributes["class"] }>();

const edgeProps = reactiveOmit(props, "class");
</script>

<template>
  <Marquee.Edge
    v-bind="edgeProps"
    :class="cn(
      'pointer-events-none z-10',
      'data-[side=start]:w-1/5 data-[side=start]:bg-gradient-to-r data-[side=start]:from-popover data-[side=start]:to-transparent',
      'data-[side=start]:[dir=rtl]:bg-gradient-to-l',
      'data-[side=end]:w-1/5 data-[side=end]:bg-gradient-to-l data-[side=end]:from-popover data-[side=end]:to-transparent',
      'data-[side=end]:[dir=rtl]:bg-gradient-to-r',
      'data-[side=top]:h-1/5 data-[side=top]:bg-gradient-to-b data-[side=top]:from-popover data-[side=top]:to-transparent',
      'data-[side=bottom]:h-1/5 data-[side=bottom]:bg-gradient-to-t data-[side=bottom]:from-popover data-[side=bottom]:to-transparent',
      props.class,
    )"
    data-slot="marquee-edge"
  >
    <slot />
  </Marquee.Edge>
</template>
