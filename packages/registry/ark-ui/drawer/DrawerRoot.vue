<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Drawer, type DrawerOpenChangeDetails, type DrawerRootProps, type DrawerSnapPointChangeDetails, type DrawerTriggerValueChangeDetails } from "@ark-ui/vue/drawer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DrawerRootProps & { class?: HTMLAttributes["class"] }>();

const emits = defineEmits<{
  openChange: [details: DrawerOpenChangeDetails];
  snapPointChange: [details: DrawerSnapPointChangeDetails];
  triggerValueChange: [details: DrawerTriggerValueChangeDetails];
}>();

const rootProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(rootProps, emits);
</script>

<template>
  <Drawer.Root v-bind="forwarded" :class="cn(props.class)">
    <slot />
  </Drawer.Root>
</template>
