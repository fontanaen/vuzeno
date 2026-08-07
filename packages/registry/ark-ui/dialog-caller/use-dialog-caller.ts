import { normalizeProps } from "@zag-js/vue";
import type { Component } from "vue";
import { connect } from "./connect";
import { registerDialogCaller } from "./registry";
import { requireDialogCallerHostService } from "./service";
import type { DialogCallerCancelledResult, DialogCallerDataResult, DialogCallerHandle, DialogCallerOptions } from "./types";

type InferDialogCallerResult<TResult, TShape extends DialogCallerOptions<TResult>["resultShape"]> = TShape extends "data"
  ? DialogCallerDataResult<TResult>
  : TShape extends "raw"
    ? TResult
    : DialogCallerCancelledResult<TResult>;

function getHostApi() {
  return connect(requireDialogCallerHostService(), normalizeProps);
}

export function useDialogCaller<TProps extends Record<string, unknown>, TResult = unknown, const TShape extends DialogCallerOptions<TResult>["resultShape"] = "cancelled">(
  component: Component,
  options: DialogCallerOptions<TResult> & { resultShape?: TShape } = {},
): DialogCallerHandle<TProps, InferDialogCallerResult<TResult, TShape>> {
  const registration = registerDialogCaller(component, options);

  return {
    call(props: TProps) {
      return getHostApi().call<TProps, InferDialogCallerResult<TResult, TShape>>(registration, props);
    },
    reject() {
      getHostApi().rejectActive(registration.id);
    },
  };
}

export { injectDialogCallerContext as useDialogCallerContext } from "./context";
