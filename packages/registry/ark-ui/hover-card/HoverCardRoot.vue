<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { HoverCard, type HoverCardRootEmits, type HoverCardRootProps } from "@ark-ui/vue/hover-card";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<HoverCardRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<HoverCardRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <HoverCard.Root
    v-bind="forwarded"
    :class="cn(props.class)"
    data-slot="hover-card"
  >
    <slot />
  </HoverCard.Root>
</template>
