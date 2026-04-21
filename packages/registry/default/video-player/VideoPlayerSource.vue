<script setup lang="ts">
defineProps<{
  src: string;
  type?: string;
  media?: string;
}>();
</script>

<template>
  <source data-slot="video-player-source" :src="src" :type="type" :media="media" />
</template>
