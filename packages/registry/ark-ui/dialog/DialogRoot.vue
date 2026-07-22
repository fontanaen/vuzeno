<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Dialog, type DialogRootEmits, type DialogRootProps } from "@ark-ui/vue/dialog";

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Dialog.Root v-bind="forwarded">
    <slot />
  </Dialog.Root>
</template>
