<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Tooltip, type TooltipRootEmits, type TooltipRootProps } from "@ark-ui/vue/tooltip";

const props = defineProps<TooltipRootProps>();
const emits = defineEmits<TooltipRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Tooltip.Root v-bind="forwarded">
    <slot />
  </Tooltip.Root>
</template>
