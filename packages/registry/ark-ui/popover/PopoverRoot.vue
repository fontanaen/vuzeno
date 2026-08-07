<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Popover, type PopoverRootEmits, type PopoverRootProps } from "@ark-ui/vue/popover";

const props = defineProps<PopoverRootProps>();
const emits = defineEmits<PopoverRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Popover.Root v-bind="forwarded">
    <slot />
  </Popover.Root>
</template>
