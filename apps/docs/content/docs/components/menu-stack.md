---
title: MenuStack
description: A mobile-friendly bottom menu with stacked items and collapsible sub menus, as an alternative to dropdown menus on small screens.
tag: new
---

Bottom-anchored menu built on the dialog primitive. Items animate from a stacked layout into a list; opening a sub menu repositions surrounding rows. Use it where `DropdownMenu` feels cramped or hover-dependent.

::component-preview
---
name: MenuStackDemo
---
::

## Features

- **Mobile-first** — Opens from the bottom of the viewport with a dimmed overlay
- **Stacked animation** — Items transition from stacked to a full list layout
- **Collapsible sub menus** — `MenuStackSub` hides sibling items and expands nested `MenuStackGroup` content
- **Composable** — Same mental model as other menu primitives (trigger, content, group, item)

## MenuStack vs ActionSheet

Both components slide up from the bottom with an overlay, but they solve different jobs.

**ActionSheet** is modeled after the iOS action sheet: a short, focused list of **mutually meaningful choices**—often a primary decision, destructive option, or cancel. It behaves like a **blocking confirmation surface** (similar in spirit to an alert dialog): you typically pick one outcome or dismiss, and it works well with a **promise API** (`start()`) when async code needs to know what the user chose.

**MenuStack** is a **navigation-style overflow menu** for a screen or row: many commands, optional **sub menus**, and the same item can stay available while you drill in and out. It replaces cramped **dropdown** patterns on touch devices rather than posing a single “what do you want to do?” prompt.

Use ActionSheet when the flow is “choose one action or cancel.” Use MenuStack when the flow is “open a menu of commands (and possibly nested lists) from a trigger.”

See also: [Action Sheet](/docs/components/action-sheet).

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/menu-stack.json
exec: true
---
::

## Anatomy

```vue
<template>
  <MenuStack>
    <MenuStackTrigger />

    <MenuStackContent>
      <MenuStackGroup>
        <MenuStackItem />

        <MenuStackSub>
          <MenuStackSubTrigger />

          <MenuStackSubContent>
            <MenuStackGroup>
              <MenuStackItem />
            </MenuStackGroup>
          </MenuStackSubContent>
        </MenuStackSub>
      </MenuStackGroup>
    </MenuStackContent>
  </MenuStack>
</template>
```

## Examples

### Basic usage

Control visibility with `MenuStackTrigger` and compose rows with `MenuStackItem` inside `MenuStackGroup`.

```vue showLineNumbers
<script setup lang="ts">
import {
  MenuStack,
  MenuStackContent,
  MenuStackGroup,
  MenuStackItem,
  MenuStackTrigger,
} from "@vuzeno/registry/ui/menu-stack";
import { Button } from "@/components/button";
</script>

<template>
  <MenuStack>
    <MenuStackTrigger>
      <Button variant="outline">Open</Button>
    </MenuStackTrigger>

    <MenuStackContent>
      <MenuStackGroup>
        <MenuStackItem>Edit</MenuStackItem>
        <MenuStackItem>Duplicate</MenuStackItem>
        <MenuStackItem>Delete</MenuStackItem>
      </MenuStackGroup>
    </MenuStackContent>
  </MenuStack>
</template>
```

### With sub menu

Wrap expandable sections in `MenuStackSub`. The trigger must be `MenuStackSubTrigger`; nested items live in `MenuStackSubContent`.

::component-preview
---
name: MenuStackSubDemo
---
::

```vue showLineNumbers
<template>
  <MenuStackContent>
    <MenuStackGroup>
      <MenuStackItem>Home</MenuStackItem>

      <MenuStackSub>
        <MenuStackSubTrigger>Projects</MenuStackSubTrigger>

        <MenuStackSubContent>
          <MenuStackGroup>
            <MenuStackItem>Web app</MenuStackItem>
            <MenuStackItem>Mobile</MenuStackItem>
          </MenuStackGroup>
        </MenuStackSubContent>
      </MenuStackSub>

      <MenuStackItem>Settings</MenuStackItem>
    </MenuStackGroup>
  </MenuStackContent>
</template>
```

## Limitations

- **No group labels** — `MenuStackGroup` does not provide a label slot; use plain items or custom markup if needed later.
- **No scrolling** — Long lists are not scrollable; excess items can be clipped at the bottom of the screen.
- **Single open sub menu** — Only one `MenuStackSub` should be expanded at a time; multiple open subs are not supported.
- **Fixed row height** — Layout math assumes a constant item height; deeply custom content sizes may misalign animations.
