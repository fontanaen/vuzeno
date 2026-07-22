<script setup lang="ts">
import { type TabListProps, Tabs } from "@ark-ui/vue/tabs";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TabListProps & { class?: HTMLAttributes["class"] }>();

const tabListProps = reactiveOmit(props, "class");
</script>

<template>
  <Tabs.List
    v-bind="tabListProps"
    :class="cn(
      'relative isolate inline-flex gap-1',
      'data-[orientation=horizontal]:border-b data-[orientation=horizontal]:border-muted data-[orientation=horizontal]:flex-row',
      'data-[orientation=vertical]:flex-col',
      props.class,
    )"
  >
    <slot />
  </Tabs.List>
</template>
