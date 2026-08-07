import type { Service } from "@zag-js/core";
import type { NormalizeProps, PropTypes } from "@zag-js/types";
import { parts } from "./anatomy";
import * as dom from "./dom";
import type { ActionSheetApi, ActionSheetSchema, ItemProps } from "./types";

export function connect<T extends PropTypes>(service: Service<ActionSheetSchema>, normalize: NormalizeProps<T>): ActionSheetApi<T> {
  const { state, send, prop, scope, refs } = service;
  const open = state.matches("open");
  const ariaLabel = prop("aria-label");

  function setOpen(nextOpen: boolean) {
    if (open === nextOpen) {
      return;
    }
    send({ type: nextOpen ? "OPEN" : "CLOSE" });
  }

  return {
    open,
    showOverlay: prop("showOverlay"),

    setOpen,

    show() {
      return new Promise((resolve) => {
        refs.set("resolveShow", resolve);
        setOpen(true);
      });
    },

    close() {
      setOpen(false);
    },

    getTriggerProps() {
      return normalize.button({
        ...parts.trigger.attrs,
        dir: prop("dir"),
        id: dom.getTriggerId(scope),
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        "aria-controls": dom.getContentId(scope),
        "data-state": open ? "open" : "closed",
        onClick(event) {
          if (event.defaultPrevented) {
            return;
          }
          send({ type: "TOGGLE" });
        },
      });
    },

    getBackdropProps() {
      return normalize.element({
        ...parts.backdrop.attrs,
        dir: prop("dir"),
        id: dom.getBackdropId(scope),
        "data-state": open ? "open" : "closed",
      });
    },

    getPositionerProps() {
      return normalize.element({
        ...parts.positioner.attrs,
        dir: prop("dir"),
        id: dom.getPositionerId(scope),
        style: {
          pointerEvents: open ? undefined : "none",
        },
      });
    },

    getContentProps() {
      return normalize.element({
        ...parts.content.attrs,
        dir: prop("dir"),
        role: "dialog",
        id: dom.getContentId(scope),
        tabIndex: -1,
        "aria-modal": true,
        "aria-label": ariaLabel || "Action sheet",
        "data-state": open ? "open" : "closed",
      });
    },

    getGroupProps() {
      return normalize.element({
        ...parts.group.attrs,
        dir: prop("dir"),
        role: "group",
        "aria-label": "Action sheet option group",
      });
    },

    getItemProps(props: ItemProps) {
      return normalize.button({
        ...parts.item.attrs,
        dir: prop("dir"),
        type: "button",
        disabled: props.disabled,
        onClick(event) {
          if (event.defaultPrevented || props.disabled) {
            return;
          }
          send({ type: "SELECT_OPTION", value: props.value });
        },
      });
    },

    getCancelProps() {
      return normalize.button({
        ...parts.cancel.attrs,
        dir: prop("dir"),
        type: "button",
        onClick(event) {
          if (event.defaultPrevented) {
            return;
          }
          send({ type: "CANCEL" });
        },
      });
    },
  };
}
