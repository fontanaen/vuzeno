import { createMachine } from "@zag-js/core";
import type { TocItemData, TocSchema } from "./types";

export const machine = createMachine<TocSchema>({
  props({ props }) {
    return {
      turn: "rounded",
      indicator: "segment",
      defaultActiveValue: "",
      ...props,
    };
  },

  initialState() {
    return "idle";
  },

  context({ prop, bindable }) {
    return {
      activeValue: bindable(() => ({
        defaultValue: prop("defaultActiveValue"),
        value: prop("activeValue"),
        onChange(value) {
          prop("onActiveValueChange")?.({ value });
        },
      })),
      items: bindable(() => ({
        defaultValue: [] as TocItemData[],
      })),
    };
  },

  on: {
    "VALUE.SET": {
      actions: ["setActiveValue"],
    },
    "ITEM.REGISTER": {
      actions: ["registerItem"],
    },
    "ITEM.UNREGISTER": {
      actions: ["unregisterItem"],
    },
  },

  states: {
    idle: {
      on: {},
    },
  },

  implementations: {
    actions: {
      setActiveValue({ context, event }) {
        if (event.value == null || event.value === context.get("activeValue")) {
          return;
        }
        context.set("activeValue", event.value);
      },

      registerItem({ context, event }) {
        const value = event.value;
        if (value == null) {
          return;
        }

        const depth = event.depth ?? 2;
        const items = context.get("items");
        const existingIndex = items.findIndex((item) => item.value === value);

        if (existingIndex >= 0) {
          const next = items.slice();
          next[existingIndex] = { value, depth };
          context.set("items", next);
          return;
        }

        context.set("items", [...items, { value, depth }]);
      },

      unregisterItem({ context, event }) {
        const value = event.value;
        if (value == null) {
          return;
        }

        const items = context.get("items");
        if (!items.some((item) => item.value === value)) {
          return;
        }

        context.set(
          "items",
          items.filter((item) => item.value !== value),
        );
      },
    },
  },
});
