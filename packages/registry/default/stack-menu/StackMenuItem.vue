<script setup lang="ts">
import { useMutationObserver } from "@vueuse/core";
import { Button } from "@vuzeno/ui/components/button";
import { cn } from "@vuzeno/ui/lib/utils";
import { computed, type HTMLAttributes, ref, useTemplateRef } from "vue";
import { useStackMenuContext } from "./StackMenu.vue";
import { getItemStyle } from "./utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<(e: "click", event: MouseEvent) => void>();

const el = useTemplateRef<InstanceType<typeof Button>>("el");

const itemIndex = ref<number | null>(null);
const itemLevel = ref<number>(0);

useMutationObserver(
  el,
  () => {
    itemIndex.value = Number(el.value?.$el.getAttribute("data-index") ?? 0);
    itemLevel.value = Number(el.value?.$el.getAttribute("data-level") ?? 0);
  },
  {
    attributes: true,
    attributeFilter: ["data-index", "data-level"],
  },
);

const { open, deepestSubMenuItems } = useStackMenuContext()!;

const itemStyle = computed(() => getItemStyle({ index: itemIndex.value! }, deepestSubMenuItems.value));
</script>

<template>
  <Button 
    data-slot="stack-menu-item"
    ref="el" 
    variant="outline"
    size="lg"
    :class="cn('w-full justify-start px-4 animate-in fade-in-0 transition-all duration-300 ease-in-out', props.class)"
    :style="itemStyle"
    @click="(event: MouseEvent) => {
      emits('click', event);
      
      if (event.defaultPrevented) {
        return;
      }

      open = false
    }"
  >
    <slot />
  </Button>
</template>