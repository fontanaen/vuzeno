---
title: List
description: A composable list of items with insert/remove animation and optional drag-and-drop sorting.
tag: new
---

::component-preview
---
name: ListDemo
---
::

## Features

- **Composable items** — Built on top of the shadcn-vue `Item` primitives (`ListItemMedia`, `ListItemContent`, `ListItemTitle`, `ListItemDescription`, `ListItemActions`)
- **Insert/remove animation** — Smooth enter/leave transitions powered by Vue's `<TransitionGroup>`, with sane defaults
- **Configurable transitions** — Override classes, named transitions, or duration; opt out entirely with `:animated="false"`
- **Drag-and-drop sorting** — Opt-in with `sortable`; uses `@dnd-kit/vue` under the hood and emits a `reorder` event
- **Drag handle** — Optional `ListItemDragHandle` restricts drag initiation to a specific element

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/list.json
exec: true
---
::

## Dependencies

The List component uses [`@dnd-kit/vue`](https://dndkit.com/vue) for drag-and-drop sorting:

::installation-tabs
---
command: "@dnd-kit/vue"
exec: false
---
::

## Anatomy

```vue
<template>
  <List variant="outline" sortable @reorder="onReorder">
    <ListItem v-for="(item, index) in items" :id="item.id" :key="item.id" :index="index">
      <ListItemDragHandle />

      <ListItemMedia variant="icon">
        <!-- icon -->
      </ListItemMedia>

      <ListItemContent>
        <ListItemTitle>{{ item.title }}</ListItemTitle>
        <ListItemDescription>{{ item.description }}</ListItemDescription>
      </ListItemContent>

      <ListItemActions>
        <!-- buttons -->
      </ListItemActions>
    </ListItem>
  </List>
</template>
```

## Examples

### Sortable

Set `sortable` on `List` and listen to `@reorder` to apply the new order to your data. Each `ListItem` must receive a unique `id` and its current `index`. Add `ListItemDragHandle` to restrict drag initiation to a handle.

::component-preview
---
name: ListSortableDemo
---
::

```vue showLineNumbers
<script setup lang="ts">
import {
  List,
  ListItem,
  ListItemContent,
  ListItemDescription,
  ListItemDragHandle,
  type ListReorderEvent,
  ListItemTitle,
} from "@vuzeno/registry/ui/list";
import { ref } from "vue";

const tasks = ref([
  { id: "task-1", title: "Design API", description: "Define props and slots" },
  { id: "task-2", title: "Wire sortable", description: "Integrate dnd-kit" },
  { id: "task-3", title: "Add animations", description: "Insert/remove transitions" },
]);

function onReorder(event: ListReorderEvent) {
  const next = [...tasks.value];
  const [removed] = next.splice(event.from, 1);
  if (!removed) return;
  next.splice(event.to, 0, removed);
  tasks.value = next;
}
</script>

<template>
  <List variant="outline" sortable class="gap-2" @reorder="onReorder">
    <ListItem v-for="(task, index) in tasks" :id="task.id" :key="task.id" :index="index">
      <ListItemDragHandle />
      <ListItemContent>
        <ListItemTitle>{{ task.title }}</ListItemTitle>
        <ListItemDescription>{{ task.description }}</ListItemDescription>
      </ListItemContent>
    </ListItem>
  </List>
</template>
```

### Custom transitions

Insert/remove animation is fully configurable. Override the per-stage classes via the `transition` prop, or pass a Vue `name` to use a CSS-class-based transition. Set `:animated="false"` to disable animation entirely.

::component-preview
---
name: ListAnimatedDemo
---
::

```vue showLineNumbers
<template>
  <List
    variant="outline"
    :transition="{
      enterFromClass: 'opacity-0 scale-95',
      enterActiveClass: 'transition-[opacity,transform] duration-300 ease-out',
      leaveActiveClass: 'transition-[opacity,transform] duration-200 ease-in absolute w-full',
      leaveToClass: 'opacity-0 scale-95',
      moveClass: 'transition-transform duration-300 ease-out',
    }"
  >
    <!-- items -->
  </List>
</template>
```

## API Reference

### List

| Prop          | Type                                  | Default     |
| ------------- | ------------------------------------- | ----------- |
| `variant`     | `"default" \| "outline" \| "muted"`   | `"default"` |
| `size`        | `"default" \| "sm"`                   | `"default"` |
| `sortable`    | `boolean`                             | `false`     |
| `animated`    | `boolean`                             | `true`      |
| `transition`  | `ListTransitionProps`                 | -           |
| `tag`         | `string`                              | `"div"`     |

| Event      | Payload                                                |
| ---------- | ------------------------------------------------------ |
| `reorder`  | `{ id: string \| number; from: number; to: number }`   |

### ListTransitionProps

| Property            | Type                                          |
| ------------------- | --------------------------------------------- |
| `name`              | `string`                                      |
| `duration`          | `number \| { enter: number; leave: number }`  |
| `enterFromClass`    | `string`                                      |
| `enterActiveClass`  | `string`                                      |
| `enterToClass`      | `string`                                      |
| `leaveFromClass`    | `string`                                      |
| `leaveActiveClass`  | `string`                                      |
| `leaveToClass`      | `string`                                      |
| `moveClass`         | `string`                                      |

When `name` is set, only `name` and `duration` are forwarded to `<TransitionGroup>`; the per-stage classes are ignored.

### ListItem

| Prop       | Type               | Default |
| ---------- | ------------------ | ------- |
| `id`       | `string \| number` | -       |
| `index`    | `number`           | -       |
| `disabled` | `boolean`          | `false` |

`id` and `index` are required when the parent `List` is `sortable`. `disabled` opts a single item out of sorting.

### ListItemDragHandle

Renders a button that becomes the drag-initiation target for the parent `ListItem`. Default content is a grip icon; override with the default slot.

### Other parts

`ListItemMedia`, `ListItemContent`, `ListItemTitle`, `ListItemDescription`, `ListItemActions`, `ListItemHeader`, `ListItemFooter`, and `ListSeparator` mirror the shadcn-vue `Item` primitives — see the [Item docs](https://www.shadcn-vue.com/docs/components/item.html) for slot conventions.

## Notes

- The default leave animation positions the leaving element absolutely so siblings can slide into place. Combined with the `relative` class on the list root, this produces a natural settle.
- When `sortable` is enabled, the list is wrapped in a `DragDropProvider` from `@dnd-kit/vue`. Each `ListItem` registers itself with `useSortable`. Optimistic sorting is enabled by default.
- The reorder event is emitted only on drop and only when `from !== to`. The parent owns the data; `List` never mutates it.
