<script setup lang="ts">
import { useCarousel } from "@vuzeno/ui/components/carousel";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { carouselRef, orientation } = useCarousel();
</script>

<template>
  <div ref="carouselRef" :class="props.class">
    <div
      :class="
        cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          props.class,
        )"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>