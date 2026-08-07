import type { Service } from "@zag-js/core";
import { dataAttr } from "@zag-js/dom-query";
import type { NormalizeProps, PropTypes } from "@zag-js/types";
import { parts } from "./anatomy";
import * as dom from "./dom";
import type { ItemProps, ScrollSpyApi, ScrollSpySchema } from "./types";

export function connect<T extends PropTypes>(service: Service<ScrollSpySchema>, normalize: NormalizeProps<T>): ScrollSpyApi<T> {
  const { context, send, prop, scope } = service;
  const activeValue = context.get("activeValue");
  const orientation = prop("orientation");
  const offset = prop("offset");

  function setActiveValue(value: string) {
    if (!value || value === activeValue) {
      return;
    }
    send({ type: "SET_VALUE", value });
  }

  return {
    activeValue,
    orientation,
    offset,
    setActiveValue,

    registerItem(value, element) {
      send({ type: "REGISTER_ITEM", value, element });
    },

    unregisterItem(value) {
      send({ type: "UNREGISTER_ITEM", value });
    },

    requestUpdate() {
      send({ type: "REQUEST_UPDATE" });
    },

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        dir: prop("dir"),
        id: dom.getRootId(scope),
        "data-orientation": orientation,
      });
    },

    getViewportProps() {
      return normalize.element({
        ...parts.viewport.attrs,
        dir: prop("dir"),
        id: dom.getViewportId(scope),
        "data-orientation": orientation,
        onScroll() {
          send({ type: "SCROLL" });
        },
      });
    },

    getItemProps(props: ItemProps) {
      const isActive = activeValue === props.value;

      return normalize.element({
        ...parts.item.attrs,
        dir: prop("dir"),
        "data-value": props.value,
        "data-active": dataAttr(isActive),
        "data-orientation": orientation,
      });
    },

    getTargetProps(props: ItemProps) {
      return normalize.element({
        ...parts.target.attrs,
        dir: prop("dir"),
        "data-value": props.value,
        hidden: true,
      });
    },
  };
}
