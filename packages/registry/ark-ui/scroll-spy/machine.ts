import { createMachine } from "@zag-js/core";
import { AnimationFrame } from "@zag-js/dom-query";
import * as dom from "./dom";
import type { ScrollSpySchema } from "./types";

export const machine = createMachine<ScrollSpySchema>({
  props({ props }) {
    return {
      orientation: "vertical",
      offset: 0.25,
      defaultValue: "",
      root: null,
      ...props,
    };
  },

  initialState() {
    return "idle";
  },

  context({ prop, bindable }) {
    return {
      activeValue: bindable(() => ({
        defaultValue: prop("defaultValue"),
        value: prop("value"),
        onChange(value) {
          prop("onValueChange")?.({ value });
        },
      })),
    };
  },

  refs() {
    return {
      items: new Map(),
      frame: AnimationFrame.create(),
    };
  },

  watch({ track, action, prop }) {
    track([() => prop("root"), () => prop("offset"), () => prop("orientation")], () => {
      action(["scheduleUpdate"]);
    });
  },

  states: {
    idle: {
      entry: ["scheduleUpdate"],
      effects: ["trackWindowListeners"],
      on: {
        REGISTER_ITEM: {
          actions: ["registerItem", "scheduleUpdate"],
        },
        UNREGISTER_ITEM: {
          actions: ["unregisterItem", "scheduleUpdate"],
        },
        SCROLL: {
          actions: ["scheduleUpdate"],
        },
        RESIZE: {
          actions: ["scheduleUpdate"],
        },
        REQUEST_UPDATE: {
          actions: ["scheduleUpdate"],
        },
        SYNC: {
          actions: ["syncActiveValue"],
        },
        SET_VALUE: {
          actions: ["setActiveValue"],
        },
      },
      exit: ["cleanupFrame"],
    },
  },

  implementations: {
    effects: {
      trackWindowListeners({ scope, send, prop }) {
        const win = scope.getWin();
        if (!win || typeof win.addEventListener !== "function") {
          return;
        }

        function onWindowScroll() {
          if (dom.getViewportEl(scope) ?? prop("root")) {
            return;
          }
          send({ type: "SCROLL" });
        }

        function onWindowResize() {
          send({ type: "RESIZE" });
        }

        win.addEventListener("scroll", onWindowScroll, { passive: true });
        win.addEventListener("resize", onWindowResize, { passive: true });

        return () => {
          win.removeEventListener("scroll", onWindowScroll);
          win.removeEventListener("resize", onWindowResize);
        };
      },
    },

    actions: {
      registerItem({ refs, event }) {
        if (!event.value || !event.element) {
          return;
        }
        refs.get("items").set(event.value, event.element);
      },

      unregisterItem({ refs, event }) {
        if (!event.value) {
          return;
        }
        refs.get("items").delete(event.value);
      },

      scheduleUpdate({ refs, send, scope }) {
        const win = scope.getWin();
        if (!win || typeof win.requestAnimationFrame !== "function") {
          return;
        }

        refs.get("frame").request(() => {
          send({ type: "SYNC" });
        });
      },

      syncActiveValue({ refs, prop, context, scope }) {
        const win = scope.getWin();
        if (!win || typeof Document === "undefined") {
          return;
        }

        const next = dom.resolveActiveValue(refs.get("items"), dom.getViewportEl(scope) ?? prop("root") ?? null, prop("offset"), prop("orientation"), win);

        if (!next || next === context.get("activeValue")) {
          return;
        }

        context.set("activeValue", next);
      },

      setActiveValue({ context, event }) {
        if (!event.value || event.value === context.get("activeValue")) {
          return;
        }
        context.set("activeValue", event.value);
      },

      cleanupFrame({ refs }) {
        refs.get("frame").cleanup();
      },
    },
  },
});
