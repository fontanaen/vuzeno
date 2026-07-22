---
title: Timer
description: Timer component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/timer
---

::component-preview
---
component: timer
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/timer.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Timer } from "@vuzeno/registry/ui/timer";
</script>

<template>
  <Timer.Root>
    <!-- … -->
  </Timer.Root>
</template>
```

## Composition

```
Timer.Root
├── Timer.Area
│   ├── Timer.ItemGroup
│   │   ├── Timer.Item
│   │   └── Timer.ItemLabel
│   └── Timer.Separator
├── Timer.Control
│   └── Timer.ActionTrigger
├── Timer.Context
└── Timer.RootProvider
```

## Examples

### Countdown

You can create a countdown timer by setting the `countdown` prop to `true` and `startMs` to the initial time:

::component-preview
---
component: timer
name: countdown
---
::

### Interval

Use the `interval` prop to control how frequently the timer updates. This is useful for displaying milliseconds:

::component-preview
---
component: timer
name: interval
---
::

### Events

The Timer component provides events that you can listen to for various timer-related actions.

- The `onComplete` event is triggered when the timer reaches its target time.
- The `onTick` event is called on each timer update, providing details about the current timer state.

::component-preview
---
component: timer
name: events
---
::

### Pomodoro

Here's an example of building a pomodoro timer that alternates between work and break sessions:

::component-preview
---
component: timer
name: pomodoro
---
::

### Root Provider

An alternative way to control the timer is to use the `RootProvider` component and the `useTimer` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: timer
name: root-provider
---
::

## API

See [Ark UI Timer docs](https://ark-ui.com/vue/docs/components/timer) for full props and examples.
