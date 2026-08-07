<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { ToggleGroup, type ToggleGroupRootEmits, type ToggleGroupRootProps } from "@ark-ui/vue/toggle-group";
import { reactiveOmit, toRefs } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { provideToggleGroupContext } from "./context";
import { type ToggleGroupVariantsProps, toggleGroupRootVariants } from "./variants";

interface Props extends ToggleGroupRootProps, ToggleGroupVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
const emits = defineEmits<ToggleGroupRootEmits>();

const delegatedProps = reactiveOmit(props, "class", "variant", "size");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
const { variant, size } = toRefs(props);

provideToggleGroupContext({ variant, size });
</script>

<template>
  <ToggleGroup.Root
    v-bind="forwarded"
    :class="cn(toggleGroupRootVariants({ variant, size }), props.class)"
    data-slot="toggle-group"
  >
    <slot />
  </ToggleGroup.Root>
</template>
