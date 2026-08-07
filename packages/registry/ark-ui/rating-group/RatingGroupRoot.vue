<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { RatingGroup, type RatingGroupRootEmits, type RatingGroupRootProps } from "@ark-ui/vue/rating-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<RatingGroupRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<RatingGroupRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <RatingGroup.Root
    v-bind="forwarded"
    :class="cn(
      'flex flex-col gap-1.5 text-foreground',
      'data-readonly:pointer-events-none',
      props.class,
    )"
    data-slot="rating-group"
  >
    <slot />
    <RatingGroup.HiddenInput />
  </RatingGroup.Root>
</template>
