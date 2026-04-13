<script setup lang="ts">
import { StackMenu, StackMenuContent, StackMenuGroup, StackMenuItem, StackMenuSub, StackMenuSubContent, StackMenuSubTrigger, StackMenuTrigger } from "@vuzeno/registry/ui/stack-menu";
import { Button } from "@vuzeno/ui/components/button";
import { toast } from "@vuzeno/ui/components/sonner";
import { EllipsisIcon, HeartIcon, ListMusicIcon, ListPlusIcon, PlusCircleIcon, Share2Icon } from "lucide-vue-next";

function onShare() {
  toast("Shared");
}
</script>

<template>
  <StackMenu>
    <StackMenuTrigger>
      <Button variant="outline" size="icon">
        <EllipsisIcon class="size-4" />
      </Button>
    </StackMenuTrigger>

    <StackMenuContent>
      <StackMenuGroup>
        <StackMenuItem>
          <PlusCircleIcon class="size-4" />
          Add to queue
        </StackMenuItem>

        <StackMenuItem>
          <HeartIcon class="size-4" />
          Save to Liked Songs
        </StackMenuItem>

        <StackMenuSub>
          <StackMenuSubTrigger>
            <ListPlusIcon class="size-4" />
            Add to playlist
          </StackMenuSubTrigger>

          <StackMenuSubContent>
            <StackMenuGroup>
              <StackMenuItem @click="toast('Chill Vibes')">
                <ListMusicIcon class="size-4" />
                Chill Vibes
              </StackMenuItem>
              <StackMenuItem @click="toast('Late Night')">
                <ListMusicIcon class="size-4" />
                Late Night
              </StackMenuItem>
              <StackMenuItem>
                <PlusCircleIcon class="size-4" />
                New playlist
              </StackMenuItem>
            </StackMenuGroup>
          </StackMenuSubContent>
        </StackMenuSub>

        <StackMenuItem @click="onShare">
          <Share2Icon class="size-4" />
          Share
        </StackMenuItem>
      </StackMenuGroup>
    </StackMenuContent>
  </StackMenu>
</template>
