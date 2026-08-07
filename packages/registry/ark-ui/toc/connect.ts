import type { Service } from "@zag-js/core";
import { dataAttr } from "@zag-js/dom-query";
import type { NormalizeProps, PropTypes } from "@zag-js/types";
import { parts } from "./anatomy";
import * as dom from "./dom";
import type { ItemProps, LinkProps, TocApi, TocSchema } from "./types";

export function connect<T extends PropTypes>(service: Service<TocSchema>, normalize: NormalizeProps<T>): TocApi<T> {
  const { send, prop, scope, context } = service;
  const activeValue = context.get("activeValue");
  const items = context.get("items");
  const turn = prop("turn");
  const indicator = prop("indicator");

  function setActiveValue(value: string) {
    if (!value || activeValue === value) {
      return;
    }
    send({ type: "VALUE.SET", value });
  }

  return {
    activeValue,
    turn,
    indicator,
    items,

    setActiveValue,

    registerItem(item) {
      send({ type: "ITEM.REGISTER", value: item.value, depth: item.depth });
    },

    unregisterItem(value) {
      send({ type: "ITEM.UNREGISTER", value });
    },

    getListEl() {
      return dom.getListEl(scope);
    },

    getItemEl(value) {
      return dom.getItemEl(scope, value);
    },

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        dir: prop("dir"),
        id: dom.getRootId(scope),
        "data-turn": turn,
        "data-indicator": indicator,
      });
    },

    getTitleProps() {
      return normalize.element({
        ...parts.title.attrs,
        dir: prop("dir"),
        id: dom.getTitleId(scope),
      });
    },

    getListProps() {
      return normalize.element({
        ...parts.list.attrs,
        dir: prop("dir"),
        id: dom.getListId(scope),
      });
    },

    getItemProps(props: ItemProps) {
      const depth = props.depth ?? 2;
      const isActive = activeValue === props.value;

      return normalize.element({
        ...parts.item.attrs,
        dir: prop("dir"),
        id: dom.getItemId(scope, props.value),
        "data-value": props.value,
        "data-depth": depth,
        "data-active": dataAttr(isActive),
      });
    },

    getLinkProps(props: LinkProps) {
      const isActive = activeValue === props.value;

      return normalize.element({
        ...parts.link.attrs,
        dir: prop("dir"),
        id: dom.getLinkId(scope, props.value),
        "data-value": props.value,
        "data-active": dataAttr(isActive),
        onClick(event) {
          if (event.defaultPrevented) {
            return;
          }
          setActiveValue(props.value);
        },
      });
    },

    getIndicatorProps() {
      return normalize.element({
        ...parts.indicator.attrs,
        dir: prop("dir"),
        id: dom.getIndicatorId(scope),
        "data-turn": turn,
        "data-indicator": indicator,
        "aria-hidden": true,
      });
    },
  };
}
