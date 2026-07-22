<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Tour, type TourRootEmits, type TourRootProps } from "@ark-ui/vue/tour";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TourRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<TourRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Tour.Root
    v-bind="forwarded"
    :class="cn(props.class)"
    data-slot="tour"
  >
    <slot />
  </Tour.Root>
</template>
