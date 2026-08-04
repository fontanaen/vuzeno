import type { Service } from "@zag-js/core";
import type { NormalizeProps, PropTypes } from "@zag-js/types";
import { parts } from "./anatomy";
import * as dom from "./dom";
import type { DialogCallerApi, DialogCallerPhase, DialogCallerRegistration, DialogCallerSchema } from "./types";

export function connect<T extends PropTypes>(service: Service<DialogCallerSchema>, normalize: NormalizeProps<T>): DialogCallerApi<T> {
  const { state, send, prop, scope, context } = service;
  const mounted = state.matches("mounted");
  const stack = context.get("stack");

  function call<TProps extends Record<string, unknown>, TResult>(registration: DialogCallerRegistration, callProps: TProps): Promise<TResult> {
    if (!mounted) {
      throw new Error("[DialogCaller] DialogCaller.Host is not mounted. Add <DialogCaller.Host /> to your app root.");
    }

    return new Promise((settle) => {
      send({
        type: "CALL",
        registration,
        props: callProps,
        settle,
      });
    });
  }

  function resolve(callId: string, data: unknown) {
    send({ type: "RESOLVE", callId, data });
  }

  function reject(callId: string, reason?: string) {
    send({ type: "REJECT", callId, reason });
  }

  function rejectActive(registrationId: string) {
    send({ type: "REJECT_ACTIVE", registrationId });
  }

  return {
    mounted,
    stack,

    mountHost() {
      send({ type: "MOUNT_HOST" });
    },

    unmountHost() {
      send({ type: "UNMOUNT_HOST" });
    },

    call,
    resolve,
    reject,
    rejectActive,

    getHostProps() {
      return normalize.element({
        ...parts.host.attrs,
        dir: prop("dir"),
        id: dom.getHostId(scope),
        "data-mounted": mounted || undefined,
      });
    },

    getEntryProps(entryProps: { callId: string; layerIndex: number }) {
      return normalize.element({
        ...parts.entry.attrs,
        dir: prop("dir"),
        id: dom.getEntryId(scope, entryProps.callId),
        "data-call-id": entryProps.callId,
        style: {
          "--layer-index": String(entryProps.layerIndex),
        },
      });
    },

    getShellProps(shellProps: { phase: DialogCallerPhase }) {
      const open = shellProps.phase === "open";

      return normalize.element({
        ...parts.shell.attrs,
        dir: prop("dir"),
        "data-state": open ? "open" : "closed",
      });
    },
  };
}
