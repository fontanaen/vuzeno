<script setup lang="ts">
import { RatingGroup, type RatingGroupRootProviderProps } from "@ark-ui/vue/rating-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<RatingGroupRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <RatingGroup.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex flex-col gap-1.5 text-foreground',
      'data-readonly:pointer-events-none',
      props.class,
    )"
    data-slot="rating-group-root-provider"
  >
    <slot />
  </RatingGroup.RootProvider>
</template>
