import { ariaHidden } from "@zag-js/aria-hidden";
import { createMachine } from "@zag-js/core";
import { trackDismissableElement } from "@zag-js/dismissable";
import { getInitialFocus, raf } from "@zag-js/dom-query";
import { trapFocus } from "@zag-js/focus-trap";
import { preventBodyScroll } from "@zag-js/remove-scroll";
import * as dom from "./dom";
import type { ActionSheetSchema } from "./types";

export const machine = createMachine<ActionSheetSchema>({
  props({ props }) {
    const closeOnInteractOutside = props.closeOnInteractOutside ?? props.closeOnClickOutside ?? true;

    return {
      showOverlay: true,
      trapFocus: true,
      preventScroll: true,
      closeOnEscape: true,
      ...props,
      closeOnInteractOutside,
    };
  },

  initialState({ prop }) {
    const open = prop("open") || prop("defaultOpen");
    return open ? "open" : "closed";
  },

  refs() {
    return {
      resolveShow: null,
    };
  },

  watch({ track, action, prop }) {
    track([() => prop("open")], () => {
      action(["toggleVisibility"]);
    });
  },

  states: {
    open: {
      entry: ["setInitialFocus"],
      effects: ["trackDismissableElement", "trapFocus", "preventScroll", "hideContentBelow"],
      on: {
        "CONTROLLED.CLOSE": {
          target: "closed",
        },
        CLOSE: [
          {
            guard: "isOpenControlled",
            actions: ["maybeInvokeOnDismiss", "resolveShowWithDismiss", "invokeOnClose"],
          },
          {
            target: "closed",
            actions: ["maybeInvokeOnDismiss", "resolveShowWithDismiss", "invokeOnClose"],
          },
        ],
        SELECT_OPTION: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnSelectOption", "resolveShowWithOption", "invokeOnClose"],
          },
          {
            target: "closed",
            actions: ["invokeOnSelectOption", "resolveShowWithOption", "invokeOnClose"],
          },
        ],
        CANCEL: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnCancel", "resolveShowWithCancel", "invokeOnClose"],
          },
          {
            target: "closed",
            actions: ["invokeOnCancel", "resolveShowWithCancel", "invokeOnClose"],
          },
        ],
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["resolveShowWithDismiss", "invokeOnClose"],
          },
          {
            target: "closed",
            actions: ["resolveShowWithDismiss", "invokeOnClose"],
          },
        ],
      },
    },

    closed: {
      on: {
        "CONTROLLED.OPEN": {
          target: "open",
        },
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"],
          },
          {
            target: "open",
            actions: ["invokeOnOpen"],
          },
        ],
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"],
          },
          {
            target: "open",
            actions: ["invokeOnOpen"],
          },
        ],
      },
    },
  },

  implementations: {
    guards: {
      isOpenControlled: ({ prop }) => prop("open") != null,
    },

    effects: {
      trackDismissableElement({ scope, send, prop }) {
        return trackDismissableElement(() => dom.getContentEl(scope), {
          type: "dialog",
          defer: true,
          pointerBlocking: true,
          layerStyleTargets: [() => dom.getBackdropEl(scope), () => dom.getPositionerEl(scope)],
          exclude: [dom.getTriggerEl(scope)].filter(Boolean) as HTMLElement[],
          onInteractOutside(event) {
            prop("onInteractOutside")?.(event);
            if (!prop("closeOnInteractOutside")) {
              event.preventDefault();
            }
          },
          onFocusOutside: prop("onFocusOutside"),
          onPointerDownOutside: prop("onPointerDownOutside"),
          onRequestDismiss: prop("onRequestDismiss"),
          onEscapeKeyDown(event) {
            prop("onEscapeKeyDown")?.(event);
            if (!prop("closeOnEscape")) {
              event.preventDefault();
            }
          },
          onDismiss() {
            send({ type: "CLOSE", src: "interact-outside" });
          },
        });
      },

      preventScroll({ scope, prop }) {
        if (!prop("preventScroll")) {
          return;
        }
        return preventBodyScroll(scope.getDoc());
      },

      trapFocus({ scope, prop }) {
        if (!prop("trapFocus")) {
          return;
        }

        return trapFocus(() => dom.getContentEl(scope), {
          preventScroll: true,
          returnFocusOnDeactivate: true,
          initialFocus: () =>
            getInitialFocus({
              root: dom.getContentEl(scope),
            }),
          setReturnFocus: (element) => dom.getTriggerEl(scope) ?? element,
          getShadowRoot: true,
        });
      },

      hideContentBelow({ scope }) {
        return ariaHidden(() => [dom.getContentEl(scope)], { defer: true });
      },
    },

    actions: {
      setInitialFocus({ prop, scope }) {
        if (prop("trapFocus")) {
          return;
        }

        raf(() => {
          const element = getInitialFocus({
            root: dom.getContentEl(scope),
          });
          element?.focus({ preventScroll: true });
        });
      },

      invokeOnOpen({ prop }) {
        prop("onOpenChange")?.({ open: true });
      },

      invokeOnClose({ prop }) {
        prop("onOpenChange")?.({ open: false });
      },

      invokeOnSelectOption({ prop, event }) {
        prop("onSelectOption")?.({ value: event.value });
      },

      invokeOnCancel({ prop }) {
        prop("onCancel")?.();
      },

      maybeInvokeOnDismiss({ prop, event }) {
        if (event.src !== "interact-outside") {
          return;
        }
        prop("onDismiss")?.();
      },

      resolveShowWithOption({ refs, event }) {
        const resolve = refs.get("resolveShow");
        if (!resolve) {
          return;
        }
        refs.set("resolveShow", null);
        resolve({
          cancelled: false,
          cancelledReason: null,
          selectedOption: event.value,
        });
      },

      resolveShowWithCancel({ refs }) {
        const resolve = refs.get("resolveShow");
        if (!resolve) {
          return;
        }
        refs.set("resolveShow", null);
        resolve({
          cancelled: true,
          cancelledReason: "cancel",
          selectedOption: null,
        });
      },

      resolveShowWithDismiss({ refs }) {
        const resolve = refs.get("resolveShow");
        if (!resolve) {
          return;
        }
        refs.set("resolveShow", null);
        resolve({
          cancelled: true,
          cancelledReason: "close",
          selectedOption: null,
        });
      },

      toggleVisibility({ prop, send, event }) {
        send({
          type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
          previousEvent: event,
        });
      },
    },
  },
});
