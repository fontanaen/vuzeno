<script setup lang="ts">
import { VideoPlayer, VideoPlayerControls, VideoPlayerPlay, VideoPlayerSound, VideoPlayerSource, VideoPlayerTimeCode, VideoPlayerTimeline, VideoPlayerVideo } from "@vuzeno/registry/ui/video-player";
</script>

<template>
  <VideoPlayer class="aspect-video w-full max-w-2xl">
    <VideoPlayerVideo
      class="size-full object-cover"
      preload="metadata"
      poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
      playsinline
    >
      <VideoPlayerSource
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        type="video/mp4"
      />
    </VideoPlayerVideo>

    <VideoPlayerControls>
      <VideoPlayerTimeline />

      <div class="flex items-center gap-1">
        <VideoPlayerPlay />

        <VideoPlayerSound orientation="horizontal" />

        <VideoPlayerTimeCode class="ml-1 text-white/90" />
      </div>
    </VideoPlayerControls>
  </VideoPlayer>
</template>
