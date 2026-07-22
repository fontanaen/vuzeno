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
  phase: Ref<DialogCallerPhase>;
  exitDuration: number;
  resultShape: DialogCallerResultShape;
  defaultRejectValue?: unknown;
  settle: (value: unknown) => void;
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
