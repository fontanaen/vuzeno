<script setup lang="ts">
import { Drawer, type DrawerRootProviderProps } from "@ark-ui/vue/drawer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DrawerRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Drawer.RootProvider
    v-bind="providerProps"
    :class="cn(props.class)"
    data-slot="drawer-root-provider"
  >
    <slot />
  </Drawer.RootProvider>
</template>
