<script setup lang="ts">
import { ToggleGroup, type ToggleGroupRootProviderProps } from "@ark-ui/vue/toggle-group";
import { reactiveOmit, toRefs } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { provideToggleGroupContext } from "./context";
import { type ToggleGroupVariantsProps, toggleGroupRootVariants } from "./variants";

interface Props extends ToggleGroupRootProviderProps, ToggleGroupVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const rootProviderProps = reactiveOmit(props, "class", "variant", "size");
const { variant, size } = toRefs(props);

provideToggleGroupContext({ variant, size });
</script>

<template>
  <ToggleGroup.RootProvider
    v-bind="rootProviderProps"
    :class="cn(toggleGroupRootVariants({ variant, size }), props.class)"
    data-slot="toggle-group-root-provider"
  >
    <slot />
  </ToggleGroup.RootProvider>
</template>
