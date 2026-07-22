---
title: Carousel
description: Carousel component built on Ark UI.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/carousel
---

::component-preview
---
component: carousel
name: basic
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/carousel.json
exec: true
---
::

## Usage

```vue
<template>
  <Carousel.Root>
    <Carousel.Control>
      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />
    </Carousel.Control>
    <Carousel.ItemGroup>
      <Carousel.Item />
    </Carousel.ItemGroup>
    <Carousel.IndicatorGroup>
      <Carousel.Indicator />
    </Carousel.IndicatorGroup>
  </Carousel.Root>
</template>
```

## Composition

```
Carousel.Root
├── Carousel.AutoplayIndicator
├── Carousel.ProgressText
├── Carousel.AutoplayTrigger
├── Carousel.Context
├── Carousel.Control
├── Carousel.IndicatorGroup
├── Carousel.Indicator
├── Carousel.ItemGroup
├── Carousel.Item
├── Carousel.NextTrigger
├── Carousel.PrevTrigger
├── Carousel.RootProvider
```

## Examples

### Controlled

To create a controlled Carousel component, you can manage the state of the carousel using the `page` prop and update it when the `onPageChange` event handler is called:

::component-preview
---
component: carousel
name: controlled
---
::

### Root Provider

An alternative way to control the carousel is to use the `RootProvider` component and the `useCarousel` hook. This way you can access the state and methods from outside the component.

::component-preview
---
component: carousel
name: root-provider
---
::

### Autoplay

Pass the `autoplay` and `loop` props to `Carousel.Root` to make the carousel play automatically.

::component-preview
---
component: carousel
name: autoplay
---
::

### Pause on Hover

This feature isn't built-in, but you can use the `play()` and `pause()` methods from `Carousel.Context` to implement pause on hover.

::component-preview
---
component: carousel
name: pause-on-hover
---
::

### Thumbnail Indicators

Replace default indicator dots with image thumbnails. Render each thumbnail inside `Carousel.Indicator` to create a visual preview of each slide:

::component-preview
---
component: carousel
name: thumbnail-indicators
---
::

### Vertical

Add the `orientation="vertical"` prop to `Carousel.Root` to switch the carousel to vertical scrolling. This can be helpful for displaying vertical galleries or content feeds.

::component-preview
---
component: carousel
name: vertical
---
::

### Dynamic

Manage slides dynamically by storing them in state and syncing the carousel page. Pass the `page` prop and `onPageChange` handler to `Carousel.Root`, and update `slideCount` when slides are added or removed. This demonstrates bidirectional state synchronization between your component state and the carousel.

::component-preview
---
component: carousel
name: dynamic
---
::

### Scroll to Slide

Use `Carousel.Context` to access the carousel API and call `api.scrollToIndex(index)` to programmatically navigate to a specific slide. This is useful for creating custom navigation or jump-to-slide functionality.

::component-preview
---
component: carousel
name: scroll-to-slide
---
::

### Slides Per Page

Display multiple slides simultaneously by setting the `slidesPerPage` prop on `Carousel.Root`. Use `api.pageSnapPoints` from `Carousel.Context` to render the correct number of indicators based on pages rather than individual slides. Add the `spacing` prop to control the gap between slides.

::component-preview
---
component: carousel
name: slides-per-page
---
::

### Spacing

Control the gap between slides using the `spacing` prop on `Carousel.Root`. Combine it with `slidesPerPage` to create layouts that show partial previews of adjacent slides.

::component-preview
---
component: carousel
name: spacing
---
::

### Variable Sizes

To allow slides with different widths, set the `autoSize` prop on `Carousel.Root`. This lets each `Carousel.Item` define its own width, and the carousel will adjust automatically. You can also use the `snapAlign` prop on individual items to control where each one snaps into view.

::component-preview
---
component: carousel
name: variable-sizes
---
::

## API

See [Ark UI Carousel docs](https://ark-ui.com/vue/docs/components/carousel) for full props and examples.
