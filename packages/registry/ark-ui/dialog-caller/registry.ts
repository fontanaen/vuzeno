import type { Component } from "vue";
import type { DialogCallerOptions, DialogCallerRegistration } from "./types";

const DEFAULT_EXIT_DURATION = 200;

const registry = new Map<string, DialogCallerRegistration>();

let callerIdCounter = 0;

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
