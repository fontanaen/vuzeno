<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Toggle, type ToggleRootEmits, type ToggleRootProps } from "@ark-ui/vue/toggle";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type ToggleVariantsProps, toggleVariants } from "./variants";

interface Props extends ToggleRootProps, ToggleVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
const emits = defineEmits<ToggleRootEmits>();

const rootProps = reactiveOmit(props, "class", "variant", "size");
const forwarded = useForwardPropsEmits(rootProps, emits);
</script>

<template>
  <Toggle.Root
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant: props.variant, size: props.size }), props.class)"
    data-slot="toggle"
  >
    <slot />
  </Toggle.Root>
</template>
