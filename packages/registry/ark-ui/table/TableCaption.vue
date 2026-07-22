<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  PolymorphicProps & {
    class?: HTMLAttributes["class"];
  }
>();
</script>

<template>
  <ark.caption
    :as-child="asChild"
    data-slot="table-caption"
    :class="cn('mt-4 text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </ark.caption>
</template>
