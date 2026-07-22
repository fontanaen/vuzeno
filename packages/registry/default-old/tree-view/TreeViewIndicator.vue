<script setup lang="ts">
import { cn } from "cnfast";
import { FolderIcon, FolderOpenIcon } from "lucide-vue-next";
import { Primitive, type PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      isExpanded?: boolean;
      hasChildren?: boolean;
      handleToggle?: () => void;
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    as: "button",
    asChild: false,
    hasChildren: true,
  },
);

function onClick(event: MouseEvent) {
  event.stopPropagation();
  props.handleToggle?.();
}
</script>

<template>
  <Primitive
    v-if="hasChildren"
    :as="as"
    :as-child="asChild"
    type="button"
    tabindex="-1"
    data-slot="tree-view-indicator"
    :data-state="isExpanded ? 'open' : 'closed'"
    :class="cn(props.class)"
    @click="onClick"
  >
    <slot>
      <FolderOpenIcon v-if="isExpanded" class="size-4" />
      <FolderIcon v-else class="size-4" />
    </slot>
  </Primitive>
</template>
