<script setup lang="ts">
import { RatingGroup } from "@ark-ui/vue/rating-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <RatingGroup.Control
    :class="cn(
      'inline-flex items-center gap-0.5',
      props.class,
    )"
    data-slot="rating-group-control"
  >
    <slot />
  </RatingGroup.Control>
</template>
