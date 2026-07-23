<script setup lang="ts">
import { Switch, type SwitchRootProviderProps } from "@ark-ui/vue/switch";
import { reactiveOmit, toRefs } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { provideSwitchContext, type SwitchSize } from "./context";

const props = withDefaults(
  defineProps<
    SwitchRootProviderProps & {
      class?: HTMLAttributes["class"];
      size?: SwitchSize;
    }
  >(),
  {
    size: "default",
  },
);

const rootProviderProps = reactiveOmit(props, "class", "size");
const { size } = toRefs(props);

provideSwitchContext({ size });
</script>

<template>
  <Switch.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'relative inline-flex items-center gap-2 text-muted-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="switch-root-provider"
  >
    <slot />
    <Switch.HiddenInput />
  </Switch.RootProvider>
</template>
