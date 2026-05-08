<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { GripVerticalIcon } from "lucide-vue-next";
import { type HTMLAttributes, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { injectListItemContext } from "./ListItem.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const item = injectListItemContext();
const handle = ref<HTMLElement | null>(null);

onMounted(() => {
  item.setHandleRef(handle.value);
});

watch(handle, (next) => {
  item.setHandleRef(next);
});

onBeforeUnmount(() => {
  item.setHandleRef(null);
});
</script>

<template>
  <button
    ref="handle"
    type="button"
    aria-label="Drag to reorder"
    data-slot="list-item-drag-handle"
    :data-dragging="item.isDragging.value ? '' : undefined"
    :class="
      cn(
        'inline-flex shrink-0 items-center justify-center text-muted-foreground touch-none cursor-grab focus-visible:outline-none active:cursor-grabbing',
        'rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        props.class,
      )
    "
  >
    <slot>
      <GripVerticalIcon class="size-4" />
    </slot>
  </button>
</template>
