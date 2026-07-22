import type { Component } from "vue";
import { callDialogCaller, registerDialogCaller, rejectActiveDialogCallerCall } from "./store";
import type { DialogCallerCancelledResult, DialogCallerDataResult, DialogCallerHandle, DialogCallerOptions } from "./types";

type InferDialogCallerResult<TResult, TShape extends DialogCallerOptions<TResult>["resultShape"]> = TShape extends "data"
  ? DialogCallerDataResult<TResult>
  : TShape extends "raw"
    ? TResult
    : DialogCallerCancelledResult<TResult>;

export function useDialogCaller<TProps extends Record<string, unknown>, TResult = unknown, const TShape extends DialogCallerOptions<TResult>["resultShape"] = "cancelled">(
  component: Component,
  options: DialogCallerOptions<TResult> & { resultShape?: TShape } = {},
): DialogCallerHandle<TProps, InferDialogCallerResult<TResult, TShape>> {
  const registration = registerDialogCaller(component, options);

  return {
    call(props: TProps) {
      return callDialogCaller<TProps, InferDialogCallerResult<TResult, TShape>>(registration, props);
    },
    reject() {
      rejectActiveDialogCallerCall(registration.id);
    },
  };
}

export { injectDialogCallerContext as useDialogCallerContext } from "./context";
