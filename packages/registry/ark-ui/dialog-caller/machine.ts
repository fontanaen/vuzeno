import { createMachine } from "@zag-js/core";
import type { DialogCallerCallEntry, DialogCallerResultShape, DialogCallerSchema } from "./types";

function createCallId() {
  return crypto.randomUUID();
}

function buildResolvePayload(resultShape: DialogCallerResultShape, data: unknown) {
  if (resultShape === "data") {
    return { data };
  }

  if (resultShape === "cancelled") {
    return {
      cancelled: false,
      data,
      reason: null,
    };
  }

  return data;
}

function buildRejectPayload(resultShape: DialogCallerResultShape, reason?: string, defaultRejectValue?: unknown) {
  if (resultShape === "data") {
    return { data: null };
  }

  if (resultShape === "cancelled") {
    return {
      cancelled: true,
      data: null,
      reason,
    };
  }

  return defaultRejectValue ?? null;
}

export const machine = createMachine<DialogCallerSchema>({
  props({ props }) {
    return {
      defaultExitDuration: 200,
      ...props,
    };
  },

  initialState() {
    return "unmounted";
  },

  context({ bindable }) {
    return {
      stack: bindable<DialogCallerCallEntry[]>(() => ({
        defaultValue: [],
        sync: true,
        hash: (stack) => stack.map((entry) => `${entry.id}:${entry.phase}`).join(","),
      })),
    };
  },

  refs() {
    return {
      pendingTimers: new Map(),
      settleByCallId: new Map(),
    };
  },

  states: {
    unmounted: {
      on: {
        MOUNT_HOST: {
          target: "mounted",
        },
      },
    },

    mounted: {
      on: {
        UNMOUNT_HOST: {
          target: "unmounted",
          actions: ["clearStack"],
        },
        CALL: {
          actions: ["pushCall"],
        },
        RESOLVE: {
          actions: ["settleCall"],
        },
        REJECT: {
          actions: ["settleCall"],
        },
        REJECT_ACTIVE: {
          actions: ["rejectActiveCall"],
        },
        EXIT_COMPLETE: {
          actions: ["removeCall"],
        },
      },
    },
  },

  implementations: {
    actions: {
      clearStack({ context, refs }) {
        for (const timer of refs.get("pendingTimers").values()) {
          clearTimeout(timer);
        }

        refs.get("pendingTimers").clear();
        refs.get("settleByCallId").clear();
        context.set("stack", []);
      },

      pushCall({ context, refs, event }) {
        if (!event.registration || !event.settle || !event.props) {
          return;
        }

        const callId = createCallId();
        const entry: DialogCallerCallEntry = {
          id: callId,
          registrationId: event.registration.id,
          component: event.registration.component,
          props: event.props,
          phase: "open",
          exitDuration: event.registration.exitDuration,
          resultShape: event.registration.resultShape,
          defaultRejectValue: event.registration.defaultRejectValue,
          settled: false,
        };

        refs.get("settleByCallId").set(callId, event.settle);
        context.set("stack", (previous) => [...previous, entry]);
      },

      settleCall({ context, refs, event, send }) {
        const callId = event.callId;
        if (!callId) {
          return;
        }

        const stack = context.get("stack");
        const entry = stack.find((item) => item.id === callId);

        if (!entry || entry.settled) {
          return;
        }

        const settle = refs.get("settleByCallId").get(callId);
        if (!settle) {
          return;
        }

        const payload = event.type === "RESOLVE" ? buildResolvePayload(entry.resultShape, event.data) : buildRejectPayload(entry.resultShape, event.reason, entry.defaultRejectValue);

        refs.get("settleByCallId").delete(callId);
        settle(payload);

        context.set("stack", (previous) =>
          previous.map((item) => {
            if (item.id !== callId) {
              return item;
            }

            return {
              ...item,
              settled: true,
              phase: "closing",
            };
          }),
        );

        const timer = setTimeout(() => {
          send({ type: "EXIT_COMPLETE", callId });
        }, entry.exitDuration);

        refs.get("pendingTimers").set(callId, timer);
      },

      removeCall({ context, refs, event }) {
        const callId = event.callId;
        if (!callId) {
          return;
        }

        const timer = refs.get("pendingTimers").get(callId);
        if (timer) {
          clearTimeout(timer);
          refs.get("pendingTimers").delete(callId);
        }

        refs.get("settleByCallId").delete(callId);
        context.set("stack", (previous) => previous.filter((entry) => entry.id !== callId));
      },

      rejectActiveCall({ context, send, event }) {
        const registrationId = event.registrationId;
        if (!registrationId) {
          return;
        }

        const entry = context.get("stack").find((item) => item.registrationId === registrationId && item.phase === "open" && !item.settled);

        if (!entry) {
          return;
        }

        send({ type: "REJECT", callId: entry.id });
      },
    },
  },
});
