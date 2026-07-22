<script setup lang="ts">
import { Popover, type PopoverRootProviderProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.RootProvider
    v-bind="providerProps"
    :class="cn(props.class)"
    data-slot="popover-root-provider"
  >
    <slot />
  </Popover.RootProvider>
</template>
