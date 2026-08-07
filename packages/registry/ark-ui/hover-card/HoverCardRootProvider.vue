<script setup lang="ts">
import { HoverCard, type HoverCardRootProviderProps } from "@ark-ui/vue/hover-card";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<HoverCardRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <HoverCard.RootProvider
    v-bind="providerProps"
    :class="cn(props.class)"
    data-slot="hover-card-root-provider"
  >
    <slot />
  </HoverCard.RootProvider>
</template>
