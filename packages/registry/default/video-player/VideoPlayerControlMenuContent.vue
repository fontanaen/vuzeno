<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import type { DropdownMenuContentEmits, DropdownMenuContentProps } from "reka-ui";
import { DropdownMenuContent, DropdownMenuPortal, useForwardPropsEmits } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { injectVideoPlayerContext } from "./VideoPlayer.vue";

const props = withDefaults(defineProps<DropdownMenuContentProps & { class?: HTMLAttributes["class"] }>(), {
  align: "end",
  side: "top",
  sideOffset: 8,
});
const emits = defineEmits<DropdownMenuContentEmits>();

const ctx = injectVideoPlayerContext();

const portalTarget = computed(() => (ctx.isFullscreen.value ? (ctx.rootRef.value ?? undefined) : undefined));

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuPortal :to="portalTarget">
    <DropdownMenuContent
      v-bind="forwarded"
      data-slot="video-player-control-menu-content"
      :class="
        cn(
          'z-50 min-w-32 overflow-hidden rounded-md border border-white/25 bg-white/15 p-1 text-popover-foreground shadow-md ring-1 ring-inset ring-white/20 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-white/15 dark:bg-accent/50 dark:ring-white/10',
          props.class,
        )
      "
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
