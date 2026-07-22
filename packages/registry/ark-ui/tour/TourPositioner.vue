<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Positioner
    :class="cn(
      'data-[type=dialog]:fixed data-[type=dialog]:inset-0 data-[type=dialog]:z-(--z-index) data-[type=dialog]:m-auto',
      'data-[type=dialog]:flex data-[type=dialog]:w-full data-[type=dialog]:items-center data-[type=dialog]:justify-center',
      'data-[type=floating]:fixed data-[type=floating]:z-(--z-index)',
      'data-[type=floating]:data-[placement*=bottom]:bottom-6',
      'data-[type=floating]:data-[placement*=top]:top-6',
      'data-[type=floating]:data-[placement*=end]:inset-e-6',
      'data-[type=floating]:data-[placement*=start]:inset-s-6',
      props.class,
    )"
    data-slot="tour-positioner"
  >
    <slot />
  </Tour.Positioner>
</template>
