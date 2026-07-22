<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { HoverCard } from "@vuzeno/registry/ui/hover-card";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="open = !open">
      Toggle
    </Button>
    <HoverCard.Root v-model:open="open">
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
  </div>
</template>
