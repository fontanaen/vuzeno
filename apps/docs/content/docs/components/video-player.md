---
title: VideoPlayer
description: A composable HTML5 video player with custom controls, volume, speed, picture-in-picture, and fullscreen.
tag: new
---

A fully composable video player built on top of the native `<video>` element. Use it to assemble custom playback experiences with a timeline scrubber, play/pause toggle, timecode, hover-revealed volume slider, picture-in-picture, fullscreen, and an extensible settings menu (with built-in playback speed).

::component-preview
---
name: VideoPlayerDemo
---
::

## Features

- **Composable controls** — pick and place each part (`Play`, `TimeCode`, `Sound`, `Timeline`, …) wherever you want
- **Scrub preview** — `VideoPlayerTimelinePreview` mirrors the source as a floating thumbnail on hover and while dragging, with the actual seek committed only on release for smooth scrubbing
- **Hover volume slider** — `VideoPlayerSound` opens a popover with a vertical or horizontal volume slider
- **Built-in speed picker** — drop `VideoPlayerSpeed` into `VideoPlayerControlMenuContent` for a ready-made playback rate selector
- **Native Picture-in-Picture** — toggles `HTMLVideoElement.requestPictureInPicture()` and hides itself when the browser doesn't support it
- **Fullscreen mode** — toggles fullscreen on the whole player (video + controls), with `data-fullscreen` exposed for layout tweaks
- **Reactive context** — every part reads playback state from a shared context, so building your own controls is a one-liner

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/video-player.json
exec: true
---
::

## Anatomy

```vue
<template>
  <VideoPlayer>
    <VideoPlayerVideo>
      <VideoPlayerSource src="..." type="video/mp4" />
    </VideoPlayerVideo>

    <VideoPlayerControls>
      <VideoPlayerTimeline>
        <VideoPlayerTimelinePreview />
      </VideoPlayerTimeline>

      <VideoPlayerPlay />
      <VideoPlayerTimeCode />
      <VideoPlayerSound />
      <VideoPlayerPictureInPicture />
      <VideoPlayerFullscreen />

      <VideoPlayerControlMenu>
        <VideoPlayerControlMenuTrigger />
        <VideoPlayerControlMenuContent>
          <VideoPlayerSpeed />
        </VideoPlayerControlMenuContent>
      </VideoPlayerControlMenu>
    </VideoPlayerControls>
  </VideoPlayer>
</template>
```

- **VideoPlayer** — root container that provides the shared playback context and is the fullscreen target
- **VideoPlayerVideo** — wraps the native `<video>` element and wires its events into the context
- **VideoPlayerSource** — wraps a native `<source>` for one of the video's media formats
- **VideoPlayerControls** — overlay container positioned over the video with a gradient background
- **VideoPlayerTimeline** — slider bound to `currentTime` / `duration` for seeking; thumb and track expand on hover/focus/drag, and the actual seek is committed on pointer/key release
- **VideoPlayerTimelinePreview** — optional child of `VideoPlayerTimeline` that renders a muted, mirrored `<video>` thumbnail above the cursor while hovering or scrubbing
- **VideoPlayerPlay** — button that toggles between play and pause
- **VideoPlayerTimeCode** — displays `current / total` formatted as `m:ss` (or `h:mm:ss` past one hour)
- **VideoPlayerSound** — mute toggle button with a hover popover containing a volume slider
- **VideoPlayerPictureInPicture** — button that toggles native PiP; renders nothing when unsupported
- **VideoPlayerFullscreen** — button that toggles fullscreen on the player; renders nothing when unsupported
- **VideoPlayerControlMenu** — wraps a dropdown menu for arbitrary extra settings
- **VideoPlayerControlMenuTrigger** / **VideoPlayerControlMenuContent** — trigger and portaled content for the settings menu
- **VideoPlayerSpeed** — built-in playback rate radio group designed to live inside `VideoPlayerControlMenuContent`

## Examples

### Horizontal volume slider

Use `orientation="horizontal"` on `VideoPlayerSound` to get a horizontal slider in the popover instead of the default vertical one.

::component-preview
---
name: VideoPlayerSoundHorizontalDemo
---
::

## API Reference

### VideoPlayerVideo

| Prop          | Type                              | Default |
| ------------- | --------------------------------- | ------- |
| `src`         | `string`                          | -       |
| `poster`      | `string`                          | -       |
| `loop`        | `boolean`                         | -       |
| `autoplay`    | `boolean`                         | -       |
| `muted`       | `boolean`                         | -       |
| `playsinline` | `boolean`                         | -       |
| `preload`     | `"none" \| "metadata" \| "auto"` | -       |

### VideoPlayerSound

| Prop          | Type                                       | Default                                  |
| ------------- | ------------------------------------------ | ---------------------------------------- |
| `orientation` | `"vertical" \| "horizontal"`               | `"vertical"`                             |
| `side`        | `"top" \| "right" \| "bottom" \| "left"`   | inferred from `orientation`              |
| `sideOffset`  | `number`                                   | `8`                                      |

### VideoPlayerSpeed

| Prop     | Type       | Default                                   |
| -------- | ---------- | ----------------------------------------- |
| `speeds` | `number[]` | `[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2]`      |
| `label`  | `string`   | `"Playback speed"`                        |

### VideoPlayerTimeline

| Prop   | Type     | Default |
| ------ | -------- | ------- |
| `step` | `number` | `0.1`   |

### VideoPlayerTimelinePreview

| Prop           | Type      | Default |
| -------------- | --------- | ------- |
| `width`        | `number`  | `144`   |
| `showTimecode` | `boolean` | `true`  |

## Notes

- `VideoPlayerVideo` exposes a click-to-toggle behaviour on the underlying `<video>` element so users can pause/resume by clicking the video itself.
- The root forwards `data-playing`, `data-fullscreen`, and `data-pip` attributes so you can drive custom CSS off the player state.
- Fullscreen is requested on the whole `VideoPlayer` root (not just the video) so your controls overlay stays interactive in fullscreen mode.
- `VideoPlayerTimeline` defers the real seek until pointer/key release (reka-ui's `valueCommit`), so dragging only updates the floating preview — the main video doesn't churn through `currentTime` updates while scrubbing.
- `VideoPlayerTimelinePreview` mounts a second muted `<video>` element pointed at `videoRef.currentSrc` and seeks it via `requestAnimationFrame`. The same source is therefore loaded twice; if that's a concern, swap in a thumbnail sprite implementation.
