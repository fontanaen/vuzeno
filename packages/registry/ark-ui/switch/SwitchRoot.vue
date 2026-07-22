<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Switch, type SwitchRootEmits, type SwitchRootProps } from "@ark-ui/vue/switch";
import { reactiveOmit, toRefs } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { provideSwitchContext, type SwitchSize } from "./context";

const props = withDefaults(defineProps<SwitchRootProps & {
  class?: HTMLAttributes["class"];
  size?: SwitchSize;
}>(), {
  size: "default",
});
const emits = defineEmits<SwitchRootEmits>();

const rootProps = reactiveOmit(props, "class", "size");
const forwarded = useForwardPropsEmits(rootProps, emits);
const { size } = toRefs(props);

provideSwitchContext({ size });
</script>

<template>
  <Switch.Root
    v-bind="forwarded"
    :class="cn(
      'relative inline-flex items-center gap-2 text-muted-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="switch"
  >
    <slot />
    <Switch.HiddenInput />
  </Switch.Root>
</template>
