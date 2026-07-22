<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Slider, type SliderRootEmits, type SliderRootProps } from "@ark-ui/vue/slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SliderRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<SliderRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Slider.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-64 flex-col gap-1.5 text-foreground',
      'data-[orientation=vertical]:h-48 data-[orientation=vertical]:max-w-max',
      props.class,
    )"
    data-slot="slider"
  >
    <slot />
  </Slider.Root>
</template>
