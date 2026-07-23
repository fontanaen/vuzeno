<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@lucide/vue";
import { HoverCard } from "@vuzeno/registry/ui/hover-card";
</script>

<template>
  <HoverCard.Root>
    <HoverCard.Context v-slot="context">
      <p>
        Liked by
        <HoverCard.Trigger as-child>
          <a href="#profile">
            @sarah_chen
            <ChevronUpIcon v-if="context.open" />
            <ChevronDownIcon v-else />
          </a>
        </HoverCard.Trigger>
        and 3 others
      </p>
    </HoverCard.Context>
    <Teleport to="body">
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <div class="flex flex-col gap-3">
            <img
              class="size-16 rounded-full object-cover"
              src="https://i.pravatar.cc/300?u=sarah"
              alt="Sarah Chen"
            >
            <div>
              <p class="m-0 text-[15px] font-bold leading-tight text-foreground">
                Sarah Chen
              </p>
              <p class="m-0 text-sm text-muted-foreground">
                @sarah_chen
              </p>
            </div>
            <p class="m-0 text-sm leading-snug text-foreground">
              Design Engineer at Acme Inc.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Teleport>
  </HoverCard.Root>
</template>
