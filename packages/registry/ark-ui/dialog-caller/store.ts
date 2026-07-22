import { type Component, ref, shallowRef } from "vue";
import type { DialogCallerCallEntry, DialogCallerOptions, DialogCallerRegistration, DialogCallerResultShape } from "./types";

const DEFAULT_EXIT_DURATION = 200;

export const dialogCallerStack = shallowRef<DialogCallerCallEntry[]>([]);
export const dialogCallerHostMounted = ref(false);

const registry = new Map<string, DialogCallerRegistration>();
const pendingTimers = new Map<string, ReturnType<typeof setTimeout>>();

let callerIdCounter = 0;

function createCallId() {
  return crypto.randomUUID();
}

export function getDialogCallerComponentId(component: Component, explicitId?: string) {
  if (explicitId) {
    return explicitId;
  }

  if (typeof component === "object" && component) {
    const componentRecord = component as { __name?: string; name?: string };
    const name = componentRecord.__name ?? componentRecord.name;

    if (name && name !== "AsyncComponentWrapper") {
      return name;
    }
  }

  callerIdCounter += 1;
  return `dialog-caller-${callerIdCounter}`;
}

function buildResolvePayload<T>(resultShape: DialogCallerResultShape, data: T) {
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

function removeCallEntry(callId: string) {
  const timer = pendingTimers.get(callId);

  if (timer) {
    clearTimeout(timer);
    pendingTimers.delete(callId);
  }

  dialogCallerStack.value = dialogCallerStack.value.filter((entry) => entry.id !== callId);
}

function settleCallEntry(entry: DialogCallerCallEntry, payload: unknown) {
  if (entry.settled) {
    return;
  }

  entry.settled = true;
  entry.phase.value = "closing";
  entry.settle(payload);

  const timer = setTimeout(() => {
    removeCallEntry(entry.id);
  }, entry.exitDuration);

  pendingTimers.set(entry.id, timer);
}

export function registerDialogCaller(component: Component, options: DialogCallerOptions = {}) {
  const id = getDialogCallerComponentId(component, options.id);
  const existing = registry.get(id);

  if (existing) {
    return existing;
  }

  const registration: DialogCallerRegistration = {
    id,
    component,
    exitDuration: options.exitDuration ?? DEFAULT_EXIT_DURATION,
    resultShape: options.resultShape ?? "cancelled",
    defaultRejectValue: options.defaultRejectValue,
  };

  registry.set(id, registration);
  return registration;
}

export function getDialogCallerRegistration(id: string) {
  return registry.get(id);
}

export function setDialogCallerHostMounted(mounted: boolean) {
  dialogCallerHostMounted.value = mounted;

  if (!mounted) {
    for (const timer of pendingTimers.values()) {
      clearTimeout(timer);
    }

    pendingTimers.clear();
    dialogCallerStack.value = [];
  }
}

export function callDialogCaller<TProps extends Record<string, unknown>, TResult>(registration: DialogCallerRegistration, props: TProps): Promise<TResult> {
  if (!dialogCallerHostMounted.value) {
    throw new Error("[DialogCaller] DialogCaller.Host is not mounted. Add <DialogCaller.Host /> to your app root.");
  }

  return new Promise((settle) => {
    const entry: DialogCallerCallEntry = {
      id: createCallId(),
      registrationId: registration.id,
      component: registration.component,
      props,
      phase: ref("open"),
      exitDuration: registration.exitDuration,
      resultShape: registration.resultShape,
      defaultRejectValue: registration.defaultRejectValue,
      settle,
      settled: false,
    };

    dialogCallerStack.value = [...dialogCallerStack.value, entry];
  });
}

export function resolveDialogCallerCall(callId: string, data: unknown) {
  const entry = dialogCallerStack.value.find((item) => item.id === callId);

  if (!entry) {
    return;
  }

  settleCallEntry(entry, buildResolvePayload(entry.resultShape, data));
}

export function rejectDialogCallerCall(callId: string, reason?: string) {
  const entry = dialogCallerStack.value.find((item) => item.id === callId);

  if (!entry) {
    return;
  }

  settleCallEntry(entry, buildRejectPayload(entry.resultShape, reason, entry.defaultRejectValue));
}

export function rejectActiveDialogCallerCall(registrationId: string) {
  const entry = dialogCallerStack.value.find((item) => item.registrationId === registrationId && item.phase.value === "open" && !item.settled);

  if (!entry) {
    return;
  }

  rejectDialogCallerCall(entry.id);
}
