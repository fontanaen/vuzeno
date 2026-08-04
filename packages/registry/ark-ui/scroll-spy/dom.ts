import type { Scope } from "@zag-js/core";

export function getRootId(scope: Scope) {
  return scope.ids?.root ?? `scroll-spy:${scope.id}:root`;
}

export function getViewportId(scope: Scope) {
  return scope.ids?.viewport ?? `scroll-spy:${scope.id}:viewport`;
}

export function getRootEl(scope: Scope) {
  return scope.getById(getRootId(scope));
}

export function getViewportEl(scope: Scope) {
  return scope.getById(getViewportId(scope));
}

export function resolveThreshold(offset: number, rootElement: HTMLElement | null, orientation: "vertical" | "horizontal", win: Window) {
  if (offset > 0 && offset <= 1) {
    const size = orientation === "horizontal" ? (rootElement?.clientWidth ?? win.innerWidth) : (rootElement?.clientHeight ?? win.innerHeight);
    return size * offset;
  }

  return offset;
}

export function resolveActiveValue(items: Map<string, HTMLElement>, rootElement: HTMLElement | null, offset: number, orientation: "vertical" | "horizontal", win: Window) {
  if (items.size === 0) {
    return "";
  }

  const edge = orientation === "horizontal" ? "left" : "top";
  const sorted = [...items.entries()].sort((left, right) => {
    return left[1].getBoundingClientRect()[edge] - right[1].getBoundingClientRect()[edge];
  });

  const rootEdge = rootElement?.getBoundingClientRect()[edge] ?? 0;
  const threshold = rootEdge + resolveThreshold(offset, rootElement, orientation, win);
  let next = sorted[0]?.[0] ?? "";

  for (const [value, element] of sorted) {
    if (element.getBoundingClientRect()[edge] <= threshold) {
      next = value;
      continue;
    }

    break;
  }

  return next;
}
