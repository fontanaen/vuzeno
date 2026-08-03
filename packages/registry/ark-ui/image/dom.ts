import type { Scope } from "@zag-js/core";

export function getRootId(scope: Scope) {
  return scope.ids?.root ?? `image:${scope.id}:root`;
}

export function getSourceId(scope: Scope) {
  return scope.ids?.source ?? `image:${scope.id}:source`;
}

export function getLoadingId(scope: Scope) {
  return scope.ids?.loading ?? `image:${scope.id}:loading`;
}

export function getErrorId(scope: Scope) {
  return scope.ids?.error ?? `image:${scope.id}:error`;
}

export function getFallbackId(scope: Scope) {
  return scope.ids?.fallback ?? `image:${scope.id}:fallback`;
}

export function getRootEl(scope: Scope) {
  return scope.getById(getRootId(scope));
}

export function getSourceEl(scope: Scope) {
  return scope.getById<HTMLImageElement>(getSourceId(scope));
}

export function hasLoaded(image: HTMLImageElement) {
  return image.complete && image.naturalWidth !== 0 && image.naturalHeight !== 0;
}
