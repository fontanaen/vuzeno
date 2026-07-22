<script setup lang="ts">
import { Dialog } from "@ark-ui/vue/dialog";
import { type ActionSheetApi, type ActionSheetApiProps, provideActionSheetContext } from "./api";

const props = defineProps<{ value: ActionSheetApi<ActionSheetApiProps> }>();

provideActionSheetContext({
  showOverlay: props.value.props.showOverlay,
  closeOnClickOutside: props.value.props.closeOnClickOutside,
  onSelectOption(option) {
    props.value.onSelectOption(option);
    props.value.close();
  },
  onCancel() {
    props.value.onCancel();
    props.value.close();
  },
  onClose() {
    if (props.value.props.closeOnClickOutside.value === false) {
      return;
    }

    props.value.onClose();
    props.value.close();
  },
});
</script>

<template>
  <Dialog.Root
    v-model:open="props.value.props.open.value"
    :close-on-interact-outside="props.value.props.closeOnClickOutside.value"
    data-slot="action-sheet"
  >
    <slot />
  </Dialog.Root>
</template>
