<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PolymorphicProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ark.a
    :as-child="asChild"
    data-slot="breadcrumb-link"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </ark.a>
</template>
