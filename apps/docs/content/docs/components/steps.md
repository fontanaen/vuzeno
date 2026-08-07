---
title: Steps
description: Vue steps (stepper) to guide users through multi-step wizards and onboarding flows.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/steps
---

::component-preview
---
component: steps
name: basic
---
::

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/steps.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { Steps } from "@/components/ui/steps";
</script>

<template>
  <Steps.Root>
    <!-- … -->
  </Steps.Root>
</template>
```

## Composition

```
Steps.Root
├── Steps.CompletedContent
├── Steps.Content
├── Steps.Context
├── Steps.Indicator
├── Steps.ItemContext
├── Steps.Item
├── Steps.List
├── Steps.NextTrigger
├── Steps.PrevTrigger
├── Steps.Progress
├── Steps.RootProvider
├── Steps.Separator
├── Steps.Trigger
```

## Examples

### Controlled

Using the `RootProvider` component, you can control the active step by using the `step` prop and handling the `onStepChange` event.

::component-preview
---
component: steps
name: controlled
---
::

### Root Provider

An alternative way to control the steps is to use the `RootProvider` component and the `useSteps` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: steps
name: root-provider
---
::

### Vertical

Use the `orientation` prop to display the steps vertically.

::component-preview
---
component: steps
name: vertical
---
::

### Circular Progress

Show a circular progress indicator with the current step count (`X/X`), plus the title and description of the active step.

::component-preview
---
component: steps
name: circular-progress
---
::

### Linear Progress

Place a linear progress bar above the steps, synced to the completion percentage. The step list below omits separators.

::component-preview
---
component: steps
name: linear-progress
---
::

## API

See [Ark UI Steps docs](https://ark-ui.com/vue/docs/components/steps) for full props and examples.
