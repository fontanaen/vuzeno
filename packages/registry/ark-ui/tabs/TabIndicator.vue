<script setup lang="ts">
import { type TabIndicatorProps, Tabs } from "@ark-ui/vue/tabs";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TabIndicatorProps & { class?: HTMLAttributes["class"] }>();

const tabIndicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Tabs.Indicator
    v-bind="tabIndicatorProps"
    :class="cn(
      'absolute bottom-0 bg-primary',
      'transition-[width,height,left,top] duration-200 ease-out',
      'data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-(--width)',
      'data-[orientation=vertical]:h-(--height) data-[orientation=vertical]:w-[2px]',
      props.class,
    )"
  >
    <slot />
  </Tabs.Indicator>
</template>
