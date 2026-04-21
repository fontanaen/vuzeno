<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { formatTime } from "./utils";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "span",
    asChild: false,
  },
);

const ctx = injectVideoPlayerContext();

const current = computed(() => formatTime(ctx.currentTime.value));
const total = computed(() => formatTime(ctx.duration.value));
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="video-player-time-code"
    :class="cn('inline-flex items-center gap-1 font-mono text-xs tabular-nums', props.class)"
  >
    <slot :current="current" :total="total" :current-time="ctx.currentTime.value" :duration="ctx.duration.value">
      <span data-slot="video-player-time-code-current">{{ current }}</span>
      <span aria-hidden="true">/</span>
      <span data-slot="video-player-time-code-total">{{ total }}</span>
    </slot>
  </Primitive>
</template>
