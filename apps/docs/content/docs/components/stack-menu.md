---
title: Stack Menu
description: A mobile-friendly bottom menu with stacked items and collapsible sub menus, as an alternative to dropdown menus on small screens.
tag: new
---

Bottom-anchored menu built on the dialog primitive. Items animate from a stacked layout into a list; opening a sub menu repositions surrounding rows. Use it where `DropdownMenu` feels cramped or hover-dependent.

::component-preview
---
name: StackMenuDemo
---
::

## Features

- **Mobile-first** — Opens from the bottom of the viewport with a dimmed overlay
- **Stacked animation** — Items transition from stacked to a full list layout
- **Collapsible sub menus** — `StackMenuSub` hides sibling items and expands nested `StackMenuGroup` content
- **Composable** — Same mental model as other menu primitives (trigger, content, group, item)

## StackMenu vs ActionSheet

Both components slide up from the bottom with an overlay, but they solve different jobs.

**ActionSheet** is modeled after the iOS action sheet: a short, focused list of **mutually meaningful choices**—often a primary decision, destructive option, or cancel. It behaves like a **blocking confirmation surface** (similar in spirit to an alert dialog): you typically pick one outcome or dismiss, and it works well with a **promise API** (`start()`) when async code needs to know what the user chose.

**StackMenu** is a **navigation-style overflow menu** for a screen or row: many commands, optional **sub menus**, and the same item can stay available while you drill in and out. It replaces cramped **dropdown** patterns on touch devices rather than posing a single “what do you want to do?” prompt.

Use ActionSheet when the flow is “choose one action or cancel.” Use StackMenu when the flow is “open a menu of commands (and possibly nested lists) from a trigger.”

See also: [Action Sheet](/docs/components/action-sheet).

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/stack-menu.json
exec: true
---
::

## Anatomy

```vue
<template>
  <StackMenu>
    <StackMenuTrigger />

    <StackMenuContent>
      <StackMenuGroup>
        <StackMenuItem />

        <StackMenuSub>
          <StackMenuSubTrigger />

          <StackMenuSubContent>
            <StackMenuGroup>
              <StackMenuItem />
            </StackMenuGroup>
          </StackMenuSubContent>
        </StackMenuSub>
      </StackMenuGroup>
    </StackMenuContent>
  </StackMenu>
</template>
```

## Examples

### Basic usage

Control visibility with `StackMenuTrigger` and compose rows with `StackMenuItem` inside `StackMenuGroup`.

```vue showLineNumbers
<script setup lang="ts">
import {
  StackMenu,
  StackMenuContent,
  StackMenuGroup,
  StackMenuItem,
  StackMenuTrigger,
} from "@vuzeno/registry/ui/stack-menu";
import { Button } from "@/components/button";
</script>

<template>
  <StackMenu>
    <StackMenuTrigger>
      <Button variant="outline">Open</Button>
    </StackMenuTrigger>

    <StackMenuContent>
      <StackMenuGroup>
        <StackMenuItem>Edit</StackMenuItem>
        <StackMenuItem>Duplicate</StackMenuItem>
        <StackMenuItem>Delete</StackMenuItem>
      </StackMenuGroup>
    </StackMenuContent>
  </StackMenu>
</template>
```

### With sub menu

Wrap expandable sections in `StackMenuSub`. The trigger must be `StackMenuSubTrigger`; nested items live in `StackMenuSubContent`.

::component-preview
---
name: StackMenuSubDemo
---
::

```vue showLineNumbers
<template>
  <StackMenuContent>
    <StackMenuGroup>
      <StackMenuItem>Home</StackMenuItem>

      <StackMenuSub>
        <StackMenuSubTrigger>Projects</StackMenuSubTrigger>

        <StackMenuSubContent>
          <StackMenuGroup>
            <StackMenuItem>Web app</StackMenuItem>
            <StackMenuItem>Mobile</StackMenuItem>
          </StackMenuGroup>
        </StackMenuSubContent>
      </StackMenuSub>

      <StackMenuItem>Settings</StackMenuItem>
    </StackMenuGroup>
  </StackMenuContent>
</template>
```

## Limitations

- **No group labels** — `StackMenuGroup` does not provide a label slot; use plain items or custom markup if needed later.
- **No scrolling** — Long lists are not scrollable; excess items can be clipped at the bottom of the screen.
- **Single open sub menu** — Only one `StackMenuSub` should be expanded at a time; multiple open subs are not supported.
- **Fixed row height** — Layout math assumes a constant item height; deeply custom content sizes may misalign animations.
