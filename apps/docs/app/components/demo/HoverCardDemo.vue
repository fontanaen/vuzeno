<script setup lang="ts">
import { HoverCard } from "@vuzeno/registry/ui/hover-card";
</script>

<template>
  <HoverCard.Root>
    <p>
      Liked by
      <HoverCard.Trigger as-child>
        <a href="#profile">@sarah_chen</a>
      </HoverCard.Trigger>
      and 3 others
    </p>
    <Teleport to="body">
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <div class="flex flex-col gap-3">
            <div class="flex items-start justify-between gap-3">
              <img
                class="size-16 rounded-full object-cover"
                src="https://i.pravatar.cc/300?u=sarah"
                alt="Sarah Chen"
              >
              <button
                type="button"
                class="cursor-pointer rounded-full border-none bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Follow
              </button>
            </div>
            <div>
              <p class="m-0 text-[15px] font-bold leading-tight text-foreground">
                Sarah Chen
              </p>
              <p class="m-0 text-sm text-muted-foreground">
                @sarah_chen
              </p>
            </div>
            <p class="m-0 text-sm leading-snug text-foreground">
              Design Engineer at Acme Inc. Building beautiful interfaces and design systems.
            </p>
            <div class="flex gap-4 text-sm">
              <div class="flex gap-1">
                <span class="font-bold text-foreground">2,456</span>
                <span class="text-muted-foreground">Following</span>
              </div>
              <div class="flex gap-1">
                <span class="font-bold text-foreground">14.5K</span>
                <span class="text-muted-foreground">Followers</span>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Teleport>
  </HoverCard.Root>
</template>
