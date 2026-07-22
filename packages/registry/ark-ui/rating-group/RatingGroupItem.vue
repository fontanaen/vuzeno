<script setup lang="ts">
import { RatingGroup, type RatingGroupItemProps } from "@ark-ui/vue/rating-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<RatingGroupItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <RatingGroup.Item
    v-bind="itemProps"
    :class="cn(
      'inline-flex cursor-pointer items-center justify-center',
      'data-disabled:opacity-50 data-disabled:grayscale',
      'focus-visible:outline-none',
      props.class,
    )"
    data-slot="rating-group-item"
  >
    <slot />
  </RatingGroup.Item>
</template>
