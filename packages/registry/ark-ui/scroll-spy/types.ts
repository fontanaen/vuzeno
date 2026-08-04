import type { Machine, Service } from "@zag-js/core";
import type { AnimationFrame } from "@zag-js/dom-query";
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@zag-js/types";

export type ScrollSpyOrientation = "vertical" | "horizontal";

export type ValueChangeDetails = {
  value: string;
};

export type ElementIds = Partial<{
  root: string;
  viewport: string;
}>;

export type ScrollSpyProps = DirectionProperty &
  CommonProperties & {
    ids?: ElementIds | undefined;
    /**
     * Controlled active section value.
     */
    value?: string | undefined;
    /**
     * Initial active section when uncontrolled.
     * @default ""
     */
    defaultValue?: string | undefined;
    /**
     * Scroll orientation used for threshold tracking.
     * @default "vertical"
     */
    orientation?: ScrollSpyOrientation | undefined;
    /**
     * Distance from the start of the scroll root used as the active threshold.
     * Accepts a ratio (`0`–`1`) of the scroll root size, or an absolute pixel value.
     * @default 0.25
     */
    offset?: number | undefined;
    /**
     * External scroll root when `ScrollSpy.Viewport` is not used.
     */
    root?: HTMLElement | null | undefined;
    /**
     * Called when the active section value changes.
     */
    onValueChange?: ((details: ValueChangeDetails) => void) | undefined;
  };

type PropsWithDefault = "orientation" | "offset" | "defaultValue";

export type ScrollSpySchema = {
  props: RequiredBy<ScrollSpyProps, PropsWithDefault>;
  state: "idle";
  context: {
    activeValue: string;
  };
  refs: {
    items: Map<string, HTMLElement>;
    frame: AnimationFrame;
  };
  guard: never;
  effect: "trackWindowListeners";
  action: "registerItem" | "unregisterItem" | "scheduleUpdate" | "syncActiveValue" | "setActiveValue" | "cleanupFrame";
  event: {
    type: "REGISTER_ITEM" | "UNREGISTER_ITEM" | "SCROLL" | "RESIZE" | "SYNC" | "SET_VALUE" | "REQUEST_UPDATE";
    value?: string;
    element?: HTMLElement | null;
  };
};

export type ScrollSpyService = Service<ScrollSpySchema>;
export type ScrollSpyMachine = Machine<ScrollSpySchema>;

export type ItemProps = {
  value: string;
};

export type ScrollSpyApi<T extends PropTypes = PropTypes> = {
  /**
   * Current active section value.
   */
  activeValue: string;
  /**
   * Scroll orientation.
   */
  orientation: ScrollSpyOrientation;
  /**
   * Active threshold offset.
   */
  offset: number;
  /**
   * Set the active section value.
   */
  setActiveValue: (value: string) => void;
  /**
   * Register a section element to track.
   */
  registerItem: (value: string, element: HTMLElement) => void;
  /**
   * Unregister a previously registered section.
   */
  unregisterItem: (value: string) => void;
  /**
   * Schedule an active-value recalculation.
   */
  requestUpdate: () => void;
  getRootProps: () => T["element"];
  getViewportProps: () => T["element"];
  getItemProps: (props: ItemProps) => T["element"];
  getTargetProps: (props: ItemProps) => T["element"];
};
