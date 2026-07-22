<script setup lang="ts">
import { ToggleGroup, type ToggleGroupItemProps } from "@ark-ui/vue/toggle-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { injectToggleGroupContext } from "./context";
import { type ToggleGroupVariantsProps, toggleGroupItemVariants } from "./variants";

interface Props extends ToggleGroupItemProps, ToggleGroupVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const itemProps = reactiveOmit(props, "class", "variant", "size");
const { variant: contextVariant, size: contextSize } = injectToggleGroupContext();
</script>

<template>
  <ToggleGroup.Item
    v-bind="itemProps"
    :class="cn(toggleGroupItemVariants({
      variant: props.variant ?? contextVariant,
      size: props.size ?? contextSize,
    }), props.class)"
    data-slot="toggle-group-item"
  >
    <slot />
  </ToggleGroup.Item>
</template>
