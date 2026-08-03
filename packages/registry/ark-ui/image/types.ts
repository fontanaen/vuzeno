import type { Machine, Service } from "@zag-js/core";
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@zag-js/types";

export type ImageState = "loading" | "error" | "success";

export type StateChangeDetails = {
  state: ImageState;
};

export type ElementIds = Partial<{
  root: string;
  source: string;
  loading: string;
  error: string;
  fallback: string;
}>;

export type ImageProps = DirectionProperty &
  CommonProperties & {
    ids?: ElementIds | undefined;
    /**
     * Controlled image state.
     */
    state?: ImageState | undefined;
    /**
     * Initial state when uncontrolled.
     * @default "loading"
     */
    defaultState?: ImageState | undefined;
    /**
     * Called when the image state changes.
     */
    onStateChange?: ((details: StateChangeDetails) => void) | undefined;
  };

type PropsWithDefault = "defaultState";

export type ImageSchema = {
  props: RequiredBy<ImageProps, PropsWithDefault>;
  state: ImageState;
  context: Record<string, never>;
  refs: Record<string, never>;
  guard: "isStateControlled" | "isEventLoading" | "isEventError" | "isEventSuccess";
  effect: "trackSrcChange" | "trackImageRemoval";
  action: "checkImageStatus" | "invokeOnLoading" | "invokeOnSuccess" | "invokeOnError" | "invokeOnStateFromEvent" | "syncControlledState";
  event: {
    type: "CONTROLLED.LOADING" | "CONTROLLED.ERROR" | "CONTROLLED.SUCCESS" | "IMG_LOADED" | "IMG_ERROR" | "IMG_UNMOUNT" | "SRC_CHANGE" | "SET_STATE";
    state?: ImageState;
    src?: string | undefined;
  };
};

export type ImageService = Service<ImageSchema>;
export type ImageMachine = Machine<ImageSchema>;

export type ImageApi<T extends PropTypes = PropTypes> = {
  /**
   * Current image state.
   */
  state: ImageState;
  /**
   * Whether the image loaded successfully.
   */
  loaded: boolean;
  /**
   * Set the image state.
   */
  setState: (state: ImageState) => void;
  getRootProps: () => T["element"];
  getSourceProps: () => T["img"];
  getLoadingProps: () => T["element"];
  getErrorProps: () => T["element"];
  getFallbackProps: () => T["element"];
};
