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
  <ark.code
    :as-child="asChild"
    data-slot="typography-inline-code"
    :class="
      cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold sm:text-sm',
        props.class,
      )
    "
  >
    <slot />
  </ark.code>
</template>
