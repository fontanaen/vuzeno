import type { Machine, Service } from "@zag-js/core";
import type { DismissableElementHandlers } from "@zag-js/dismissable";
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@zag-js/types";

export type ActionSheetOptionAcceptableValue = string | number | boolean | object | null | undefined;

export type ActionSheetStartResult<O extends ActionSheetOptionAcceptableValue = ActionSheetOptionAcceptableValue> =
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

export type OpenChangeDetails = {
  open: boolean;
};

export type SelectOptionDetails = {
  value: ActionSheetOptionAcceptableValue;
};

export type ElementIds = Partial<{
  trigger: string;
  backdrop: string;
  positioner: string;
  content: string;
}>;

export type ActionSheetProps = DirectionProperty &
  CommonProperties &
  DismissableElementHandlers & {
    ids?: ElementIds | undefined;
    /**
     * Whether to show the backdrop overlay.
     * @default true
     */
    showOverlay?: boolean | undefined;
    /**
     * Whether to trap focus inside the sheet when open.
     * @default true
     */
    trapFocus?: boolean | undefined;
    /**
     * Whether to prevent scrolling behind the sheet when open.
     * @default true
     */
    preventScroll?: boolean | undefined;
    /**
     * Whether to close when interacting outside.
     * @default true
     */
    closeOnInteractOutside?: boolean | undefined;
    /**
     * Alias of `closeOnInteractOutside` for the public Vue API.
     * @default true
     */
    closeOnClickOutside?: boolean | undefined;
    /**
     * Whether to close when Escape is pressed.
     * @default true
     */
    closeOnEscape?: boolean | undefined;
    /**
     * Accessible label when no visible title is rendered.
     */
    "aria-label"?: string | undefined;
    /**
     * Controlled open state.
     */
    open?: boolean | undefined;
    /**
     * Initial open state when uncontrolled.
     * @default false
     */
    defaultOpen?: boolean | undefined;
    /**
     * Called when the open state changes.
     */
    onOpenChange?: ((details: OpenChangeDetails) => void) | undefined;
    /**
     * Called when an option is selected.
     */
    onSelectOption?: ((details: SelectOptionDetails) => void) | undefined;
    /**
     * Called when the cancel action is triggered.
     */
    onCancel?: (() => void) | undefined;
    /**
     * Called when the sheet is dismissed (outside click / Escape).
     */
    onDismiss?: (() => void) | undefined;
  };

type PropsWithDefault = "showOverlay" | "closeOnInteractOutside" | "closeOnEscape" | "trapFocus" | "preventScroll";

export type ActionSheetSchema = {
  props: RequiredBy<ActionSheetProps, PropsWithDefault>;
  state: "open" | "closed";
  context: Record<string, never>;
  refs: {
    resolveShow: ((result: ActionSheetStartResult) => void) | null;
  };
  guard: "isOpenControlled";
  effect: "trackDismissableElement" | "preventScroll" | "trapFocus" | "hideContentBelow";
  action:
    | "invokeOnOpen"
    | "invokeOnClose"
    | "invokeOnSelectOption"
    | "invokeOnCancel"
    | "maybeInvokeOnDismiss"
    | "resolveShowWithOption"
    | "resolveShowWithCancel"
    | "resolveShowWithDismiss"
    | "toggleVisibility"
    | "setInitialFocus";
  event: {
    type: "CONTROLLED.OPEN" | "CONTROLLED.CLOSE" | "OPEN" | "CLOSE" | "TOGGLE" | "SELECT_OPTION" | "CANCEL";
    value?: ActionSheetOptionAcceptableValue;
    src?: string | undefined;
  };
};

export type ActionSheetService = Service<ActionSheetSchema>;
export type ActionSheetMachine = Machine<ActionSheetSchema>;

export type ItemProps = {
  value: ActionSheetOptionAcceptableValue;
  disabled?: boolean | undefined;
};

export type ActionSheetApi<T extends PropTypes = PropTypes> = {
  open: boolean;
  showOverlay: boolean;
  setOpen: (open: boolean) => void;
  show: () => Promise<ActionSheetStartResult>;
  close: () => void;
  getTriggerProps: () => T["button"];
  getBackdropProps: () => T["element"];
  getPositionerProps: () => T["element"];
  getContentProps: () => T["element"];
  getGroupProps: () => T["element"];
  getItemProps: (props: ItemProps) => T["button"];
  getCancelProps: () => T["button"];
};
