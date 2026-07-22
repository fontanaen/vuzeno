<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Tabs, type TabsRootEmits, type TabsRootProps } from "@ark-ui/vue/tabs";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TabsRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<TabsRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Tabs.Root
    v-bind="forwarded"
    :class="cn(
      'flex text-muted-foreground',
      'data-[orientation=horizontal]:flex-col',
      'data-[orientation=vertical]:flex-row',
      props.class,
    )"
  >
    <slot />
  </Tabs.Root>
</template>
