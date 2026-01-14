<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { TabsListProps } from "reka-ui";
import { TabsList } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "#/lib/utils";

const props = defineProps<TabsListProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(
      'inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      props.class,
    )"
  >
    <slot />
  </TabsList>
</template>
