import type { Scope } from "@zag-js/core";

export function getRootId(scope: Scope) {
  return scope.ids?.root ?? `toc:${scope.id}:root`;
}

export function getTitleId(scope: Scope) {
  return scope.ids?.title ?? `toc:${scope.id}:title`;
}

export function getListId(scope: Scope) {
  return scope.ids?.list ?? `toc:${scope.id}:list`;
}

export function getIndicatorId(scope: Scope) {
  return scope.ids?.indicator ?? `toc:${scope.id}:indicator`;
}

export function getItemId(scope: Scope, value: string) {
  return scope.ids?.item?.(value) ?? `toc:${scope.id}:item:${value}`;
}

export function getLinkId(scope: Scope, value: string) {
  return scope.ids?.link?.(value) ?? `toc:${scope.id}:link:${value}`;
}

export function getRootEl(scope: Scope) {
  return scope.getById(getRootId(scope));
}

export function getListEl(scope: Scope) {
  return scope.getById(getListId(scope));
}

export function getItemEl(scope: Scope, value: string) {
  return scope.getById(getItemId(scope, value));
}
