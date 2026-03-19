<script setup lang="ts">
import { EditableRoot, type EditableRootEmits, type EditableRootProps, useForwardPropsEmits } from "reka-ui";

const props = defineProps<EditableRootProps>();
const emits = defineEmits<EditableRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <EditableRoot v-bind="forwarded">
    <slot />
  </EditableRoot>
</template>