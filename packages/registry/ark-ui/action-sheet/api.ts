import { createContext, type DialogRootEmits, type DialogRootProps } from "@ark-ui/vue";
import { createEventHook } from "@vueuse/core";
import type { HTMLAttributes, Ref } from "vue";

export type ActionSheetProps = DialogRootProps & {
  closeOnClickOutside?: boolean;
  showOverlay?: boolean;
  class?: HTMLAttributes["class"];
};

export interface ActionSheetEmits extends DialogRootEmits {
  selectOption: [option: ActionSheetOptionAcceptableValue];
  cancel: [];
  close: [];
}

export type ActionSheetOptionAcceptableValue = string | number | boolean | object | null | undefined;

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

export type ActionSheetApiProps<P extends ActionSheetProps = ActionSheetProps> = {
  open: Ref<NonNullable<P["open"]>>;
  showOverlay: Ref<NonNullable<P["showOverlay"]>>;
  closeOnClickOutside: Ref<NonNullable<P["closeOnClickOutside"]>>;
};

export type ActionSheetApi<P extends ActionSheetApiProps = ActionSheetApiProps> = {
  props: P;
  show(): Promise<ActionSheetStartResult<ActionSheetOptionAcceptableValue>>;
  close(): void;
  onSelectOption(option: ActionSheetOptionAcceptableValue): void;
  onCancel(): void;
  onClose(): void;
};

export type ActionSheetContext<P extends ActionSheetProps = ActionSheetProps> = {
  showOverlay: Ref<NonNullable<P["showOverlay"]>>;
  closeOnClickOutside: Ref<NonNullable<P["closeOnClickOutside"]>>;
  onSelectOption: (option: ActionSheetOptionAcceptableValue) => void;
  onCancel: () => void;
  onClose: () => void;
};

export const [provideActionSheetContext, injectActionSheetContext] = createContext<ActionSheetContext>("ActionSheetContext");

export function useActionSheet(props: ActionSheetApiProps<ActionSheetProps>): ActionSheetApi<ActionSheetApiProps<ActionSheetProps>> {
  const selectOptionHook = createEventHook<ActionSheetOptionAcceptableValue>();
  const cancelHook = createEventHook<void>();
  const closeHook = createEventHook<void>();

  return {
    props,
    async show() {
      props.open.value = true;

      return new Promise((resolve) => {
        selectOptionHook.on((option) => {
          resolve({
            cancelled: false,
            cancelledReason: null,
            selectedOption: option,
          });
        });

        cancelHook.on(() => {
          resolve({
            cancelled: true,
            cancelledReason: "cancel",
            selectedOption: null,
          });
        });

        closeHook.on(() => {
          resolve({
            cancelled: true,
            cancelledReason: "close",
            selectedOption: null,
          });
        });
      });
    },
    close() {
      props.open.value = false;
    },
    onSelectOption: selectOptionHook.trigger,
    onCancel: cancelHook.trigger,
    onClose: closeHook.trigger,
  };
}
