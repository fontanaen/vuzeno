export const ITEM_HEIGHT = 44;
export const GAP_HEIGHT = 10;
export const STACK_OFFSET = 5;
export const BOTTOM_OFFSET = "1.5rem";

export type TreeItem = {
  index: number;
  level: number;
  element: HTMLElement;
  children?: TreeItem[];
};

export type DeepestSubMenuItems = {
  /** Maximum `level` among all tree nodes. */
  startIndex: number;
  /** Number of menu rows at that deepest level. */
  endIndex: number;
};

function* walkTreeItems(items: TreeItem[]): Generator<TreeItem> {
  for (const item of items) {
    yield item;
    if (item.children?.length) {
      yield* walkTreeItems(item.children);
    }
  }
}

export function deepestSubMenuItemsFromTree(root: TreeItem[]): DeepestSubMenuItems | undefined {
  const all = [...walkTreeItems(root)];
  if (all.length === 0) {
    return undefined;
  }
  const level = Math.max(...all.map((t) => t.level));

  if (level === 0) {
    return undefined;
  }
  const items = all.filter((t) => t.level === level);
  return { startIndex: items[0]!.index, endIndex: items[items.length - 1]!.index };
}

function assignFlatIndices(items: TreeItem[]) {
  let counter = 0;

  function walk(nodes: TreeItem[]) {
    for (const node of nodes) {
      if (node.children?.length) {
        walk(node.children);
      }
      node.index = counter++;
    }
  }

  walk(items);
}

export function buildTree(container: Element, level: number = 0): TreeItem[] {
  const items: TreeItem[] = [];

  function walk(parent: Element) {
    for (const child of Array.from(parent.children)) {
      const slot = child.getAttribute("data-slot");

      if (slot === "menu-stack-item") {
        items.push({ index: 0, level, element: child as HTMLElement });
      } else if (slot === "menu-stack-sub") {
        const triggerItem = child.querySelector(":scope > [data-slot='menu-stack-item']");
        const subContent = child.querySelector(":scope > [data-slot='menu-stack-sub-content']");

        if (triggerItem) {
          const treeItem: TreeItem = {
            index: 0,
            level,
            element: triggerItem as HTMLElement,
          };
          if (subContent) {
            treeItem.children = buildTree(subContent, level + 1);
          }
          items.push(treeItem);
        }
      } else if (slot !== "menu-stack-sub-content") {
        walk(child);
      }
    }
  }

  walk(container);
  items.reverse();

  if (level === 0) {
    assignFlatIndices(items);
  }

  return items;
}

export function setTreeItemsDataAttributes(items: TreeItem[]) {
  for (const item of items) {
    item.element.setAttribute("data-index", String(item.index));
    item.element.setAttribute("data-level", String(item.level));
    item.element.style.zIndex = String(item.level);
    if (item.children) {
      setTreeItemsDataAttributes(item.children);
    }
  }
}

export function setMenuStackItemsDataAttributes(el: HTMLElement, level = 0) {
  const items = Array.from(el.querySelectorAll("[data-slot='menu-stack-item']")).reverse();
  for (const [index, item] of items.entries()) {
    item.setAttribute("data-index", String(index));
    item.setAttribute("data-level", String(level));
  }
}

export function getItemStyle(item: { index: number }, deepestSubMenuItems?: { startIndex: number; endIndex: number }) {
  const calculate = (index: number) => -(index * ITEM_HEIGHT + index * GAP_HEIGHT);

  if (deepestSubMenuItems === undefined) {
    return {
      position: "absolute",
      bottom: BOTTOM_OFFSET,
      width: "calc(100% - 1.5rem)",
      transform: `translateY(${calculate(item.index)}px)`,
      left: 0,
      right: 0,
      margin: "0 auto",
    };
  }

  if (item.index < deepestSubMenuItems.startIndex) {
    return {
      position: "absolute",
      bottom: BOTTOM_OFFSET,
      width: "calc(100% - 1.5rem)",
      opacity: 0,
      transform: `translateY(${calculate(-1)}px) scale(0.95)`,
      left: 0,
      right: 0,
      margin: "0 auto",
    };
  }

  if (item.index > deepestSubMenuItems.endIndex) {
    const diff = Math.min(4, item.index - deepestSubMenuItems.endIndex);
    return {
      position: "absolute",
      bottom: BOTTOM_OFFSET,
      width: "calc(100% - 1.5rem)",
      transform:
        diff > 1
          ? `translateY(${calculate(deepestSubMenuItems.endIndex - deepestSubMenuItems.startIndex + 1) - (diff - 1) * STACK_OFFSET}px) scale(${1 - 0.05 * (diff - 1)})`
          : `translateY(${calculate(deepestSubMenuItems.endIndex - deepestSubMenuItems.startIndex + 1)}px)`,
      left: 0,
      right: 0,
      margin: "0 auto",
    };
  }

  if (item.index >= deepestSubMenuItems.startIndex && item.index <= deepestSubMenuItems.endIndex) {
    const newListCount = deepestSubMenuItems.endIndex + 1 - deepestSubMenuItems.startIndex;
    const triggerIndexDiff = newListCount - deepestSubMenuItems.startIndex;

    const itemNewIndex = deepestSubMenuItems.endIndex - item.index - triggerIndexDiff;

    const calculate = (index: number) => index * ITEM_HEIGHT + index * GAP_HEIGHT;

    return {
      position: "absolute",
      bottom: `calc(${BOTTOM_OFFSET} + ${calculate(deepestSubMenuItems.startIndex)}px)`,
      width: "calc(100% - 1.5rem)",
      transform: `translateY(${calculate(itemNewIndex + 1)}px)`,
      left: 0,
      right: 0,
      margin: "0 auto",
    };
  }

  return {
    position: "absolute",
    bottom: BOTTOM_OFFSET,
    width: "calc(100% - 1.5rem)",
    transform: `translateY(${calculate(item.index)}px)`,
    left: 0,
    right: 0,
    margin: "0 auto",
  };
}
