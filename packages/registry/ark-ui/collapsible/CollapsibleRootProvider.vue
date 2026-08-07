<script setup lang="ts">
import { Collapsible, type CollapsibleRootProviderProps } from "@ark-ui/vue/collapsible";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CollapsibleRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Collapsible.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex flex-col gap-2 w-88 max-w-[calc(100vw-8rem)] text-foreground',
      props.class,
    )"
    data-slot="collapsible-root-provider"
  >
    <slot />
  </Collapsible.RootProvider>
</template>
