<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Menu, type MenuRootEmits, type MenuRootProps } from "@ark-ui/vue/menu";

const props = defineProps<MenuRootProps>();
const emits = defineEmits<MenuRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Menu.Root v-bind="forwarded">
    <slot />
  </Menu.Root>
</template>
