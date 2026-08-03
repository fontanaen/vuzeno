import type { Service } from "@zag-js/core";
import type { NormalizeProps, PropTypes } from "@zag-js/types";
import { parts } from "./anatomy";
import * as dom from "./dom";
import type { ImageApi, ImageSchema, ImageState } from "./types";

export function connect<T extends PropTypes>(service: Service<ImageSchema>, normalize: NormalizeProps<T>): ImageApi<T> {
  const { state, send, prop, scope } = service;
  const currentState = state.get();
  const loaded = state.matches("success");
  const isLoading = state.matches("loading");
  const isError = state.matches("error");

  function setState(nextState: ImageState) {
    if (currentState === nextState) {
      return;
    }
    send({ type: "SET_STATE", state: nextState });
  }

  return {
    state: currentState,
    loaded,
    setState,

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        dir: prop("dir"),
        id: dom.getRootId(scope),
        "data-state": currentState,
      });
    },

    getSourceProps() {
      return normalize.img({
        ...parts.source.attrs,
        dir: prop("dir"),
        id: dom.getSourceId(scope),
        hidden: !loaded,
        "data-state": currentState,
        onLoad() {
          send({ type: "IMG_LOADED", src: "element" });
        },
        onError() {
          send({ type: "IMG_ERROR", src: "element" });
        },
      });
    },

    getLoadingProps() {
      return normalize.element({
        ...parts.loading.attrs,
        dir: prop("dir"),
        id: dom.getLoadingId(scope),
        hidden: !isLoading,
        "data-state": currentState,
      });
    },

    getErrorProps() {
      return normalize.element({
        ...parts.error.attrs,
        dir: prop("dir"),
        id: dom.getErrorId(scope),
        hidden: !isError,
        "data-state": currentState,
      });
    },

    getFallbackProps() {
      return normalize.element({
        ...parts.fallback.attrs,
        dir: prop("dir"),
        id: dom.getFallbackId(scope),
        hidden: loaded,
        "data-state": currentState,
      });
    },
  };
}
