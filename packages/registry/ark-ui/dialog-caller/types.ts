import type { Machine, Service } from "@zag-js/core";
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@zag-js/types";
import type { Component, Ref } from "vue";

export type DialogCallerResultShape = "data" | "cancelled" | "raw";

export type DialogCallerPhase = "open" | "closing";

export type DialogCallerRegistration = {
  id: string;
  component: Component;
  exitDuration: number;
  resultShape: DialogCallerResultShape;
  defaultRejectValue?: unknown;
};

export type DialogCallerCallEntry = {
  id: string;
  registrationId: string;
  component: Component;
  props: Record<string, unknown>;
  phase: DialogCallerPhase;
  exitDuration: number;
  resultShape: DialogCallerResultShape;
  defaultRejectValue?: unknown;
  settled: boolean;
};

export type DialogCallerCancelledResult<T> =
  | {
      cancelled: false;
      data: T;
      reason: null;
    }
  | {
      cancelled: true;
      data: null;
      reason?: string;
    };

export type DialogCallerDataResult<T> = {
  data: T | null;
};

export type DialogCallerOptions<T = unknown> = {
  id?: string;
  exitDuration?: number;
  resultShape?: DialogCallerResultShape;
  defaultRejectValue?: T;
};

export type DialogCallerHandle<Props, Result> = {
  call(props: Props): Promise<Result>;
  reject(): void;
};

export type DialogCallerCallContext<Result = unknown> = {
  props: Readonly<Record<string, unknown>>;
  phase: Readonly<Ref<DialogCallerPhase>>;
  resolve: (data: Result) => void;
  reject: (reason?: string) => void;
  id: string;
};

export type ElementIds = Partial<{
  host: string;
}>;

export type DialogCallerProps = DirectionProperty &
  CommonProperties & {
    ids?: ElementIds | undefined;
    /**
     * Default exit duration for calls when a registration does not set one.
     * @default 200
     */
    defaultExitDuration?: number | undefined;
  };

type PropsWithDefault = "defaultExitDuration";

export type DialogCallerSchema = {
  props: RequiredBy<DialogCallerProps, PropsWithDefault | "id">;
  state: "unmounted" | "mounted";
  context: {
    stack: DialogCallerCallEntry[];
  };
  refs: {
    pendingTimers: Map<string, ReturnType<typeof setTimeout>>;
    settleByCallId: Map<string, (value: unknown) => void>;
  };
  guard: never;
  effect: never;
  action: "clearStack" | "pushCall" | "settleCall" | "removeCall" | "rejectActiveCall";
  event: {
    type: "MOUNT_HOST" | "UNMOUNT_HOST" | "CALL" | "RESOLVE" | "REJECT" | "REJECT_ACTIVE" | "EXIT_COMPLETE";
    registration?: DialogCallerRegistration;
    props?: Record<string, unknown>;
    settle?: (value: unknown) => void;
    callId?: string;
    registrationId?: string;
    data?: unknown;
    reason?: string;
  };
};

export type DialogCallerService = Service<DialogCallerSchema>;
export type DialogCallerMachine = Machine<DialogCallerSchema>;

export type DialogCallerApi<T extends PropTypes = PropTypes> = {
  /**
   * Whether the host is mounted and ready to accept calls.
   */
  mounted: boolean;
  /**
   * Active dialog call stack (bottom → top).
   */
  stack: DialogCallerCallEntry[];
  /**
   * Mark the host as mounted (Teleport ready).
   */
  mountHost: () => void;
  /**
   * Mark the host as unmounted and clear the stack.
   */
  unmountHost: () => void;
  /**
   * Open a registered dialog and return a promise for its result.
   */
  call: <TProps extends Record<string, unknown>, TResult>(registration: DialogCallerRegistration, props: TProps) => Promise<TResult>;
  /**
   * Resolve an open call with data.
   */
  resolve: (callId: string, data: unknown) => void;
  /**
   * Reject an open call with an optional reason.
   */
  reject: (callId: string, reason?: string) => void;
  /**
   * Reject the active open call for a registration.
   */
  rejectActive: (registrationId: string) => void;
  getHostProps: () => T["element"];
  getEntryProps: (props: { callId: string; layerIndex: number }) => T["element"];
  getShellProps: (props: { phase: DialogCallerPhase }) => T["element"];
};
