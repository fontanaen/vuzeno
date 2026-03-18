<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { ColorSliderRoot, type ColorSliderRootEmits, type ColorSliderRootProps, ColorSliderThumb, ColorSliderTrack, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  ColorSliderRootProps & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<ColorSliderRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ColorSliderRoot
    v-bind="forwarded"
    :class="cn('relative flex items-center select-none touch-none w-[200px] h-4', props.class)"
  >
    <ColorSliderTrack
      class="relative flex-1 rounded-full h-3"
    >
      <div class="absolute inset-0 rounded-full" />
    </ColorSliderTrack>
    <ColorSliderThumb
      class="block size-4 rounded-full bg-white border-2 border-border shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
    />
  </ColorSliderRoot>
</template>