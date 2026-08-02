---
title: Tour
description: Vue product tour to highlight UI steps with guided tooltips for onboarding and feature discovery.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/tour
---

::component-preview
---
component: tour
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/tour.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Tour, useTour } from "@/components/ui/tour";
</script>

<template>
  <Tour.Root :tour="tour">
    <!-- … -->
  </Tour.Root>
</template>
```

## Composition

```
Tour.Root
├── Tour.ActionTrigger
├── Tour.Actions
├── Tour.ArrowTip
├── Tour.Arrow
├── Tour.Backdrop
├── Tour.CloseTrigger
├── Tour.Content
├── Tour.Context
├── Tour.Control
├── Tour.Description
├── Tour.Positioner
├── Tour.ProgressText
├── Tour.Spotlight
├── Tour.Title
```

## Examples

### Step Types

Demonstrate all three step types in a single tour: `dialog` for welcome/completion, `tooltip` anchored to elements, and `floating` for fixed-position content.

::component-preview
---
component: tour
name: step-types
---
::

### Progress

Display a visual progress indicator at the bottom of the tour content showing how far along the user is.

::component-preview
---
component: tour
name: progress
---
::

### Skip

Allow users to skip the entire tour at any step by adding a skip action.

::component-preview
---
component: tour
name: skip
---
::

### Keyboard Navigation

Enable arrow key navigation between tour steps using the `keyboardNavigation` prop.

::component-preview
---
component: tour
name: keyboard-navigation
---
::

### Events

Listen to tour lifecycle events like `onStepChange` and `onStatusChange` to track user progress.

::component-preview
---
component: tour
name: events
---
::

### Wait for Click

Use the `effect` function with `waitForEvent` to wait for user interaction before proceeding to the next step.

::component-preview
---
component: tour
name: wait-for-click
---
::

### Wait for Input

Create form tutorials that wait for users to enter valid input before advancing.

::component-preview
---
component: tour
name: wait-for-input
---
::

### Wait for Element

Wait for dynamically rendered elements to appear in the DOM before showing a step.

::component-preview
---
component: tour
name: wait-for-element
---
::

### Async

Load data asynchronously and update step content before displaying it using the `effect` function with `show()` and `update()`.

::component-preview
---
component: tour
name: async
---
::

## API

See [Ark UI Tour docs](https://ark-ui.com/vue/docs/components/tour) for full props and examples.
