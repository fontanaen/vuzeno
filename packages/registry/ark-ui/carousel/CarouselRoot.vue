<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Carousel, type CarouselRootEmits, type CarouselRootProps } from "@ark-ui/vue/carousel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CarouselRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<CarouselRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Carousel.Root
    v-bind="forwarded"
    :class="cn(
      'relative flex w-full max-w-lg flex-col gap-4 text-foreground',
      'data-[orientation=vertical]:h-80 data-[orientation=vertical]:max-w-max data-[orientation=vertical]:flex-row',
      props.class,
    )"
    data-slot="carousel"
  >
    <slot />
  </Carousel.Root>
</template>
