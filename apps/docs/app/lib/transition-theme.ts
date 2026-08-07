export function transitionTheme(fn: () => void) {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      fn();
    });
    return;
  }

  fn();
}
