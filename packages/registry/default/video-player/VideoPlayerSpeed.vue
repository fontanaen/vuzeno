<script setup lang="ts">
import { DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from "@vuzeno/ui/components/dropdown-menu";
import { computed } from "vue";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";

type VideoPlayerSpeed = {
  label: string;
  value: number;
};

const props = defineProps<{
  label: string;
  speeds?: VideoPlayerSpeed[];
}>();

const ctx = injectVideoPlayerContext();

const value = computed({
  get() {
    return String(ctx.playbackRate.value);
  },
  set(next: string) {
    const parsed = Number.parseFloat(next);
    if (Number.isFinite(parsed)) {
      ctx.setPlaybackRate(parsed);
    }
  },
});
</script>

<template>
  <DropdownMenuLabel data-slot="video-player-speed-label" class="text-xs font-normal">
    {{ props.label }}
  </DropdownMenuLabel>
  <DropdownMenuRadioGroup v-model="value" data-slot="video-player-speed">
    <DropdownMenuRadioItem 
      v-for="speed in props.speeds" 
      :key="speed.value" 
      :value="String(speed.value)"
      class="focus:dark:bg-accent/50 text-xs"
    >
      {{ speed.label }}
    </DropdownMenuRadioItem>
  </DropdownMenuRadioGroup>
</template>
