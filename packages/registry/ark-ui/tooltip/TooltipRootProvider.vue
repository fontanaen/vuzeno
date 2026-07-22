<script setup lang="ts">
import { Tooltip, type TooltipRootProviderProps } from "@ark-ui/vue/tooltip";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TooltipRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Tooltip.RootProvider
    v-bind="providerProps"
    :class="cn(props.class)"
    data-slot="tooltip-root-provider"
  >
    <slot />
  </Tooltip.RootProvider>
</template>
