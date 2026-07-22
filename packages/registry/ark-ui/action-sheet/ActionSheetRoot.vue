<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Dialog } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import { toRefs } from "vue";
import { type ActionSheetEmits, type ActionSheetProps, provideActionSheetContext } from "./api";

const props = withDefaults(defineProps<ActionSheetProps>(), {
  closeOnClickOutside: true,
  showOverlay: true,
});

const emits = defineEmits<ActionSheetEmits>();

const open = defineModel<boolean>("open", { default: false });

const { showOverlay, closeOnClickOutside } = toRefs(props);

const rootProps = reactiveOmit(props, "class", "closeOnClickOutside", "showOverlay");
const forwarded = useForwardPropsEmits(rootProps, emits);

provideActionSheetContext({
  showOverlay,
  closeOnClickOutside,
  onSelectOption(option) {
    emits("selectOption", option);
    open.value = false;
  },
  onCancel() {
    emits("cancel");
  },
  onClose() {
    emits("close");
  },
});
</script>

<template>
  <Dialog.Root
    v-bind="forwarded"
    v-model:open="open"
    :close-on-interact-outside="closeOnClickOutside"
    :class="cn(props.class)"
    data-slot="action-sheet"
  >
    <slot />
  </Dialog.Root>
</template>
