<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Marquee, type MarqueeRootEmits, type MarqueeRootProps } from "@ark-ui/vue/marquee";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MarqueeRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<MarqueeRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Marquee.Root
    v-bind="forwarded"
    :class="cn(
      'w-full max-w-[600px] overflow-hidden text-foreground',
      'data-[orientation=vertical]:h-60',
      'data-[orientation=horizontal]:h-20',
      'data-[paused]:![animation-play-state:paused] data-[paused]:[&_*]:![animation-play-state:paused]',
      props.class,
    )"
    data-slot="marquee"
  >
    <slot />
  </Marquee.Root>
</template>
