<script setup lang="ts">
import { Tabs, type TabsRootProviderProps } from "@ark-ui/vue/tabs";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TabsRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Tabs.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex max-w-lg text-muted-foreground',
      'data-[orientation=horizontal]:flex-col',
      'data-[orientation=vertical]:flex-row',
      props.class,
    )"
  >
    <slot />
  </Tabs.RootProvider>
</template>
