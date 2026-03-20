<script lang="ts">
export type ActionSheetProps = DialogRootProps & {
  closeOnClickOutside?: boolean;
  showOverlay?: boolean;
};
export type ActionSheetEmits = DialogRootEmits;

export type ActionSheetOptionAcceptableValue = string | number | boolean | object | null | undefined;

export type ActionSheetContext<P extends ActionSheetProps> = {
  showOverlay: Ref<NonNullable<P["showOverlay"]>>;
  onSelectOption: (option: ActionSheetOptionAcceptableValue) => void;
  onCancel: () => void;
  onClose: () => void;
};

export type ActionSheetStartResult<O extends ActionSheetOptionAcceptableValue> =
  | {
      cancelled: true;
      cancelledReason: "cancel" | "close";
      selectedOption: null;
    }
  | {
      cancelled: false;
      cancelledReason: null;
      selectedOption: O;
    };

export const [injectActionSheetContext, provideActionSheetContext] = createContext<ActionSheetContext>("ActionSheetContext");
</script>

<script setup lang="ts">
import { until } from "@vueuse/core";
import type { DialogRootEmits, DialogRootProps } from "reka-ui";
import { createContext, DialogRoot, useForwardPropsEmits } from "reka-ui";
import { nextTick, ref, toRefs, type Ref } from "vue";

const props = withDefaults(defineProps<ActionSheetProps>(), {
  closeOnClickOutside: true,
  showOverlay: true,
});

const emits = defineEmits<ActionSheetEmits>();

const open = defineModel<boolean>("open", { default: false });

const { showOverlay } = toRefs(props);

const forwarded = useForwardPropsEmits(props, emits);

const isPromise = ref<boolean>(false);
const actionResult = ref<ActionSheetStartResult<any> | null>(null);

provideActionSheetContext({
  showOverlay,
  onSelectOption: (option: ActionSheetOptionAcceptableValue) => {
    if (isPromise.value === false) {
      open.value = false;
      return;
    }

    actionResult.value = {
      cancelled: false,
      cancelledReason: null,
      selectedOption: option,
    };
  },
  onCancel: () => {
    if (isPromise.value === false) {
      open.value = false;
      return;
    }

    actionResult.value = {
      cancelled: true,
      cancelledReason: "cancel",
      selectedOption: null,
    };
  },
  onClose: () => {
    if (props.closeOnClickOutside === false) {
      return;
    }

    if (isPromise.value === false) {
      open.value = false;
      return;
    }

    actionResult.value = {
      cancelled: true,
      cancelledReason: "close",
      selectedOption: null,
    };
  },
});

defineExpose({
  async start<O extends ActionSheetOptionAcceptableValue>(): Promise<ActionSheetStartResult<O>> {
    isPromise.value = true;
    open.value = true;
    await nextTick();
    await until(() => actionResult.value !== null).toBe(true);

    open.value = false;
    
    const result = actionResult.value;
    actionResult.value = null;
    isPromise.value = false;
    
    return result as ActionSheetStartResult<O>;
  },
});
</script>

<template>
  <DialogRoot v-bind="forwarded" v-model:open="open">
    <slot />
  </DialogRoot>
</template>