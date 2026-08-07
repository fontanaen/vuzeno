<script setup lang="ts">
import { RatingGroup } from "@ark-ui/vue/rating-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <RatingGroup.Context
    :class="cn(props.class)"
    data-slot="rating-group-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </RatingGroup.Context>
</template>
