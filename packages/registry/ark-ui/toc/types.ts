import type { Machine, Service } from "@zag-js/core";
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@zag-js/types";

/**
 * - `straight` — continuous vertical rail with an active highlight segment
 * - `sharp` — path follows nested depth offsets with 45° diagonal turns
 * - `rounded` — path follows nested depth offsets with smooth S-curve turns
 */
export type TocTurn = "straight" | "sharp" | "rounded";

/**
 * - `segment` — primary highlight covers only the active item
 * - `fill` — primary highlight fills the rail from the start up to the active item
 */
export type TocIndicatorMode = "segment" | "fill";

export type TocItemData = {
  value: string;
  depth: number;
};

export type ActiveValueChangeDetails = {
  value: string;
};

export type ElementIds = Partial<{
  root: string;
  title: string;
  list: string;
  indicator: string;
  item: (value: string) => string;
  link: (value: string) => string;
}>;

export type TocProps = DirectionProperty &
  CommonProperties & {
    ids?: ElementIds | undefined;
    /**
     * Rail path style.
     * @default "rounded"
     */
    turn?: TocTurn | undefined;
    /**
     * Active highlight behavior on the rail.
     * @default "segment"
     */
    indicator?: TocIndicatorMode | undefined;
    /**
     * Controlled active item value.
     */
    activeValue?: string | undefined;
    /**
     * Initial active item when uncontrolled.
     * @default ""
     */
    defaultActiveValue?: string | undefined;
    /**
     * Called when the active item changes.
     */
    onActiveValueChange?: ((details: ActiveValueChangeDetails) => void) | undefined;
  };

type PropsWithDefault = "turn" | "indicator" | "defaultActiveValue";

export type TocSchema = {
  props: RequiredBy<TocProps, PropsWithDefault | "id">;
  state: "idle";
  context: {
    activeValue: string;
    items: TocItemData[];
  };
  refs: Record<string, never>;
  guard: never;
  effect: never;
  action: "setActiveValue" | "registerItem" | "unregisterItem";
  event: {
    type: "VALUE.SET" | "ITEM.REGISTER" | "ITEM.UNREGISTER";
    value?: string;
    depth?: number;
  };
};

export type TocService = Service<TocSchema>;
export type TocMachine = Machine<TocSchema>;

export type ItemProps = {
  value: string;
  depth?: number | undefined;
};

export type LinkProps = {
  value: string;
};

export type TocApi<T extends PropTypes = PropTypes> = {
  /**
   * Current active item value.
   */
  activeValue: string;
  /**
   * Rail path style.
   */
  turn: TocTurn;
  /**
   * Active highlight behavior.
   */
  indicator: TocIndicatorMode;
  /**
   * Registered toc items in document order.
   */
  items: TocItemData[];
  /**
   * Set the active item value.
   */
  setActiveValue: (value: string) => void;
  /**
   * Register an item for indicator geometry.
   */
  registerItem: (item: TocItemData) => void;
  /**
   * Unregister an item.
   */
  unregisterItem: (value: string) => void;
  /**
   * Resolve the list element from the DOM scope.
   */
  getListEl: () => HTMLElement | null;
  /**
   * Resolve an item element from the DOM scope.
   */
  getItemEl: (value: string) => HTMLElement | null;
  getRootProps: () => T["element"];
  getTitleProps: () => T["element"];
  getListProps: () => T["element"];
  getItemProps: (props: ItemProps) => T["element"];
  getLinkProps: (props: LinkProps) => T["element"];
  getIndicatorProps: () => T["element"];
};
