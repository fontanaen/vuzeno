<script setup lang="ts">
import {
  VideoPlayer,
  VideoPlayerControlMenu,
  VideoPlayerControlMenuContent,
  VideoPlayerControlMenuTrigger,
  VideoPlayerControls,
  VideoPlayerFullscreen,
  VideoPlayerPictureInPicture,
  VideoPlayerPlay,
  VideoPlayerSound,
  VideoPlayerSource,
  VideoPlayerSpeed,
  VideoPlayerTimeCode,
  VideoPlayerTimeline,
  VideoPlayerTimelinePreview,
  VideoPlayerVideo,
} from "@vuzeno/registry/ui/video-player";
</script>

<template>
  <VideoPlayer class="aspect-video w-full max-w-2xl">
    <VideoPlayerVideo
      class="size-full object-cover"
      preload="metadata"
      poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      playsinline
    >
      <VideoPlayerSource
        src="https://res.cloudinary.com/demo/video/upload/sea_turtle.mp4"
        type="video/mp4"
      />
    </VideoPlayerVideo>

    <VideoPlayerControls>
      <VideoPlayerTimeline>
        <VideoPlayerTimelinePreview />
      </VideoPlayerTimeline>

      <div class="flex items-center gap-1">
        <VideoPlayerPlay />

        <VideoPlayerTimeCode class="ml-1 text-white/90" />

        <div class="ml-auto flex items-center gap-1">
          <VideoPlayerSound />

          <VideoPlayerPictureInPicture />

          <VideoPlayerControlMenu>
            <VideoPlayerControlMenuTrigger />

            <VideoPlayerControlMenuContent>
              <VideoPlayerSpeed
                label="Playback speed" 
                :speeds="[
                  { label: 'x2', value: 2 },
                  { label: 'x1.5', value: 1.5 }, 
                  { label: 'x1.25', value: 1.25 }, 
                  { label: 'x1', value: 1 }, 
                  { label: 'x0.75', value: 0.75 }, 
                  { label: 'x0.5', value: 0.5 }, 
                  { label: 'x0.25', value: 0.25 }, 
                ]"
              />
            </VideoPlayerControlMenuContent>
          </VideoPlayerControlMenu>

          <VideoPlayerFullscreen />
        </div>
      </div>
    </VideoPlayerControls>
  </VideoPlayer>
</template>
