import type { Scope } from "@zag-js/core";

export function getTriggerId(scope: Scope) {
  return scope.ids?.trigger ?? `action-sheet:${scope.id}:trigger`;
}

export function getBackdropId(scope: Scope) {
  return scope.ids?.backdrop ?? `action-sheet:${scope.id}:backdrop`;
}

export function getPositionerId(scope: Scope) {
  return scope.ids?.positioner ?? `action-sheet:${scope.id}:positioner`;
}

export function getContentId(scope: Scope) {
  return scope.ids?.content ?? `action-sheet:${scope.id}:content`;
}

export function getTriggerEl(scope: Scope) {
  return scope.getById(getTriggerId(scope));
}

export function getBackdropEl(scope: Scope) {
  return scope.getById(getBackdropId(scope));
}

export function getPositionerEl(scope: Scope) {
  return scope.getById(getPositionerId(scope));
}

export function getContentEl(scope: Scope) {
  return scope.getById(getContentId(scope));
}
