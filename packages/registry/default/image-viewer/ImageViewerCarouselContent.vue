<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useCarousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { carouselRef, orientation } = useCarousel();
</script>

<template>
  <div ref="carouselRef">
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
