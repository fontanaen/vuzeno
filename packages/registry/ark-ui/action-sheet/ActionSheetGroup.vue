<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] } & PolymorphicProps>();
</script>

<template>
  <ark.div
    :as-child="asChild"
    role="group"
    aria-label="Action sheet option group"
    data-scope="action-sheet"
    data-part="group"
    :class="cn('flex flex-col gap-0', props.class)"
  >
    <slot />
  </ark.div>
</template>
