<script setup lang="ts">
import { DropdownMenu } from "@vuzeno/ui/components/dropdown-menu";
import type { DropdownMenuRootEmits, DropdownMenuRootProps } from "reka-ui";
import { useForwardPropsEmits } from "reka-ui";

const props = defineProps<DropdownMenuRootProps>();
const emits = defineEmits<DropdownMenuRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DropdownMenu v-bind="forwarded">
    <slot />
  </DropdownMenu>
</template>
