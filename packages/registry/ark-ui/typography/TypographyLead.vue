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
  <ark.p
    :as-child="asChild"
    data-slot="typography-lead"
    :class="cn('text-lg text-muted-foreground sm:text-xl', props.class)"
  >
    <slot />
  </ark.p>
</template>
