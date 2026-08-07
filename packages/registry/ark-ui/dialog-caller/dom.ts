import type { Scope } from "@zag-js/core";

export function getHostId(scope: Scope) {
  return scope.ids?.host ?? `dialog-caller:${scope.id}:host`;
}

export function getEntryId(scope: Scope, callId: string) {
  return `dialog-caller:${scope.id}:entry:${callId}`;
}

export function getShellId(scope: Scope, callId: string) {
  return `dialog-caller:${scope.id}:shell:${callId}`;
}

export function getHostEl(scope: Scope) {
  return scope.getById(getHostId(scope));
}
