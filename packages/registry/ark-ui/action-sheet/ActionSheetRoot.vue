<script setup lang="ts">
import { cn } from "cnfast";
import { computed, type HTMLAttributes, useId } from "vue";
import { provideActionSheetContext } from "./context";
import type { ActionSheetOptionAcceptableValue, OpenChangeDetails } from "./types";
import { useActionSheet } from "./use-action-sheet";

const open = defineModel<boolean>("open", { default: false });

const props = withDefaults(
  defineProps<{
    closeOnClickOutside?: boolean;
    showOverlay?: boolean;
    closeOnEscape?: boolean;
    "aria-label"?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {
    closeOnClickOutside: true,
    showOverlay: true,
    closeOnEscape: true,
  },
);

const emits = defineEmits<{
  (event: "selectOption", value: ActionSheetOptionAcceptableValue): void;
  (event: "cancel"): void;
  (event: "close"): void;
  (event: "openChange", details: OpenChangeDetails): void;
}>();

const id = useId();

const actionSheet = useActionSheet(
  computed(() => ({
    id,
    open: open.value,
    showOverlay: props.showOverlay,
    closeOnClickOutside: props.closeOnClickOutside,
    closeOnInteractOutside: props.closeOnClickOutside,
    closeOnEscape: props.closeOnEscape,
    "aria-label": props["aria-label"],
    onOpenChange(details) {
      open.value = details.open;
      emits("openChange", details);
    },
    onSelectOption(details) {
      emits("selectOption", details.value);
    },
    onCancel() {
      emits("cancel");
    },
    onDismiss() {
      emits("close");
    },
  })),
);

provideActionSheetContext(actionSheet);
</script>

<template>
  <div
    data-slot="action-sheet"
    :class="cn(props.class)"
    :data-state="actionSheet.open ? 'open' : 'closed'"
  >
    <slot />
  </div>
</template>
