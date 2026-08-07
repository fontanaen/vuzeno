<script setup lang="ts">
import { type TabContentProps, Tabs } from "@ark-ui/vue/tabs";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TabContentProps & { class?: HTMLAttributes["class"] }>();

const tabContentProps = reactiveOmit(props, "class");
</script>

<template>
  <Tabs.Content
    v-bind="tabContentProps"
    :class="cn(
      'py-[0.725rem] text-sm outline-none',
      'data-[orientation=vertical]:py-0 data-[orientation=vertical]:ps-4',
      'focus-visible:rounded focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary',
      props.class,
    )"
  >
    <slot />
  </Tabs.Content>
</template>
