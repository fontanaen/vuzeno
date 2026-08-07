import { createMachine } from "@zag-js/core";
import { observeAttributes, observeChildren, raf } from "@zag-js/dom-query";
import * as dom from "./dom";
import type { ImageSchema } from "./types";

export const machine = createMachine<ImageSchema>({
  props({ props }) {
    return {
      defaultState: "loading",
      ...props,
    };
  },

  initialState({ prop }) {
    return prop("state") ?? prop("defaultState");
  },

  effects: ["trackSrcChange", "trackImageRemoval"],

  watch({ track, action, prop }) {
    track([() => prop("state")], () => {
      action(["syncControlledState"]);
    });
  },

  on: {
    SRC_CHANGE: [
      {
        guard: "isStateControlled",
      },
      {
        target: "loading",
        actions: ["invokeOnLoading"],
      },
    ],
    IMG_UNMOUNT: [
      {
        guard: "isStateControlled",
      },
      {
        target: "error",
        actions: ["invokeOnError"],
      },
    ],
    SET_STATE: [
      {
        guard: "isStateControlled",
        actions: ["invokeOnStateFromEvent"],
      },
      {
        guard: "isEventLoading",
        target: "loading",
        actions: ["invokeOnStateFromEvent"],
      },
      {
        guard: "isEventError",
        target: "error",
        actions: ["invokeOnStateFromEvent"],
      },
      {
        guard: "isEventSuccess",
        target: "success",
        actions: ["invokeOnStateFromEvent"],
      },
    ],
  },

  states: {
    loading: {
      entry: ["checkImageStatus"],
      on: {
        "CONTROLLED.LOADING": {},
        "CONTROLLED.SUCCESS": {
          target: "success",
        },
        "CONTROLLED.ERROR": {
          target: "error",
        },
        IMG_LOADED: [
          {
            guard: "isStateControlled",
          },
          {
            target: "success",
            actions: ["invokeOnSuccess"],
          },
        ],
        IMG_ERROR: [
          {
            guard: "isStateControlled",
          },
          {
            target: "error",
            actions: ["invokeOnError"],
          },
        ],
      },
    },

    error: {
      on: {
        "CONTROLLED.LOADING": {
          target: "loading",
        },
        "CONTROLLED.SUCCESS": {
          target: "success",
        },
        "CONTROLLED.ERROR": {},
        IMG_LOADED: [
          {
            guard: "isStateControlled",
          },
          {
            target: "success",
            actions: ["invokeOnSuccess"],
          },
        ],
      },
    },

    success: {
      on: {
        "CONTROLLED.LOADING": {
          target: "loading",
        },
        "CONTROLLED.SUCCESS": {},
        "CONTROLLED.ERROR": {
          target: "error",
        },
        IMG_ERROR: [
          {
            guard: "isStateControlled",
          },
          {
            target: "error",
            actions: ["invokeOnError"],
          },
        ],
      },
    },
  },

  implementations: {
    guards: {
      isStateControlled: ({ prop }) => prop("state") != null,
      isEventLoading: ({ event }) => event.state === "loading",
      isEventError: ({ event }) => event.state === "error",
      isEventSuccess: ({ event }) => event.state === "success",
    },

    effects: {
      trackSrcChange({ send, scope }) {
        return observeAttributes(() => dom.getSourceEl(scope), {
          attributes: ["src", "srcset"],
          defer: true,
          callback() {
            send({ type: "SRC_CHANGE" });
          },
        });
      },

      trackImageRemoval({ send, scope }) {
        return observeChildren(() => dom.getRootEl(scope), {
          defer: true,
          callback(records) {
            const removedNodes = Array.from(records[0]?.removedNodes ?? []) as HTMLElement[];
            const removed = removedNodes.find((node) => node.nodeType === Node.ELEMENT_NODE && node.matches("[data-scope=image][data-part=source]"));
            if (removed) {
              send({ type: "IMG_UNMOUNT" });
            }
          },
        });
      },
    },

    actions: {
      checkImageStatus({ send, scope }) {
        raf(() => {
          const imageEl = dom.getSourceEl(scope);
          if (!imageEl?.complete) {
            return;
          }
          const type = dom.hasLoaded(imageEl) ? "IMG_LOADED" : "IMG_ERROR";
          send({ type, src: "ssr" });
        });
      },

      invokeOnLoading({ prop }) {
        prop("onStateChange")?.({ state: "loading" });
      },

      invokeOnSuccess({ prop }) {
        prop("onStateChange")?.({ state: "success" });
      },

      invokeOnError({ prop }) {
        prop("onStateChange")?.({ state: "error" });
      },

      invokeOnStateFromEvent({ prop, event }) {
        if (!event.state) {
          return;
        }
        prop("onStateChange")?.({ state: event.state });
      },

      syncControlledState({ prop, send, event }) {
        const state = prop("state");
        if (state == null) {
          return;
        }

        const typeByState = {
          loading: "CONTROLLED.LOADING",
          error: "CONTROLLED.ERROR",
          success: "CONTROLLED.SUCCESS",
        } as const;

        send({
          type: typeByState[state],
          previousEvent: event,
        });
      },
    },
  },
});
