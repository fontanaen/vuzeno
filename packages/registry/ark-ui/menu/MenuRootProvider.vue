<script setup lang="ts">
import { Menu, type MenuRootProviderEmits, type MenuRootProviderProps } from "@ark-ui/vue/menu";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<MenuRootProviderProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<MenuRootProviderEmits>();
</script>

<template>
  <Menu.RootProvider
    :value="value"
    :unmount-on-exit="unmountOnExit"
    :lazy-mount="lazyMount"
    :class="cn(props.class)"
    data-slot="menu-root-provider"
    @exit-complete="$emit('exitComplete')"
  >
    <slot />
  </Menu.RootProvider>
</template>
