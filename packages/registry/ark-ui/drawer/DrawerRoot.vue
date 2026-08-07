<script setup lang="ts">
import { Drawer, type DrawerRootProps, type DrawerSnapPointChangeDetails, type DrawerTriggerValueChangeDetails } from "@ark-ui/vue/drawer";

const open = defineModel<boolean>({ default: () => false });

const props = defineProps<DrawerRootProps>();

const emits = defineEmits<{
  snapPointChange: [details: DrawerSnapPointChangeDetails];
  triggerValueChange: [details: DrawerTriggerValueChangeDetails];
}>();
</script>

<template>
  <Drawer.Root 
    :open="open" 
    :swipe-direction="swipeDirection" 
    :lazy-mount="lazyMount" 
    :unmount-on-exit="unmountOnExit" 
    :snap-points="snapPoints"
    @open-change="open = $event.open"
    @snap-point-change="emits('snapPointChange', $event)"
    @trigger-value-change="emits('triggerValueChange', $event)"
  >
    <slot />
  </Drawer.Root>
</template>
