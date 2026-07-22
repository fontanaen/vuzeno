<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import type { BadgeVariantsProps } from ".";
import { badgeVariants } from ".";

interface Props extends PolymorphicProps, BadgeVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <ark.div
    :as-child="asChild"
    data-slot="badge"
    :class="cn(badgeVariants({ variant }), props.class)"
  >
    <slot />
  </ark.div>
</template>
